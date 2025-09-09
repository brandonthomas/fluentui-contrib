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

// Resource registry - single source of truth for all resources
const RESOURCE_REGISTRY = {
  'tokens-structure://docs/tokenComponentCategories.md': {
    name: 'Token Structure Documentation',
    description: 'Component categories and token structure documentation',
    mimeType: 'text/markdown',
    filePath: 'docs/tokens/tokenComponentCategories.md',
  },
  'tokens-structure://docs/token-rules.md': {
    name: 'Token System Rules and Architecture',
    description:
      'This document defines a comprehensive design token architecture with four hierarchical levels: primitive tokens (foundational values for all design properties), generic tokens (curated UI concepts that bridge primitives to components), group tokens (shared styling for component families), and control tokens (specific overrides for unique cases). It establishes naming conventions, atomic component categorization (from text/media elements to complex containers), and a resolution chain ensuring all group tokens connect through generics to primitives for consistent theming and scalability.',
    mimeType: 'text/markdown',
    filePath: 'docs/tokens/tokenRules_0908.md',
  },
  'tokens-structure://docs/token-guidance.md': {
    name: 'Token Guidance',
    description:
      'Practical guidance for using design tokens across components, with best practices, naming, and hierarchy tips. See also: tokens-structure://docs/tokenComponentCategories.md and tokens-structure://docs/token-group-map.md',
    mimeType: 'text/markdown',
    filePath: 'docs/tokens/tokenGuidance.md',
  },
  'tokens-structure://docs/token-group-map.md': {
    name: 'Token Group Map',
    description:
      'Map of semantic token groups to components and states; helps agents resolve which tokens to apply where. See also: tokens-structure://docs/tokenComponentCategories.md',
    mimeType: 'text/markdown',
    filePath: 'docs/tokens/tokenGroupMap.md',
  },
  'tokens-structure://docs/colors/token-primitive-colors.md': {
    name: 'Primitive Color Tokens',
    description:
      'Primitive color token catalog and relationships to semantic tokens; useful for theming and dark mode. See also: tokens-structure://docs/token-guidance.md',
    mimeType: 'text/markdown',
    filePath: 'docs/tokens/colors/tokenPrimitiveColors.md',
  },
  'tokens-structure://docs/button/token-group-button.md': {
    name: 'Button Token Group',
    description:
      'Button-specific token group definitions, including states (hover/focus/active) and variants; aligns with the global token group map.',
    mimeType: 'text/markdown',
    filePath: 'docs/tokens/button/tokenGroupButton.md',
  },
} as const;

// Helper function to generate capabilities from registry
function generateResourceCapabilities() {
  const capabilities: Record<
    string,
    { description: string; mimeType: string }
  > = {};

  for (const [uri, resource] of Object.entries(RESOURCE_REGISTRY)) {
    capabilities[uri] = {
      description: resource.description,
      mimeType: resource.mimeType,
    };
  }

  return capabilities;
}

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
        list_resources: {
          description: `List all available documentation resources in this MCP server.
            Returns metadata for all token documentation resources including URIs, names, descriptions, and MIME types.
            Use this when MCP clients don't automatically discover or list available resources.`,
        },
        get_resource_data: {
          description: `Get the actual content data from one or more token documentation resources.
            Use this to retrieve the full text content of documentation resources for analysis and reference.
            Supports fetching multiple resources in a single call for efficiency.`,
        },
      },
      resources: generateResourceCapabilities(),
    },
  }
);

