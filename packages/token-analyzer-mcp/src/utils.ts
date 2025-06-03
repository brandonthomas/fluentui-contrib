import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';

const execAsync = promisify(exec);

export interface ProjectInfo {
  isValid: boolean;
  hasNodeModules: boolean;
  hasPackageJson: boolean;
  hasStyleFiles: boolean;
  error?: string;
}

export interface AnalysisResult {
  success: boolean;
  data: any;
  summary: string;
  error?: string;
}

/**
 * Get the token analyzer CLI command
 * Supports environment variable override for development
 */
export function getTokenAnalyzerCommand(): string {
  // Environment variable override (for development)
  if (process.env.TOKEN_ANALYZER_CLI) {
    return process.env.TOKEN_ANALYZER_CLI;
  }

  // Default to global install (what we'll use for testing)
  return 'token-analyzer';
}

/**
 * Basic project validation
 * Checks the essentials without being too strict
 */
export async function checkBasicRequirements(
  projectPath: string
): Promise<ProjectInfo> {
  const info: ProjectInfo = {
    isValid: false,
    hasNodeModules: false,
    hasPackageJson: false,
    hasStyleFiles: false,
  };

  try {
    // Check if project path exists
    const stats = await fs.stat(projectPath);
    if (!stats.isDirectory()) {
      info.error = `Path "${projectPath}" is not a directory`;
      return info;
    }

    // Check for node_modules
    try {
      await fs.access(path.join(projectPath, 'node_modules'));
      info.hasNodeModules = true;
    } catch {
      // Not required, but helpful
    }

    // Check for package.json
    try {
      await fs.access(path.join(projectPath, 'package.json'));
      info.hasPackageJson = true;
    } catch {
      // Not required, but helpful
    }

    // Quick check for style files
    info.hasStyleFiles = await hasStyleFiles(projectPath);

    // Consider it valid if we can access the path
    // We'll let the token analyzer handle detailed validation
    info.isValid = true;
  } catch (error) {
    info.error = `Cannot access project path: ${
      error instanceof Error ? error.message : String(error)
    }`;
  }

  return info;
}

/**
 * Run the token analyzer CLI and return results
 */
export async function runTokenAnalyzer(options: {
  projectPath: string;
  enableDebug?: boolean;
  outputPath?: string;
}): Promise<AnalysisResult> {
  try {
    const command = getTokenAnalyzerCommand();
    let fullCommand = `${command} --root "${options.projectPath}"`;

    if (options.outputPath) {
      fullCommand += ` --output "${options.outputPath}"`;
    }

    if (options.enableDebug) {
      fullCommand += ` --debug`;
    }

    console.error(`Running: ${fullCommand}`); // Log to stderr for debugging

    const { stdout, stderr } = await execAsync(fullCommand, {
      timeout: 60000, // 60 second timeout
      cwd: options.projectPath,
    });

    if (stderr && options.enableDebug) {
      console.error('Token analyzer stderr:', stderr);
    }

    // Parse the JSON output
    let data;
    try {
      data = JSON.parse(stdout);
    } catch (parseError) {
      return {
        success: false,
        data: {},
        summary: 'Failed to parse analyzer output',
        error: `JSON parse error: ${
          parseError instanceof Error ? parseError.message : String(parseError)
        }`,
      };
    }

    // Generate a simple summary
    const summary = generateSummary(data);

    return {
      success: true,
      data,
      summary,
    };
  } catch (error) {
    let errorMessage = 'Unknown error';

    if (error instanceof Error) {
      if (error.message.includes('token-analyzer')) {
        errorMessage =
          'Token analyzer CLI not found. Please install it globally: npm install -g @fluentui-contrib/token-analyzer';
      } else if (error.message.includes('timeout')) {
        errorMessage =
          'Analysis timed out. Try a smaller project or increase timeout.';
      } else {
        errorMessage = error.message;
      }
    }

    return {
      success: false,
      data: {},
      summary: 'Analysis failed',
      error: errorMessage,
    };
  }
}

/**
 * Generate a simple summary from analysis data
 */
function generateSummary(data: any): string {
  try {
    const files = Object.keys(data);
    let totalStyles = 0;
    let totalTokens = 0;
    const tokenSet = new Set<string>();

    files.forEach((fileName) => {
      const fileData = data[fileName];
      if (fileData.styles) {
        const styleFunctions = Object.keys(fileData.styles);
        totalStyles += styleFunctions.length;

        // Count tokens (simplified)
        styleFunctions.forEach((styleFuncName) => {
          const styleFunc = fileData.styles[styleFuncName];
          Object.values(styleFunc).forEach((variant: any) => {
            if (variant.tokens) {
              variant.tokens.forEach((tokenUsage: any) => {
                totalTokens++;
                if (tokenUsage.token) {
                  tokenUsage.token.forEach((token: string) =>
                    tokenSet.add(token)
                  );
                }
              });
            }
          });
        });
      }
    });

    return `Found ${files.length} style files with ${totalStyles} style functions using ${tokenSet.size} unique tokens (${totalTokens} total usages).`;
  } catch (error) {
    return 'Analysis completed but summary generation failed.';
  }
}

/**
 * Quick check for style files (simplified)
 */
async function hasStyleFiles(projectPath: string): Promise<boolean> {
  try {
    // Simple recursive check with depth limit
    return await findStyleFiles(projectPath, 0, 2);
  } catch {
    return false;
  }
}

/**
 * Recursive style file search with depth limit
 */
async function findStyleFiles(
  dir: string,
  depth: number,
  maxDepth: number
): Promise<boolean> {
  if (depth > maxDepth) return false;

  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    // Check files in current directory
    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith('.styles.ts')) {
        return true;
      }
    }

    // Check subdirectories (skip node_modules and hidden dirs)
    for (const entry of entries) {
      if (
        entry.isDirectory() &&
        !entry.name.startsWith('.') &&
        entry.name !== 'node_modules' &&
        entry.name !== 'dist' &&
        entry.name !== 'build'
      ) {
        const found = await findStyleFiles(
          path.join(dir, entry.name),
          depth + 1,
          maxDepth
        );
        if (found) return true;
      }
    }

    return false;
  } catch {
    return false;
  }
}
