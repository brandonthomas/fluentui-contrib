# Advancing Design Systems with Model-First, AI-Driven Approaches: Proof of Concept Summary

## Executive Summary

This proof of concept (POC) explores how a model-first design system might operate, investigating the processes, tooling, and workflows that could enable better quality, consistency, and user outcomes. By combining robust documentation, Model Context Protocols (MCPs), and systematic evaluation (evals), we sought to understand how AI-driven approaches can transform the quality, agility, and governance of design systems. Our findings demonstrate that this model-first approach not only accelerates development and iteration but also enables measurable, real-time improvements in design and user experience (UX).

The POC used practical examples—such as component grouping based on documentation, mapping group tokens against actual Fluent components, and testing conversational decision-making processes—to understand how these workflows might function in practice and what capabilities they could unlock.

## Background & Objectives

The primary goal was to understand how a model-first, AI-driven design system could operate in practice and determine what processes, tooling, and workflows would be needed to:

- Improve the consistency and quality of design outcomes
- Enable AI and automation to play a meaningful role in design system evolution
- Provide actionable, measurable feedback for both design and engineering teams
- Establish workflows that support rapid iteration and validation
- Create governance mechanisms that maintain system integrity at scale

We used practical scenarios—including component grouping, token coverage analysis, and conversational documentation testing—as vehicles to explore these broader questions about model-first design system operations.

## Key Findings

### 1. Documentation & MCPs: The Foundation for AI-Ready Design Systems

- Packaging resources with the MCP server ensures instant, reliable access for both humans and AI agents with excellent performance outcomes.
- Clear, concise resource descriptions are essential for effective tool and resource selection by AI - good descriptions ensure minimal context loading.
- Not all MCP clients fully support MCP standards, so exposing resources through tools remains necessary for broad compatibility.
- Cross-linking related documentation improves AI understanding, navigation quality, and overall system comprehension.
- Both the MCP server itself and its outputs should be evaluated to ensure quality - comprehensive evaluation coverage is critical for system reliability.

### 2. Evaluation-Driven Quality & Governance

- Treating design system assertions and gaps like test code (evals) provides actionable, measurable feedback following the principle: "find a gap, write an eval."
- Evals help identify inconsistencies, prevent unwanted patterns, and measure the impact of design changes in near real time.
- A comprehensive suite of evals is critical for ongoing system health and represents the health of the design system itself.
- Evaluation thresholds require careful calibration - balancing strictness with practical usability. This is something we will learn to tweak over time.
- Both unit-style evals (isolated testing) and end-to-end evals (full workflow testing) are necessary for comprehensive quality assurance.
- Model temperature experimentation (0.0, 0.5, 1.0) can help reduce variability in eval outcomes while maintaining useful assessment capabilities. This will help us determine what settings to use when building assistants and agents that our users/partners actually interact with.

### 3. Design System Integrity & Scalability

- Centralizing design knowledge and separating it from implementation enables isolated, repeatable testing (similar to unit tests in software).
- This separation allows potential leverage of alternative implementations (e.g., Tailwind) while maintaining design consistency.
- Templates and implementation standards, with clear rationales, help maintain consistency and accelerate onboarding.
- Evaluations should encapsulate core system principles. We should test if this can go beyond just surface level (e.g., coherent sizing systems, proper nomenclature) but into the more philosophical aspects of our design system as well.
- The approach is scalable to other domains (layout, content, components) and adaptable to different implementation technologies.

### 4. Workflow & Process Improvements

- Real-time measurability allows designers/UXE/UXR to see the impact of changes immediately in evals before committing changes.
- Automated checks on documentation and system consistency are both feasible and valuable.
- This approach encourages a culture of continuous improvement and shared ownership across teams.
- Content workers need streamlined, local processes that don't require technical expertise for optimal adoption. Working in production systems can be complicated and time consuming.

## Recommendations

### Immediate Actions

- Invest in eval-driven development and documentation quality at scale.
- Expand the use of MCPs and ensure all resource descriptions are clear and actionable.
- Develop and maintain templates and standards for both design and implementation with clear rationales.
- Implement automated documentation consistency checks and quality assessments.
- Investigate the design/content development process could flow into production systems like our graph knowledge base or Fluent Agent.

