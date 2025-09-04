# Advancing Design Systems with Model-First, AI-Driven Approaches: Proof of Concept Summary

## Executive Summary

This proof of concept (POC) explores how a model-first approach, combining robust documentation, Model Context Protocols (MCPs), and systematic evaluation (evals), can transform the quality, agility, and governance of design systems. Our findings demonstrate that integrating these elements not only accelerates development and iteration but also enables measurable, real-time improvements in design and user experience (UX).

## Background & Objectives

The primary goal was to determine whether a model-first, documentation-driven design system, augmented by MCPs and evals, could:

- Improve the consistency and quality of design outcomes
- Enable AI and automation to play a meaningful role in design system evolution
- Provide actionable, measurable feedback for both design and engineering teams

## Key Findings

### 1. Documentation & MCPs: The Foundation for AI-Ready Design Systems

- Packaging resources with the MCP server ensures instant, reliable access for both humans and AI agents.
- Clear, concise resource descriptions are essential for effective tool and resource selection by AI.
- Not all clients fully support MCP standards, so exposing resources through tools remains necessary for broad compatibility.

### 2. Evaluation-Driven Quality & Governance

- Treating design system assertions and gaps like test code (evals) provides actionable, measurable feedback.
- Evals help identify inconsistencies, prevent unwanted patterns, and measure the impact of design changes in near real time.
- A comprehensive suite of evals is critical for ongoing system health and for quantifying the impact of design and UX work. While they are non-deterministic, we have the ability to play with parameters like model temperature to reduce variability in evals.

### 3. Design System Integrity & Scalability

- Centralizing design knowledge and separating it from implementation enables isolated, repeatable testing (similar to unit tests in software).
- Templates and implementation standards, with clear rationales, help maintain consistency and accelerate onboarding.
- The approach is scalable to other domains (for example, layout and content) and adaptable to different implementation technologies.

### 4. Workflow & Process Improvements

- The model-first approach supports a faster design-development loop, enabling rapid local iteration and validation before production.
- Automated checks on documentation and system consistency are both feasible and valuable.
- This approach encourages a culture of continuous improvement and shared ownership across teams.

## Recommendations

- Continue investing in eval-driven development and documentation quality.
- Expand the use of MCPs and ensure all resource descriptions are clear and actionable.
- Develop and maintain templates and standards for both design and implementation.
- Explore further automation (for example, Figma-to-Markdown and image-to-eval) to streamline content creation and validation.

## Next Steps

- Scale the model-first, eval-driven approach to additional areas of the design system, including spacing, layout, and other token categories beyond the initial focus on semantic tokens.
- Start building a history of quality versus changes and understand potential patterns in quality change so we have a better understanding of the types of content we need to produce.
- Continue to iterate on the evaluation framework, incorporating feedback from design, engineering, and AI partners.

## Open Issues and Areas for Exploration

- Editorial content: While not currently a committed responsibility for our team, the centralization and curation of editorial content (such as design rationale, usage guidance, and decision logs) remains an open area of development. This could become increasingly important as generative AI (GenUI) capabilities expand and as the design system matures.
- Further discussion is needed to determine ownership, process, and value of editorial content within the design system.

## Conclusion

A model-first, AI-ready design system, grounded in strong documentation, MCPs, and systematic evaluation, offers a path to higher quality, greater agility, and measurable impact. By continuing to invest in these areas, we can ensure our design system remains robust, scalable, and ready for the future of AI-driven product development.
