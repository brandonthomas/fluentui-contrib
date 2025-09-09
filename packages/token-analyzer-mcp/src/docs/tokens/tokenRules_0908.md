Below is a set of rules and instructions for how we want to create our design token library

# System logic

## Primitive tokens

### Definition
The foundational values that define **all available options** in the design system across color, spacing, typography, sizing, and other visual properties. Primitives establish the complete palette of design choices available to the system, from color families at different weights with their interactive states, to spacing scales, typography hierarchies, corner radii, and dimensional values. **Primitives represent every possible option in the world** of your design system.

### Usage 
Primitives define the complete range of available values for all design properties. All other tokens eventually resolve to a primitive, either directly or through a chain of fallbacks. They serve as the atomic building blocks from which all other design decisions are constructed.

### Grouping principle
Primitives are not grouped by component or intent, they are atomic values that establish the complete range of available options across all design properties. They answer fundamental questions like:
- "What color options do we have for each brand/neutral/status color at different weights and interaction states?"
- "What spacing values are available in our system?"
- "What typography sizes and weights can we use?"
- "What corner radius options do we provide?"

### Structure
Primitive tokens are organized by property type, with different structural patterns based on whether the property has interactive states:

**Color primitives** follow the pattern: `[colorFamily].[weight].[state]`
- **colorFamily**: brand, neutral, statusDanger, statusSuccess, statusWarning, statusInfo, etc.
- **weight**: loud, tint, subtle, transparent
- **state**: rest, hover, pressed, selected, disabled

**Spacing primitives** follow the pattern: `[category].[scale]`
- **category**: spacing
- **scale**: extraSmall, small, medium, large, extraLarge, etc.

**Typography primitives** follow the pattern: `[category].[scale]`
- **category**: fontSize, fontWeight, lineHeight, letterSpacing
- **scale**: small, medium, large, etc. (for fontSize) or specific values like light, regular, semibold, bold (for fontWeight)

**Corner radius primitives** follow the pattern: `[category].[scale]`
- **category**: cornerRadius
- **scale**: none, small, medium, large, full

**Dimensional primitives** follow the pattern: `[category].[scale]`
- **category**: width, height, minWidth, maxWidth, etc.
- **scale**: small, medium, large, etc.

This structure ensures that interactive properties (colors) have appropriate state variations, while static properties (spacing, typography, dimensions) remain simple and stateless since they don't change based on user interaction.

## Generic tokens

### Definition
Abstract tokens that represent common UI concepts, not tied to a specific component or group, but more meaningful than a raw primitive. **Generics are a curated subset of primitive choices** that have been selected for specific UI intents like backgrounds, foregrounds, and strokes.

### Usage 
Generics take the vast array of primitive options and narrow them down to **meaningful, intentional choices** for common UI patterns. For example, while primitives might offer `brand.loud.hover`, `brand.tint.hover`, and `brand.subtle.hover`, a generic `background.brand.hover` token specifically chooses which of these primitive options should be used for brand backgrounds in hover state.

**Generic tokens are the primary interface for product design teams** when creating custom layouts and components. They provide the right level of semantic meaning without the complexity of primitives or the specificity of group tokens.

### Relationship to Primitives and Groups
- **Primitives**: All possible options (the entire universe of choices)
- **Generics**: Curated subset of those options for specific UI intent
- **Groups**: **All group tokens must connect to generic tokens**, not directly to primitives
- **Example**: `background.brand.hover` (generic) resolves to `brand.loud.hover` (primitive)

### Token Resolution Chain
Generic tokens create a clear path from semantic intent to actual values:
- `group.button.brand.backgroundColor.hover` (group token)
- → `background.brand.hover` (generic token)
- → `brand.loud.hover` (primitive token)
- → `#0066CC` (actual color value)

This reduces decision fatigue and ensures consistent application of colors across the design system.

### The Ingredients for All Components
**Generic tokens are the ingredients that power all group tokens.** Every group token should resolve to a generic token, which then resolves to a primitive. This ensures:
- Product teams can use generics directly for custom components
- All components share the same semantic foundation
- Changes to generic tokens cascade consistently across all groups
- Design system maintains coherent visual relationships

### Grouping principle
Generics are grouped by UI intent or property (background, foreground, stroke), not by component. They act as a bridge between the complete set of primitive options and more specific component tokens.

## Groups tokens

### Definition
Tokens that represent a family or group of components sharing a design language or style (e.g., all "primary" buttons, all "outline" inputs). **All group tokens must resolve to generic tokens**, creating a consistent semantic foundation across components.

### Usage 
These tokens provide a simplified interface for theming and customization at the group level, rather than per-component. They allow for broad, consistent changes across related components while maintaining the semantic relationships established by generic tokens.

