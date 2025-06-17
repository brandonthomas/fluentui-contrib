#!/usr/bin/env node

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { runTokenAnalyzer } from './utils';

// Create MCP server with basic info
const server = new McpServer(
  {
    name: '@fluentui-contrib/token-analyzer-mcp',
    version: '0.1.0',
  },
  {
    capabilities: {
      tools: {
        analyze_token_usage: {
          description: 'Analyze token usage in a project directory',
        },
      },
      resources: {},
    },
  }
);

// Tool 1: Basic token analysis
// Using 4-arg overload (name, description, paramsShape, callback)
server.tool(
  'analyze_token_usage',
  'Analyze token usage in a project directory',
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
  async (args) => {
    const { projectPath, enableDebug } = args;
    try {
      // Run the token analyzer
      const result = await runTokenAnalyzer({ projectPath, enableDebug });
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
${JSON.stringify(result.data)}
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
