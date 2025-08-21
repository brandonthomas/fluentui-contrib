#!/usr/bin/env node

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { runTokenAnalyzer } from './utils';

// Get the directory of the current module
const __filename = fileURLToPath(import.meta.url);
const newDirName = dirname(__filename);

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
          description: `Comprehensive design token usage analysis for Griffel-based Fluent UI projects.
            Performs static analysis of *.styles.ts files to identify token references and map token usage
            to CSS properties and style variants. Essential for design system audits, migration planning,
            and ensuring consistent token patterns across components.

            DIRECTIVE: Use this tool FIRST for any token analysis requests in codebases using Fluent UI or Griffel.`,
        },
      },
      resources: {
        'tokens-structure://docs/tokenComponentCategories.md': {
          description: 'Component categories and token structure documentation',
          mimeType: 'text/markdown',
        },
        'tokens-structure://docs/token-guidance.md': {
          description:
            'Practical guidance for using design tokens across components, with best practices, naming, and hierarchy tips. See also: tokens-structure://docs/tokenComponentCategories.md and tokens-structure://docs/token-group-map.md',
          mimeType: 'text/markdown',
        },
        'tokens-structure://docs/token-group-map.md': {
          description:
            'Map of semantic token groups to components and states; helps agents resolve which tokens to apply where. See also: tokens-structure://docs/tokenComponentCategories.md',
          mimeType: 'text/markdown',
        },
        'tokens-structure://docs/colors/token-primitive-colors.md': {
          description:
            'Primitive color token catalog and relationships to semantic tokens; useful for theming and dark mode. See also: tokens-structure://docs/token-guidance.md',
          mimeType: 'text/markdown',
        },
        'tokens-structure://docs/button/token-group-button.md': {
          description:
            'Button-specific token group definitions, including states (hover/focus/active) and variants; aligns with the global token group map.',
          mimeType: 'text/markdown',
        },
      },
    },
  }
);