### Connection to Generic Tokens
**Every group token should connect to a generic token, never directly to primitives.** This ensures:
- Consistent semantic meaning across all components
- Product teams can use the same generic tokens for custom components
- Changes to generic tokens automatically cascade to all related groups
- Design system maintains visual coherence and predictable relationships

### Token Resolution Chain
Group tokens create a clear hierarchy:
- `group.button.brand.backgroundColor.hover` (group token)
- → `background.brand.hover` (generic token)
- → `brand.loud.hover` (primitive token)
- → `#0066CC` (actual color value)

### Grouping principle
Group tokens are organized by component group and variant, capturing the shared design intent. They are the main target for theming and should be the majority of tokens in a system.

## Ctrl override tokens

### Definition
Highly specific tokens for unique component needs or edge cases (e.g., a special color for a toggle switch in a certain state).

### Usage 
Used sparingly, only when a group or generic token cannot express the required nuance. Too many control tokens indicate a need to refactor into group tokens.

### Grouping principle
Control tokens are grouped by individual component and state. They should be minimized to avoid unnecessary complexity.

***

# Organizing group tokens by atomic nesting
When using group tokens, we also can group them by their atomic nesting. This helps with aligning them to primitive relationships and how components nest and relate to each other.

## Atomic elements
Smallest self-contained shapes used for single, non-interactive visual elements. Often pure content holders

### Text
Typography components that handle the presentation of textual content with appropriate styling, hierarchy, and semantic meaning.

### Image media
Content display components specifically designed for visual assets like images, avatars, and multimedia content.

## Small Interactive primitives
Compact tap/click targets that can contain Level 1 shapes, but are not required to align with form field sizing

### Choice
Selection and decision components that allow users to choose from options. These include single-choice, multiple-choice, and toggle-based interactions.

### Badge StatusIndicator
Indicator components that display status, counts, or supplementary information. These are typically overlaid on or positioned near other elements.

## Primary interactive controls
Medium-size components that must visually align with form fields and can contain Level 1 and Level 2 elements

### Button
Action trigger components that initiate commands, submit forms, or navigate users through the interface. Various styles accommodate different action types and importance levels.

### Navigation
Wayfinding components that help users move through and understand the structure of an application. These provide orientation and movement capabilities.

### List
Data presentation components that display collections of information in organized, scannable formats. These handle both simple lists and complex data tables.

### Input
Data entry components that allow users to provide information to the system. These include various field types for different data formats and input methods.

## Molecular content containers
Larger multi-element surfaces that combine Levels 1–3 into a cohesive module

### Flyout Overlay
Temporary informational components that appear above other content to provide feedback, guidance, or additional options without permanent screen real estate.

### Toolbar
Action-oriented horizontal containers that group related commands and controls. These provide quick access to frequently used actions within a specific context.

### Card
Container components that group related content together in a visually distinct, elevated surface. Cards are self-contained units that can display various types of content.

***

# Naming Rules
All of the design tokens leverage the following naming convention and rules

- Tokens are named using lower case
- For documentation, we separate groups by using a "." In Figma Variables this is represented by a "/". In Code this is represented by camelCase
- When a token category or group requires more than one word they are merged and use camel case
- Modifiers are attached to its parent by using a dash so its easier to understand what is being modified
- Composite token's children are represented by using parenthesis in Figma Variables

## Interoperability
We want to make sure that the tokens can be future-proofed when we decide to add more to the library

## Scalable
Makes it easier to add new platforms, components, or themes without renaming or restructuring tokens.

## Tooling and automation
Enables automated tools to parse, transform, and sync tokens between design and code, reducing manual work and errors.

## Simplified
If a column is not necessary then it can be omitted so its smaller

## Appending with a state
Most commonly will be found in color tokens, but appending with .state at the end of a token allows consistency across values that have interactivity and values that don't have it yet. It allows room to add in the future.

## Adding a syntax
This will help demystify any confusion between what is a control token and what is a group token. Ctrl targets one specific component, while Group targets multiple components within that group.

# Naming schema
The naming of tokens follows a specific organization and schema that goes from left to right.
`[ctrl/group].[component].[variant].[subComponent].[element].[elementVariant].[property].[state]`

### Schema flexibility
**If a token does not require a certain part of the naming schema, that segment is omitted.** This keeps token names concise and prevents unnecessary complexity. The schema represents the maximum possible structure, but not every token needs to use every segment.

#### Examples of omitted segments:
- `group.button.small.paddingLeft` - omits subComponent, element, elementVariant, and state
- `group.button.all.text.fontWeight` - omits subComponent, elementVariant, and state  
- `group.button.neutral.text.color.rest` - omits subComponent and elementVariant
- `background.brand.rest` - generic token omits ctrl/group, component, variant, element, subComponent, elementVariant

