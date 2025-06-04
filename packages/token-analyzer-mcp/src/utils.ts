import { exec } from 'child_process';
import { promisify } from 'util';

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