// Tool: List all available resources
server.tool(
  'list_resources',
  "List all available Fluent UI documentation resources in this MCP server. Returns metadata for all token documentation resources including URIs, names, descriptions, and MIME types. Use this when MCP clients don't automatically discover or list available resources.",
  {}, // No parameters needed
  async () => {
    const resources = Object.entries(RESOURCE_REGISTRY).map(
      ([uri, resource]) => ({
        uri,
        name: resource.name,
        description: resource.description,
        mimeType: resource.mimeType,
      })
    );

    return {
      content: [
        {
          type: 'text',
          text: `# Available Fluent Documentation Resources

This MCP server provides ${
            resources.length
          } of Fluent token documentation resources:

${resources
  .map(
    (resource) => `## ${resource.name}
- **URI**: \`${resource.uri}\`
- **Description**: ${resource.description}
- **MIME Type**: ${resource.mimeType}
`
  )
  .join('\n')}

## Usage
Use the resource URIs above to access specific documentation through your MCP client's resource capabilities.
Or use the get_resource_data tool with these URIs to fetch the actual content data.
`,
        },
      ],
    };
  }
);

// Tool: Get resource data by URI(s)
server.tool(
  'get_resource_data',
  `Get the actual content data from one or more token documentation resources.
   Use this to retrieve the full text content of documentation resources for analysis and reference.
   Supports fetching multiple resources in a single call for efficiency.

   This tool works around MCP resource limitations in some hosts by directly reading the documentation files.`,
  {
    uris: z.array(z.string())
      .describe(`Array of resource URIs to fetch data from. Use the URIs from the list_resources tool.
        Example URIs:
        - tokens-structure://docs/tokenComponentCategories.md
        - tokens-structure://docs/token-guidance.md
        - tokens-structure://docs/token-group-map.md
        - tokens-structure://docs/colors/token-primitive-colors.md
        - tokens-structure://docs/button/token-group-button.md`),
  },
  async (args) => {
    const { uris } = args;

    try {
      const results = [];

      for (const uri of uris) {
        const resource =
          RESOURCE_REGISTRY[uri as keyof typeof RESOURCE_REGISTRY];

        if (!resource) {
          results.push({
            uri,
            success: false,
            error: `Resource not found. Available URIs: ${Object.keys(
              RESOURCE_REGISTRY
            ).join(', ')}`,
          });
          continue;
        }

        try {
          const docPath = join(newDirName, resource.filePath);
          const content = readFileSync(docPath, 'utf-8');

          results.push({
            uri,
            success: true,
            name: resource.name,
            description: resource.description,
            mimeType: resource.mimeType,
            content,
          });
        } catch (error) {
          results.push({
            uri,
            success: false,
            error: `Failed to read file: ${
              error instanceof Error ? error.message : String(error)
            }`,
          });
        }
      }

      const successCount = results.filter((r) => r.success).length;
      const failureCount = results.filter((r) => !r.success).length;

      return {
        content: [
          {
            type: 'text',
            text: `# Resource Data Results

**Requested:** ${uris.length} resource(s)
**Success:** ${successCount}
**Failed:** ${failureCount}

${results
  .map((result, index) => {
    if (result.success) {
      return `## ${index + 1}. ${result.name}

**URI:** \`${result.uri}\`
**Description:** ${result.description}
**MIME Type:** ${result.mimeType}

### Content:
${result.content}

---
`;
    } else {
      return `## ${index + 1}. Failed: ${result.uri}

**Error:** ${result.error}

---
`;
    }
  })
  .join('\n')}`,
          },
        ],
      };
    } catch (error) {
      throw new Error(
        `Failed to fetch resource data: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
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

// Register all resources from registry
for (const [uri, resource] of Object.entries(RESOURCE_REGISTRY)) {
  server.resource(
    resource.name,
    uri,
    {
      description: resource.description,
      mimeType: resource.mimeType,
    },
    async () => {
      try {
        const docPath = join(newDirName, resource.filePath);
        const content = readFileSync(docPath, 'utf-8');
        return {
          contents: [
            {
              uri,
              mimeType: resource.mimeType,
              text: content,
            },
          ],
        };
      } catch (error) {
        throw new Error(
          `Failed to read ${resource.name}: ${
            error instanceof Error ? error.message : String(error)
          }`
        );
      }
    }
  );
}

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