The key principle is that tokens should be **as specific as necessary, but no more specific than required** for their intended use case.

## Control or group
This defines whether this token will be applied to a specific component, or a group of components.

- when it is a control override we use 'ctrl'
- when it is a group we use 'group'

## Component or component group
This indicates the specific component it's applied to. If needed, specific slots within that component or group can be targeted.

- when it is a control we use the specific component name
- when it is a group we use the group name that the component belongs to

## Variant
Variants offer flexibility to target different styles of the same component as options whether that be size, colors, etc. Variants need to offer flexibility to accommodate the different needs for groups or specific controls.

### Size variants
Defines the size of the component. Corner radius is affected by scale, but color wouldn't

#### medium
Medium is the default size

#### small
Small is smaller than default

#### large
Large is larger than default

### Color variants
The specific version or type of a value (e.g., error, success, neutral, brand).

#### brand
Core identity colors that express the brand's personality and visual voice. Used for primary actions, highlights, and key visual accents. These colors are highly recognizable and should be applied consistently to reinforce brand recognition.

#### neutral
Functional foundation colors used for backgrounds, surfaces, borders, and typography. They provide contrast, readability, and balance between brand and status colors. Neutrals range from light to dark values to support different accessibility needs and contexts.

#### status
Contextual colors that communicate meaning, feedback, or urgency. Typically represent states such as success, warning, error, and information. Applied sparingly to draw attention to important messages or changes in state without overwhelming the brand palette.

#### subtle
A transparent or neutral rest state that becomes visibly colored on hover, focus, or active states. Provides a calm resting state while still delivering strong feedback during interaction.

#### outline
A component variant with transparent background and visible border, with interactions shown through stroke and foreground changes.

#### transparent
No background fill — the container is fully transparent, so the foreground element must carry interaction states (e.g., color changes, underlines, or borders). Used when minimal visual weight is desired.

#### onBrand
When there are foreground elements that sit on top of a brand color

#### onNeutral
When there are foreground elements that sit on top of a neutral color

#### onStatus
When there are foreground elements that sit on top of a status color

### All
This is used for tokens that are shared across all colors and size variants. Used for properties that apply consistently across all color and size variants of a component. Examples include fontWeight, borderRadius, or any styling that shouldn't change based on variant selection.

**Note on Dual-Purpose Terms**: Some terms like "subtle" and "transparent" serve dual purposes:
- As **primitive weights** (brand.subtle.rest) - defining available color options at the foundational level
- As **component variants** (group.button.subtle) - defining component styling patterns that use those primitive colors

## SubComponent
For more complex components if there is a subcomponent that nests within it. Examples include:
- A dropdown menu within a select input: `group.select.medium.dropdown.background.rest`
- An icon button within a search field: `group.searchField.medium.iconButton.color.hover`
- A chevron within an accordion header: `group.accordion.medium.chevron.color.rest`

## Element
These describe the specific elements inside of the components to target

### hint
Visual cue / bar that denotes a sub-component is selected

### icon
SVG or bitmap system glyphs

### image
Bitmap images

### label
A short piece of text that identifies or describes the purpose of a component

### text
Content text inside of a component

## ElementVariant
Specific variations of elements that may have different styling needs. Examples include:
- primary vs secondary text within a component
- leading vs trailing icons
- main vs helper labels

## Property
The visual property being described. These align with CSS properties formatted in camelCase such as:
- fontSize, fontWeight, fontFamily
- paddingLeft, paddingRight, paddingTop, paddingBottom
- backgroundColor, color, borderColor
- strokeWidth, borderRadius
- width, height, gap

## State
Interactive states that define how components respond to user interaction and system conditions.

### rest
The default, inactive appearance of a component before any user interaction. Communicates the element's baseline visual style and priority within the layout.

### hover
The visual response when a pointer hovers over an interactive element. Signals that the element is clickable or tappable, providing immediate feedback without committing to an action.

### pressed
The active appearance when the user is clicking, tapping, or otherwise engaging with the element. Reinforces that the action is being executed and often increases contrast or changes depth.

### selected
The persistent visual state indicating that an element has been chosen, activated, or is currently in use. Remains active until another selection is made or the state is cleared.

### disabled
Visual state when an interactive component is temporarily unavailable or non-functional. Typically uses reduced opacity, muted colors, or grayed-out appearance to signal the element cannot be interacted with.

# Examples

## Token Resolution Examples
Understanding how tokens resolve through the hierarchy with all groups connecting to generics:

### Color Token Chain (Group to Generic to Primitive)
- `group.button.brand.text.color.hover` (group token)
- → `foreground.brand.hover` (generic token)
- → `brand.loud.hover` (primitive token)
- → `#0066CC` (actual color value)

