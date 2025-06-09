import { analyzeProjectStyles } from '@fluentui-contrib/token-analyzer';
import type { AnalysisResults } from '@fluentui-contrib/token-analyzer';

export interface ProjectInfo {
  isValid: boolean;
  hasNodeModules: boolean;
  hasPackageJson: boolean;
  hasStyleFiles: boolean;
  error?: string;
}

export interface AnalysisResult {
  success: boolean;
  data: AnalysisResults;
  summary: string;
  error?: string;
}

/**
 * Run the token analyzer programmatically and return results
 */
export async function runTokenAnalyzer(options: {
  projectPath: string;
  enableDebug?: boolean;
  enablePerfTrace?: boolean;
}): Promise<AnalysisResult> {
  try {
    if (options.enableDebug) {
      console.error(`Analyzing project: ${options.projectPath}`);
    }

    // Call the programmatic API directly
    // Second parameter (outputFile) is undefined to skip file output
    // Third parameter is the options object that matches the actual API
    const analysisResults: AnalysisResults = await analyzeProjectStyles(
      options.projectPath,
      undefined, // No output file - return results directly
      {
        debug: options.enableDebug || false,
        perf: options.enablePerfTrace || false,
      }
    );

    if (options.enableDebug) {
      console.error('Analysis completed successfully');
    }

    // Generate a simple summary
    const summary = generateSummary(analysisResults);

    return {
      success: true,
      data: analysisResults,
      summary,
    };
  } catch (error) {
    let errorMessage = 'Unknown error';

    if (error instanceof Error) {
      if (error.message.includes('ENOENT')) {
        errorMessage =
          'Project path not found. Please verify the path exists and is accessible.';
      } else if (error.message.includes('package.json')) {
        errorMessage =
          'Invalid project structure. Ensure the project has a package.json and node_modules.';
      } else if (error.message.includes('styles')) {
        errorMessage =
          'No style files found. Ensure the project contains *.styles.ts files.';
      } else if (error.message.includes('timeout')) {
        errorMessage =
          'Analysis timed out. Try a smaller project or check for infinite loops in style files.';
      } else {
        errorMessage = error.message;
      }
    }

    return {
      success: false,
      data: {} as AnalysisResults,
      summary: 'Analysis failed',
      error: errorMessage,
    };
  }
}

/**
 * Generate a simple summary from analysis data
 * Updated to work with the actual AnalysisResults type
 */
function generateSummary(data: AnalysisResults): string {
  try {
    const files = Object.keys(data);
    let totalStyles = 0;
    let totalTokens = 0;
    const tokenSet = new Set<string>();

    files.forEach((fileName) => {
      const fileData = data[fileName];
      if (fileData?.styles) {
        const styleFunctions = Object.keys(fileData.styles);
        totalStyles += styleFunctions.length;

        // Count tokens (adapted for actual data structure)
        styleFunctions.forEach((styleFuncName) => {
          const styleFunc = fileData.styles[styleFuncName];
          if (styleFunc && typeof styleFunc === 'object') {
            Object.values(styleFunc).forEach((variant: any) => {
              if (variant?.tokens && Array.isArray(variant.tokens)) {
                variant.tokens.forEach((tokenUsage: any) => {
                  totalTokens++;
                  if (tokenUsage?.token) {
                    if (Array.isArray(tokenUsage.token)) {
                      tokenUsage.token.forEach((token: string) =>
                        tokenSet.add(token)
                      );
                    } else if (typeof tokenUsage.token === 'string') {
                      tokenSet.add(tokenUsage.token);
                    }
                  }
                });
              }
            });
          }
        });
      }
    });

    if (files.length === 0) {
      return 'No style files found in the project.';
    }

    return `Found ${files.length} style files with ${totalStyles} style functions using ${tokenSet.size} unique tokens (${totalTokens} total usages).`;
  } catch (error) {
    console.error('Summary generation error:', error);
    return 'Analysis completed but summary generation failed.';
  }
}

/**
 * Validate project structure before analysis
 */
export async function validateProject(
  projectPath: string
): Promise<ProjectInfo> {
  // This function can remain mostly the same or be simplified
  // since the programmatic API will handle most validation
  try {
    const fs = await import('fs/promises');
    const path = await import('path');

    const packageJsonPath = path.join(projectPath, 'package.json');
    const nodeModulesPath = path.join(projectPath, 'node_modules');

    const [hasPackageJson, hasNodeModules] = await Promise.all([
      fs
        .access(packageJsonPath)
        .then(() => true)
        .catch(() => false),
      fs
        .access(nodeModulesPath)
        .then(() => true)
        .catch(() => false),
    ]);

    // Check for style files (simplified check)
    let hasStyleFiles = false;
    try {
      const files = await fs.readdir(projectPath, { recursive: true });
      hasStyleFiles = files.some(
        (file: any) => typeof file === 'string' && file.endsWith('.styles.ts')
      );
    } catch {
      // If we can't read the directory, let the analyzer handle it
      hasStyleFiles = true;
    }

    const isValid = hasPackageJson && hasNodeModules;

    return {
      isValid,
      hasPackageJson,
      hasNodeModules,
      hasStyleFiles,
    };
  } catch (error) {
    return {
      isValid: false,
      hasPackageJson: false,
      hasNodeModules: false,
      hasStyleFiles: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
