#!/usr/bin/env node

// Script to update the token-analyzer-mcp package.json dependency
const fs = require('fs');

const [, , tgzFilename] = process.argv;

if (!tgzFilename) {
  console.error('Usage: update-dependency.js <tgz-filename>');
  process.exit(1);
}

try {
  const packageJsonPath = 'package.json';
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  packageJson.dependencies[
    '@fluentui-contrib/token-analyzer'
  ] = `file://../token-analyzer/${tgzFilename}`;

  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2) + '\n'
  );

  console.log(
    `✅ Updated dependency reference to: file://../token-analyzer/${tgzFilename}`
  );
} catch (error) {
  console.error('❌ Error updating package.json:', error.message);
  process.exit(1);
}