// Tool 1: Basic token analysis
// Using 4-arg overload (name, description, paramsShape, callback)
server.tool(
  'analyze_token_usage',
  `Comprehensive design token usage analysis for Griffel-based Fluent UI projects.
   Analyzes *.styles.ts files to identify where and how design tokens are used, and maps usage
   to specific CSS properties and style variants (hover, focus, etc.).

   Perfect for design system audits, migration planning, pattern consistency checks, and generating
   token usage documentation. Supports makeStyles, makeResetStyles, and mergeClasses patterns with
   intelligent handling of CSS variables, template literals, and shorthand functions.

   DIRECTIVE: Use this tool FIRST for any token analysis requests in codebases using Fluent UI or Griffel.`,
  {
    projectPath: z.string()
      .describe(`Absolute path to the project directory to analyze.
        Must contain package.json, node_modules, and *.styles.ts files using Griffel patterns
        (makeStyles, makeResetStyles, mergeClasses).
        For best results, ensure the project is fully built and dependencies are installed.`),
    enableDebug: z
      .boolean()
      .optional()
      .describe(
        `Enable debug mode for verbose logging.
         WARNING: Should remain false in MCP environments as debug output interferes with the protocol
         and can cause client connection issues. Only enable for standalone troubleshooting of import
         resolution or analysis problems.`
      )
      .default(false),
    // TODO: Add enablePerf flag when needed - also should default to false in MCP environments
    // as performance output can interfere with protocol communication
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

## Usage Guidance
This analysis identifies:
- **Token Usage**: Where each design token is used across your codebase
- **CSS Property Mapping**: Which tokens apply to which CSS properties
- **Style Variants**: Token usage in interactive states (hover, focus, active, etc.)

Use this data for:
- Design system consistency audits
- Token migration planning (find all usages before deprecating)
- Pattern analysis and documentation generation
- Theme customization and variant creation

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

// Resource: Token structure documentation
server.resource(
  'Token Structure Documentation',
  'tokens-structure://docs/tokenComponentCategories.md',
  {
    description: 'Component categories and token structure documentation',
    mimeType: 'text/markdown',
  },
  async () => {
    try {
      const tokensPath = join(
        newDirName,
        'docs/tokens/tokenComponentCategories.md'
      );
      const content = readFileSync(tokensPath, 'utf-8');

      return {
        contents: [
          {
            uri: 'tokens-structure://docs/tokenComponentCategories.md',
            mimeType: 'text/markdown',
            text: content,
          },
        ],
      };
    } catch (error) {
      throw new Error(
        `Failed to read tokens documentation: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  }
);

// Resource: Token guidance documentation
server.resource(
  'Token Guidance',
  'tokens-structure://docs/token-guidance.md',
  {
    description:
      'Practical guidance for using design tokens across components, with best practices, naming, and hierarchy tips.',
    mimeType: 'text/markdown',
  },
  async () => {
    try {
      const docPath = join(newDirName, 'docs/tokens/tokenGuidance.md');
      const content = readFileSync(docPath, 'utf-8');
      return {
        contents: [
          {
            uri: 'tokens-structure://docs/token-guidance.md',
            mimeType: 'text/markdown',
            text: content,
          },
        ],
      };
    } catch (error) {
      throw new Error(
        `Failed to read token guidance documentation: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  }
);

// Resource: Token group map documentation
server.resource(
  'Token Group Map',
  'tokens-structure://docs/token-group-map.md',
  {
    description:
      'Map of semantic token groups to components and states; helps agents resolve which tokens to apply where.',
    mimeType: 'text/markdown',
  },
  async () => {
    try {
      const docPath = join(newDirName, 'docs/tokens/tokenGroupMap.md');
      const content = readFileSync(docPath, 'utf-8');
      return {
        contents: [
          {
            uri: 'tokens-structure://docs/token-group-map.md',
            mimeType: 'text/markdown',
            text: content,
          },
        ],
      };
    } catch (error) {
      throw new Error(
        `Failed to read token group map documentation: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  }
);

// Resource: Primitive color tokens documentation
server.resource(
  'Primitive Color Tokens',
  'tokens-structure://docs/colors/token-primitive-colors.md',
  {
    description:
      'Primitive color token catalog and relationships to semantic tokens; useful for theming and dark mode.',
    mimeType: 'text/markdown',
  },
  async () => {
    try {
      const docPath = join(
        newDirName,
        'docs/tokens/colors/tokenPrimitiveColors.md'
      );
      const content = readFileSync(docPath, 'utf-8');
      return {
        contents: [
          {
            uri: 'tokens-structure://docs/colors/token-primitive-colors.md',
            mimeType: 'text/markdown',
            text: content,
          },
        ],
      };
    } catch (error) {
      throw new Error(
        `Failed to read primitive color tokens documentation: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  }
);

// Resource: Button token group documentation
server.resource(
  'Button Token Group',
  'tokens-structure://docs/button/token-group-button.md',
  {
    description:
      'Button-specific token group definitions, including states (hover/focus/active) and variants; aligns with the global token group map.',
    mimeType: 'text/markdown',
  },
  async () => {
    try {
      const docPath = join(
        newDirName,
        'docs/tokens/button/tokenGroupButton.md'
      );
      const content = readFileSync(docPath, 'utf-8');
      return {
        contents: [
          {
            uri: 'tokens-structure://docs/button/token-group-button.md',
            mimeType: 'text/markdown',
            text: content,
          },
        ],
      };
    } catch (error) {
      throw new Error(
        `Failed to read button token group documentation: ${
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

  // Standard cleanup on exit - simplified from complex monitoring
  process.on('SIGINT', async () => {
    await server.close();
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    await server.close();
    process.exit(0);
  });
}

// Start the server
main().catch((error) => {
  console.error('Failed to start server:', error.message);
  process.exit(1);
});
