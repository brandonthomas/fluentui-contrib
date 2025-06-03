# @fluentui-contrib/token-analyzer-mcp

Model Context Protocol (MCP) server for Fluent UI token analysis. Enables AI assistants to analyze, understand, and provide recommendations for design token usage in Griffel-based projects.

## 🚀 What is MCP?

Model Context Protocol (MCP) is a standard that allows AI models to connect with external tools and data sources. Think of it as a way for AI assistants (like Claude, GitHub Copilot, etc.) to "use tools" in your development environment.

This MCP server gives AI assistants the ability to:

- Analyze token usage in your Griffel projects
- Compare your patterns with Fluent UI best practices
- Provide intelligent recommendations for token usage
- Help with consistency and accessibility compliance

## 📋 Prerequisites

### Required

- **Node.js 18+**
- **@fluentui-contrib/token-analyzer** (installed globally or in project)
- **Target project with dependencies installed** (`npm install` run)

### Recommended

- **@fluentui-contrib/token-analyzer-reference** (for pattern comparisons)

## 🔧 Installation

### Development (Testing with TGZ)

```bash
# 1. Build the MCP server
nx build token-analyzer-mcp

# 2. Create TGZ package
cd packages/token-analyzer-mcp
npm pack

# 3. Install globally for testing
npm install -g ./fluentui-contrib-token-analyzer-mcp-0.1.0.tgz

# 4. Test with MCP Inspector
npx @modelcontextprotocol/inspector token-analyzer-mcp
```

### Production

```bash
npm install @fluentui-contrib/token-analyzer-mcp
```

## 🎯 Usage

### With Claude Desktop

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "fluent-tokens": {
      "command": "token-analyzer-mcp"
    }
  }
}
```

### With VS Code (Future GitHub Copilot Integration)

```json
{
  "mcp.servers": {
    "fluent-tokens": {
      "command": "token-analyzer-mcp"
    }
  }
}
```

### Environment Variables

```bash
# Use custom token analyzer CLI
export TOKEN_ANALYZER_CLI="/path/to/custom/analyzer"

# Use custom reference data
export FLUENT_REFERENCE_PATH="/path/to/fluent-analysis.json"
```

## 🛠️ Available Tools

### `analyze_token_usage`

Analyze token usage in a project

```json
{
  "projectPath": "./my-fluent-project",
  "enableDebug": false,
  "enablePerf": false
}
```

### `compare_with_fluent_patterns`

Compare project patterns with Fluent UI best practices

```json
{
  "projectPath": "./my-project",
  "componentType": "button",
  "includeRecommendations": true
}
```

### `get_token_recommendations`

Get AI-powered token recommendations

```json
{
  "useCase": "button hover state",
  "componentType": "button",
  "state": "hover"
}
```

### `analyze_file_tokens`

Detailed analysis of a specific style file

```json
{
  "projectPath": "./my-project",
  "fileName": "useButtonStyles.styles.ts"
}
```

### `find_token_patterns`

Find usage patterns for specific tokens

```json
{
  "projectPath": "./my-project",
  "tokenName": "colorBrandBackground"
}
```

## 📚 Resources

### `fluent_reference`

Access Fluent UI reference patterns and guidelines

### `token_guidelines`

Griffel token usage best practices and guidelines

## 🔍 Example AI Conversations

**Analyze my button component:**

> "Can you analyze the token usage in my button component and compare it with Fluent UI patterns?"

**Get recommendations:**

> "I'm styling a card hover state. What tokens should I use based on Fluent UI patterns?"

**Check consistency:**

> "Check if my component library follows Fluent UI token patterns consistently."

## ⚠️ Troubleshooting

### "Environment validation failed"

- Ensure target project has `node_modules` (run `npm install`)
- Verify `@fluentui-contrib/token-analyzer` is installed
- Check that project contains `*.styles.ts` files

### "Token analyzer CLI not found"

```bash
# Install globally
npm install -g @fluentui-contrib/token-analyzer

# Or set custom path
export TOKEN_ANALYZER_CLI="/path/to/analyzer"
```

### "Fluent UI reference not available"

```bash
# Install reference data
npm install @fluentui-contrib/token-analyzer-reference

# Or set custom path
export FLUENT_REFERENCE_PATH="/path/to/analysis.json"
```

## 🏗️ Development

```bash
# Build
nx build token-analyzer-mcp

# Run in development mode
nx serve token-analyzer-mcp

# Test with inspector
nx run token-analyzer-mcp:inspector

# Run tests
nx test token-analyzer-mcp

# Lint
nx lint token-analyzer-mcp
```

## 📝 License

MIT - See LICENSE file for details

## 🤝 Contributing

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for guidelines.

## 🔗 Related Packages

- [@fluentui-contrib/token-analyzer](../token-analyzer) - Core analysis CLI
- [@fluentui-contrib/token-analyzer-reference](../token-analyzer-reference) - Reference patterns

## Building

Run `nx build token-analyzer-mcp` to build the library.

## Running unit tests

Run `nx test token-analyzer-mcp` to execute the unit tests via [Jest](https://jestjs.io).
