Take v9 components, and group them based on our documentation. Does it match what we expect?

Test group tokens against actual fluent components, now map them and call out gaps (coverage eval)

If we include conversations or decision making process into our documentation, does it improve results?

Process insights:

- Have LLM check when we create Markdown, ask does it make sense?
- Since a lot of our work is in Figma, are there any Figma to Markdown plugins?
  - Maybe we could use an LLM to do image to Markdown too?
  - Figma MCP might work too?
- We should still have deterministic unit tests in places like the v9 or WC code bases.
- We should have templates for implementations
- Can we build our new design systems against our templates, and use those as litmus tests etc. Product teams would help us fill out our template library.
- Templates and all our stuff should come with rationalizations and why they exists or what they're for.
- Think about instruction sets for things like "use the existing tokens" when building new themes etc.
- Eval if the LLM has access to the MCP resources and check descriptions for quality.
- Check the descriptions and URIs to ensure cross linking quality
- Performance has been good with individual resources. I think this is particularly interesting since we package the resources with the MCP server so retriver is near instant.
- Since we package resources with the MCP server, we should probably include a prompt with our MCP server to check for updates.
- Write clear concise resource descriptions as this is what helps the agent/model decide what resources to load and use. Good ones will ensure we don't load more into context than we need.
- promptfoo viewer seems really helpful.
