#!/bin/bash

# LOCAL TESTING SCRIPT - NOT FOR PRODUCTION USE
#
# This script automates the process of building, packing, and locally installing
# token-analyzer-mcp for LOCAL DEVELOPMENT AND TESTING purposes only.
#
# This enables testing the MCP with actual MCP clients (like agents) rather than
# just validating output with the inspector. This is purely for development workflow
# and should NEVER be used for production deployment.
#
# Process:
# 1. Build packages via nx
# 2. Pack token-analyzer in dist folder
# 3. Update token-analyzer-mcp package.json to point to local tgz
# 4. Pack token-analyzer-mcp
# 5. Globally install the local version for testing

set -e # Exit on any error

echo "🧪 Starting automated MCP local testing setup..."

# Step 1: Build packages using nx
echo "📦 Building packages..."
nx build token-analyzer token-analyzer-mcp

# Step 2: Pack token-analyzer in the dist folder
echo "📦 Packing token-analyzer..."
cd dist/packages/token-analyzer

# Remove any existing tgz files
rm -f *.tgz

# Pack the package
npm pack

# Get the name of the created tgz file
TOKEN_ANALYZER_TGZ=$(ls *.tgz | head -n 1)
echo "✅ Created: $TOKEN_ANALYZER_TGZ"

# Step 3: Update token-analyzer-mcp package.json to point to the new tgz
echo "🔄 Updating token-analyzer-mcp dependency..."
cd ../token-analyzer-mcp

# Update the package.json to reference the new tgz file
node ../../../scripts/update-dependency.js "$TOKEN_ANALYZER_TGZ"

# Step 4: Pack token-analyzer-mcp
echo "📦 Packing token-analyzer-mcp..."

# Remove any existing tgz files
rm -f *.tgz

# Pack the package
npm pack

# Get the name of the created tgz file
TOKEN_ANALYZER_MCP_TGZ=$(ls *.tgz | head -n 1)
echo "✅ Created: $TOKEN_ANALYZER_MCP_TGZ"

# Step 5: Uninstall and reinstall the global MCP
echo "🗑️  Uninstalling global token-analyzer-mcp..."
npm uninstall -g @fluentui-contrib/token-analyzer-mcp || true # Don't fail if not installed

echo "📥 Installing new global version..."
npm install -g "./$TOKEN_ANALYZER_MCP_TGZ"

# Return to workspace root
cd ../../..

echo "🎉 Local testing setup complete!"
echo ""
echo "⚠️  WARNING: This is for LOCAL TESTING ONLY - not for production use!"
echo ""
echo "📋 Summary:"
echo "  - Built packages with nx"
echo "  - Packed: $TOKEN_ANALYZER_TGZ"
echo "  - Packed: $TOKEN_ANALYZER_MCP_TGZ"
echo "  - Globally installed: $TOKEN_ANALYZER_MCP_TGZ"
echo ""
echo "🧪 You can now test the MCP locally with:"
echo "  npx @modelcontextprotocol/inspector @fluentui-contrib/token-analyzer-mcp"
echo ""
echo "🔧 Or test with actual MCP clients/agents for full integration testing"