### Process & Tooling Improvements

- Create streamlined, non-technical workflows for content workers to iterate locally without requiring MCP server rebuilds or production systems.
- Explore Figma-to-Markdown automation and LLM-assisted content creation workflows.
- Develop comprehensive evaluation suites that test both isolated components and full user workflows.
- Establish clear thresholds and grading criteria for evaluation pass/fail decisions.

### Strategic Development

- Scale the evaluation framework to assess tool and resource selection accuracy when comparing different AI models.
- Explore using the MCP server as a provider for direct model testing (separate from end-to-end evaluations within a production end point like Fluent Agent).

## Next Steps

### Immediate Development Priorities

- Scale the model-first, eval-driven approach to additional areas of the design system, including spacing, layout, and other token categories beyond the initial focus on semantic tokens.
- Implement the proposed process flow for documentation and evaluation development:
  1. Write and structure documentation into logical pieces
  2. Create cross-links between related documentation (with AI assistance)
  3. Generate and refine resource descriptions
  4. Test and iterate documentation based on AI responses
  5. Discover and formalize prompts/questions the system needs to answer
  6. Convert prompts into evaluations and integrate into test suites
  7. Optimize thresholds, grading, and sequences for coverage and accuracy
  8. Deploy validated documentation and evaluations to production systems

### Technical Infrastructure

- Build quality tracking systems to establish baselines and monitor improvements over time. We have much of this already since we are using promptfoo but would need CI/CD.
- Develop parallel tooling to support non-technical users in the content creation and evaluation process.
- Create automated systems for MCP resource updates and validation.

### Research & Validation

- Continue to iterate on the evaluation framework, incorporating feedback from design, engineering, and AI partners.
- Explore multimodal capabilities for UI analysis ("Is this Fluent? Why or why not?")
- Test template-based approaches for new design system implementations, theme creation, and layouts.

## Open Issues and Areas for Exploration

### Editorial Content & Organizational Strategy

- **Content Centralization**: While not currently a committed responsibility for our team, the centralization and curation of editorial content (such as design rationale, usage guidance, and decision logs) remains an open area of development. This could become increasingly important as generative AI (GenUI) capabilities expand and as the design system matures. While this POC wasn't focused on this, the process outlined here could still apply.
- **Ownership & Process**: Further discussion is needed to determine whether Fluent should take ownership of editorial content centralization, how to resource this effort, and what processes would support it effectively.

### Technical Optimization

- **User Experience for Non-Technical Contributors**: While the current system is functional, it requires technical knowledge (MCP server rebuilds, local installations) that may limit adoption by content workers. A parallel tooling track could provide more accessible workflows.
- **Model Comparison & Selection**: Developing robust methodologies for comparing AI model performance across different design system tasks, particularly tool and resource selection accuracy.

### Quality & Governance

- **Evaluation Threshold Calibration**: Establishing optimal pass/fail thresholds for different types of evaluations while balancing system strictness with practical usability.
- **Cross-Domain Scaling**: Understanding how to effectively parallelize evaluation development across layout, content, components, and other design system domains.
- **Alternative Implementation Testing**: Validating whether the design knowledge separation enables effective use of alternative implementation technologies (e.g., Tailwind) while maintaining design consistency.

## Conclusion

A model-first, AI-ready design system, grounded in strong documentation, MCPs, and systematic evaluation, offers a path to higher quality, greater agility, and measurable impact. This POC has demonstrated that this approach enables unprecedented measurability in design work - allowing teams to see the impact of changes in near real time through comprehensive evaluation suites.

The separation of design knowledge from implementation creates opportunities for both isolated testing and broader technology integration, while the evaluation-driven approach establishes "the health of the design system" as a measurable, maintainable asset. By continuing to invest in these areas and addressing the identified organizational and technical challenges, we can ensure our design system remains robust, scalable, and ready for the future of AI-driven product development.

This foundation positions teams to iterate, test, and verify quality within the design space without requiring production deployments, fundamentally changing how design systems can evolve and be governed.
