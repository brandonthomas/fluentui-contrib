# Token Analyzer MCP - Proof of Concept Notes

## Executive Summary / Initial Objectives

Take v9 components, and group them based on our documentation. Does it match what we expect?

Test group tokens against actual fluent components, now map them and call out gaps (coverage eval)

If we include conversations or decision making process into our documentation, does it improve results?

## Technical Performance & Architecture

### Performance Outcomes

- Performance has been good with individual resources. I think this is particularly interesting since we package the resources with the MCP server so retrieval is near instant.
- Since we package resources with the MCP server, we should probably include a prompt with our MCP server to check for updates.

### Technical Implementation Insights

- Not all MCP clients respect all aspects of the MCP standard. Since this is the case, we have to expose the resources through tools even though clients should be able to list and access resources directly.
- Write clear concise resource descriptions as this is what helps the agent/model decide what resources to load and use. Good ones will ensure we don't load more into context than we need.
- Eval if the LLM has access to the MCP resources and check descriptions for quality.
- Check the descriptions and URIs to ensure cross linking quality

## Quality Assurance & Evaluation Strategy

### Testing & Evaluation Framework

- we should look at assertions/evals like we do with test code. There's this adage that you find a bug and write a test. We should do the same but for system gaps, insights, etc. If you see something that defines or breaks our systems it needs to be turned into an eval. If you work with a partner who has an unanswered question, eval.
- We should also eval against things we don't want it to do.
- promptfoo viewer seems really helpful.
- Another important aspect of our work here will be assessing when or if the right tool or resource is called. When comparing models this will be critical.
- We might be able to also use the MCP server as the provider and test some things directly using models. This would be separate evals from the e2e ones.

### Design System Integrity & Governance

- We should write evaluations that encapsulate the principles of the system. IE: We don't want surperfluous sizes strew throughout the system. We should only have a coherent set of sizes. Additionally, how do we break up names, do we follow nomenclature.
- How do we encapsulate where pieces of our design system sit within it and not even just within tokens. How do we decide how things fit here vs just are tacked on.
- evals are the health of the design system.

## Business Impact & Organizational Benefits

### Measurable Design Impact

- evals will allow us to measure the impact of designers/UXE/UXR on the design system. We've never had that in design in such measurable ways before. Imagine a designer makes a change and we see the impact of that change immediately in our evals before we even have to commit changes? This gives us more signaling about what we're doing and can be seen in near real time. This is why building out a comprehensive suite of evals and working with partners to update them is so critical.

### Process Improvements & Workflow

- This is helping define the design dev loop. We need a way for content workers to do this quickly, locally.
- Even before we have some of this infra in place, we can probably just utilize things like Claude or other multimodal apps and start seeing the results. Ex: Find an image or UI, ask if it's Fluent and why or why not. Start adding context and see how the answer evolves.
- Separating out the design knowledge and evals is a matter of separation of concerns.

## Development Process & Tooling Enhancements

### Content Creation & Documentation

- Have LLM check when we create Markdown, ask does it make sense?
- Since a lot of our work is in Figma, are there any Figma to Markdown plugins?
  - Maybe we could use an LLM to do image to Markdown too?
  - Figma MCP might work too?

### Implementation Standards & Templates

- We should still have deterministic unit tests in places like the v9 or WC code bases.
- We should have templates for implementations
- Can we build our new design systems against our templates, and use those as litmus tests etc. Product teams would help us fill out our template library.
- Templates and all our stuff should come with rationalizations and why they exists or what they're for.
- Think about instruction sets for things like "use the existing tokens" when building new themes etc.

## Strategic Considerations & Next Steps

### Organizational Questions

- We've seen more editorial content but FLuent isn't really setup to be the central resource for that but it does need to be centralized somewhere. We should have a perspective. Should Fluent take this? If so, how would we resource this?

- Create eval for component and then ask the AI to create tokens for that component. Does it create ones that fit the group or that work?
- Are the groups easy to understand?

# more notes to be organized

- What is the purpose of a [insert group] group?
- Think about categorizing the types of work we need to do for the report.
- separating design knowledge from implementation will allow us to test in isolation, similar to unit tests vs only have an e2e test. It also means if we have a separate base we can potentially leverage other implementation like tailwind (If we can do this with the existing prod implementation that's great we should call that out.)
- Insight: we need to be able to iterate, test, verify quality, etc within the design space. We don't want to have to push to prod before we have an idea of what our changes are doing or if they are good. It could look like a lightweight MCP, agent, promptfoo. Or maybe not.

- How can we scale this out and what could we run in parallel when it comes to other areas like layout, content, components we can eval and write about.
- We should paly around with model temp. We could have promps run on temp of 0.0, 0.5, 1.0.
- Having an automated check on our documentation and our system for value or consistency.
