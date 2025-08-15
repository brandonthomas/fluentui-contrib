---
applyTo: '**'
---

# Token Analysis Instructions

When discussing, analyzing, or working with design tokens, styles, or theming in this repository, **ALWAYS** use the available MCP resources. Always use the MCP tools when prompted to do relevant actions. For example, if a user asks for their repository, files or tokens to be analyzed, always use the token analysis MCP tool. DO NOT analyze tokens unless asked to. It wastes resources and takes extra time.

## MCP Tools and Resources

### Token Analysis Tool

- **`analyze_token_usage`**: Use this tool to analyze token usage across the project or specific directories. This tool provides comprehensive insights into:
  - Token usage patterns across style files
  - Unique tokens and their frequency
  - Style function analysis
  - Token paths and property mappings
  - Metadata about style conditions

### Token Structure Documentation Resource

- **`Token Structure Documentation`**: A comprehensive MCP resource (`tokens-structure://docs/tokens.md`) that provides:
  - **Component categorization framework**: Detailed taxonomy of component categories (ctrl, card, overlay, toolbar, choice, button, list, input, navigation, statusIndicator, media, text, etc.)
  - **Component hierarchy levels**: 5-level classification system from atomic elements (Level 1) to complete user workflows (Level 5)
  - **Token grouping strategy**: Framework for organizing tokens based on component behavioral attributes
  - **Cross-platform considerations**: Guidelines for web and potential mobile implementations
  - **Historical context**: Evolution from current token sets to proposed enhanced frameworks

This resource is essential for understanding the design system architecture and making informed decisions about token usage patterns that align with the component categorization strategy.

## When to Use MCP Tools and Resources

Always use the MCP tools and resources when:

- Discussing design token patterns or best practices
- Understanding component categorization and hierarchy
- Refactoring styles or components
- Adding new components that use design tokens
- Investigating token consistency across packages
- Optimizing token usage or identifying unused tokens
- Working on theming or style-related features
- Debugging style issues related to tokens
- Planning component architecture based on the 5-level hierarchy system
- Aligning new components with the ctrlGroup taxonomy

## Best Practices

2. **Reference the documentation resource**: Use the Token Structure Documentation to understand component categorization and hierarchy
3. **Consider token consistency**: Ensure new token usage follows existing patterns and aligns with component categories
4. **Leverage semantic tokens**: Use semantic tokens when they provide better context than base tokens
5. **Follow component hierarchy**: When creating new components, consider their level (1-5) and ctrlGroup classification
6. **Cross-platform awareness**: Consider the framework's flexibility for potential mobile implementations
7. **Document token decisions**: When introducing new token usage patterns, explain the rationale and reference the categorization framework

## Example Usage

When working on styling tasks, start with:

```
Use the token analysis tool to understand current token usage in [specific area]
Access the Token Structure Documentation resource to understand component categorization
```

This will provide both the quantitative analysis of current token usage and the architectural framework needed to make informed decisions about token usage and maintain consistency across the repository.

Remember: The MCP token analysis tools and Token Structure Documentation resource are your primary resources for understanding and working with the extensive token system and component architecture in this repository.
