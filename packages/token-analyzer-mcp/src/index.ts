#!/usr/bin/env node

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { runTokenAnalyzer, checkBasicRequirements } from './utils';

// Create MCP server with basic info
const server = new McpServer(
  {
    name: '@fluentui-contrib/token-analyzer-mcp',
    version: '0.1.0',
  },
  {
    capabilities: {
      tools: {},
      resources: {},
    },
  }
);

// Tool 1: Basic token analysis
server.tool(
  'analyze_token_usage',
  {
    projectPath: z
      .string()
      .describe('Path to the project directory to analyze'),
    enableDebug: z
      .boolean()
      .optional()
      .describe('Enable debug mode for verbose logging')
      .default(false),
  },
  async ({ projectPath, enableDebug }) => {
    try {
      // Basic validation
      await checkBasicRequirements(projectPath);

      // Run the token analyzer
      const result = await runTokenAnalyzer({
        projectPath,
        enableDebug,
      });

      return {
        content: [
          {
            type: 'text',
            text: `# Token Analysis Results

**Project:** ${projectPath}
**Status:** ✅ Analysis completed successfully

## Summary
${result.summary}

## Raw Analysis
\`\`\`json
${JSON.stringify(result.data, null, 2)}
\`\`\`
`,
          },
        ],
      };
    } catch (error) {
      throw new Error(
        `Analysis failed: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  }
);

// Tool 2: Quick project info
server.tool(
  'get_project_info',
  {
    projectPath: z.string().describe('Path to the project directory'),
  },
  async ({ projectPath }) => {
    try {
      const info = await checkBasicRequirements(projectPath);

      return {
        content: [
          {
            type: 'text',
            text: `# Project Information

**Path:** ${projectPath}
**Status:** ${info.isValid ? '✅ Ready for analysis' : '❌ Issues found'}

## Details
- **Has node_modules:** ${info.hasNodeModules ? 'Yes' : 'No'}
- **Has package.json:** ${info.hasPackageJson ? 'Yes' : 'No'}
- **Has style files:** ${info.hasStyleFiles ? 'Yes' : 'No'}

${
  info.isValid
    ? 'This project is ready for token analysis!'
    : 'Please ensure the project has dependencies installed and contains *.styles.ts files.'
}
`,
          },
        ],
      };
    } catch (error) {
      throw new Error(
        `Project check failed: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  }
);

// Tool 3: Simple file analysis (for testing)
server.tool(
  'analyze_file',
  {
    projectPath: z.string().describe('Path to the project directory'),
    fileName: z.string().describe('Name of the .styles.ts file to analyze'),
  },
  async ({ projectPath, fileName }) => {
    try {
      await checkBasicRequirements(projectPath);

      const result = await runTokenAnalyzer({
        projectPath,
        enableDebug: false,
      });

      // Find the specific file in the results
      const fileKey = Object.keys(result.data).find((key) =>
        key.toLowerCase().includes(fileName.toLowerCase())
      );

      if (!fileKey) {
        return {
          content: [
            {
              type: 'text',
              text: `# File Not Found

**File:** ${fileName}
**Available files:**
${Object.keys(result.data)
  .map((f) => `- ${f}`)
  .join('\n')}
`,
            },
          ],
        };
      }

      const fileData = result.data[fileKey];
      const styleFunctions = Object.keys(fileData.styles || {});

      return {
        content: [
          {
            type: 'text',
            text: `# File Analysis: ${fileKey}

**Style Functions:** ${styleFunctions.length}
**Functions:** ${styleFunctions.join(', ')}

## Details
\`\`\`json
${JSON.stringify(fileData, null, 2)}
\`\`\`
`,
          },
        ],
      };
    } catch (error) {
      throw new Error(
        `File analysis failed: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  }
);

// Resource: Basic usage guide
server.resource(
  'usage_guide',
  'Quick start guide for using the token analyzer MCP',
  async () => {
    return {
      content: [
        {
          type: 'text',
          text: `# Token Analyzer MCP - Quick Start

## Available Tools

### \`analyze_token_usage\`
Analyze token usage in your project:
\`\`\`json
{
  "projectPath": "./my-project",
  "enableDebug": false
}
\`\`\`

### \`get_project_info\`
Check if your project is ready for analysis:
\`\`\`json
{
  "projectPath": "./my-project"
}
\`\`\`

### \`analyze_file\`
Analyze a specific style file:
\`\`\`json
{
  "projectPath": "./my-project",
  "fileName": "useButtonStyles.styles.ts"
}
\`\`\`

## Requirements

1. **Project must have dependencies installed** (\`npm install\`)
2. **Token analyzer must be available** (\`npm install -g @fluentui-contrib/token-analyzer\`)
3. **Project should contain *.styles.ts files**

## Testing

1. Use \`get_project_info\` first to verify setup
2. Run \`analyze_token_usage\` to get full analysis
3. Use \`analyze_file\` to examine specific files

Happy analyzing! 🚀
`,
        },
      ],
    };
  }
);

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);

  // Log to stderr so it doesn't interfere with MCP protocol
  console.error('Token Analyzer MCP Server started successfully');
  console.error('Use Ctrl+C to stop the server');
}

// Clean error handling
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error.message);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
  process.exit(1);
});

// Start the server
main().catch((error) => {
  console.error('Failed to start server:', error.message);
  process.exit(1);
});