### Background Token Chain (Group to Generic to Primitive)
- `group.button.brand.backgroundColor.hover` (group token)
- → `background.brand.hover` (generic token)
- → `brand.loud.hover` (primitive token)
- → `#0066CC` (actual color value)

### Spacing Token Chain (Group to Generic to Primitive)
- `group.button.medium.paddingLeft` (group token)
- → `spacing.medium` (generic token)
- → `spacing.medium` (primitive token)
- → `12px` (actual spacing value)

### Custom Component Usage (Product Teams Using Generics Directly)
When product teams create custom components, they use generic tokens:
- Custom Card Component: `background.neutral.rest` (generic token)
- Custom Icon Button: `foreground.brand.hover` (generic token)
- Custom Layout Container: `spacing.large` (generic token)

This ensures custom components share the same semantic foundation as system components.

## Primitive Tokens

### Color Primitives
brand.loud.rest
brand.loud.hover
brand.loud.pressed
brand.tint.rest
brand.tint.hover
brand.subtle.rest
brand.subtle.hover
brand.transparent.rest
brand.transparent.hover

neutral.loud.rest
neutral.loud.hover
neutral.tint.rest
neutral.tint.hover
neutral.subtle.rest
neutral.subtle.hover
neutral.transparent.rest

statusDanger.loud.rest
statusDanger.loud.hover
statusDanger.tint.rest
statusDanger.subtle.rest
statusDanger.transparent.rest

statusSuccess.loud.rest
statusSuccess.tint.rest
statusSuccess.subtle.rest

statusWarning.loud.rest
statusWarning.tint.rest
statusWarning.subtle.rest

### Spacing Primitives
spacing.extraSmall
spacing.small
spacing.medium
spacing.large
spacing.extraLarge
spacing.none

### Typography Primitives
fontSize.extraSmall
fontSize.small
fontSize.medium
fontSize.large
fontSize.extraLarge

fontWeight.light
fontWeight.regular
fontWeight.medium
fontWeight.semibold
fontWeight.bold

lineHeight.tight
lineHeight.normal
lineHeight.relaxed

letterSpacing.tight
letterSpacing.normal
letterSpacing.wide

### Corner Radius Primitives
cornerRadius.none
cornerRadius.small
cornerRadius.medium
cornerRadius.large
cornerRadius.full

### Dimensional Primitives
width.small
width.medium
width.large
width.full

height.small
height.medium
height.large

## Generic Tokens

### Color Generics
background.brand.rest
background.brand.hover
background.brand.pressed
background.neutral.rest
background.neutral.hover
background.statusDanger.rest
background.statusSuccess.rest

foreground.brand.rest
foreground.brand.hover
foreground.brand.pressed
foreground.neutral.rest
foreground.neutral.hover
foreground.onBrand.rest
foreground.onBrand.hover
foreground.onBrand.pressed
foreground.onNeutral.rest
foreground.onStatus.rest

stroke.brand.rest
stroke.brand.hover
stroke.brand.pressed
stroke.neutral.rest
stroke.neutral.hover
stroke.onBrand.rest
stroke.onBrand.hover
stroke.onBrand.pressed

### Layout Generics
spacing.small
spacing.medium
spacing.large
spacing.extraSmall
spacing.extraLarge

cornerRadius.small
cornerRadius.medium
cornerRadius.large
cornerRadius.none

### Typography Generics
fontSize.caption
fontSize.body
fontSize.subtitle
fontSize.title
fontSize.display

fontWeight.regular
fontWeight.medium
fontWeight.semibold

lineHeight.body
lineHeight.heading

### Dimensional Generics
width.content
width.container
width.full

height.control
height.header
height.section

## Group Tokens

### Shared across all variants & sizes
group.button.all.text.fontWeight
group.button.all.text.fontWeight.selected

### Sizes
group.button.small.paddingLeft
group.button.small.paddingRight
group.button.small.paddingTop
group.button.small.paddingBottom
group.button.small.gap
group.button.small.text.fontSize
group.button.medium.paddingLeft
group.button.medium.paddingRight
group.button.medium.paddingTop
group.button.medium.paddingBottom
group.button.medium.gap
group.button.medium.text.fontSize
group.button.large.paddingLeft
group.button.large.paddingRight
group.button.large.paddingTop
group.button.large.paddingBottom
group.button.large.gap
group.button.large.text.fontSize

### Color variants
group.button.neutral.text.color.rest
group.button.neutral.text.color.hover
group.button.brand.text.color.rest
group.button.brand.text.color.hover
group.button.outline.text.color.rest
group.button.outline.text.color.hover
group.button.subtle.text.color.rest
group.button.subtle.text.color.hover
group.button.transparent.text.color.rest
group.button.transparent.text.color.hover

## Control Tokens
ctrl.toggleButton.brand.text.color.rest
