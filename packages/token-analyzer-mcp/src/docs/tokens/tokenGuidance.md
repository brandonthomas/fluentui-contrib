Below is a set of rules and instructions for how we want to create our design token library.

For component category context, see [Component Categories](tokens-structure://docs/tokenComponentCategories.md). For a map of how groups apply to components, see the [Token Group Map](tokens-structure://docs/token-group-map.md). Primitive color definitions are in [Primitive Colors](tokens-structure://docs/colors/token-primitive-colors.md).

# System logic

## Primitive patterns

The foundational design building blocks — the core patterns that define the system’s visual and interactive language. Includes color, shape, typography, and layout patterns. These are the “ingredients” from which all components are made, ensuring consistency and scalability

## Groups

A recipe of primitive ingredients that is applied to collections of components that share a common functional role or purpose. Each group applies primitives in a consistent way to maintain visual and behavioral cohesion across related components. Examples include lists, inputs, and overlays.

## Ctrl overrides

A targeted override applied to a specific component or variant when a product team needs behavior or styling that differs from the default group pattern. Used sparingly, Ctrl allows for intentional deviation while maintaining alignment with the broader system.

---

# Organizing groups by atomic nesting

We consider groups based on how they nest within each other based on atomic design theory

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

---

# Naming conventions

All of the design tokens leveraage the following naming convention and rules

## Naming rules

- Tokens are named using lower case
- For documentation, we separate groups by using a “.” In Figma Variables this is represented by a “/”. In Code this is represented by camelCase (i think)
- When a token category or group requires more than one word they are merged and use camel case
- Modifiers are attached to its parent by using a dash so its easier to understand what is being modified
- Composite token’s children are represented by using parenthesis in Figma Variables

## Organization

How tokens are categorized and organized.

- if a column is not necessary then it can be ommitted so its smaller

### category

Category identifies the style attribute that the token represents. Since color is robust, it is split into a subset that lives at the same level as other style attributes.

#### background

Values for color that are applied as fills

#### corner

Values that define the border radius

#### foreground

Values for color that are applied on text and icons

#### gap

Values that define the space between objects

#### material

Values that define the materiality of surfaces

#### padding

Values that define the space around objects

#### shadow

Values that define the aspects of shadow elevations

#### size

Values that define common size patterns

#### stroke

Values for color that are applied to borders

#### strokeWidth

Values that describe the thickness of borders

#### text

Values that define typography scale, faces, and weights

## group

Used when identifying the group logic, which has already been identified above.

### Text

Typography components that handle the presentation of textual content with appropriate styling, hierarchy, and semantic meaning.

### Image

Content display components specifically designed for visual assets like images, avatars, and multimedia content.

### Choice

Selection and decision components that allow users to choose from options. These include single-choice, multiple-choice, and toggle-based interactions.

### Badge

Indicator components that display status, counts, or supplementary information. These are typically overlaid on or positioned near other elements.

### Button

Action trigger components that initiate commands, submit forms, or navigate users through the interface. Various styles accommodate different action types and importance levels.

### Navigation

Wayfinding components that help users move through and understand the structure of an application. These provide orientation and movement capabilities.

### List

Data presentation components that display collections of information in organized, scannable formats. These handle both simple lists and complex data tables.

### Input

Data entry components that allow users to provide information to the system. These include various field types for different data formats and input methods.

### Flyout

Temporary informational components that appear above other content to provide feedback, guidance, or additional options without permanent screen real estate.

### Toolbar

Action-oriented horizontal containers that group related commands and controls. These provide quick access to frequently used actions within a specific context.

### Card

Container components that group related content together in a visually distinct, elevated surface. Cards are self-contained units that can display various types of content.

## element

Element determines what anatomy inside of a shared component sub-category a style gets applied to.

### hint

Visual cue / bar that denotes a sub-component is selected

### icon

SVG or bitmap system glyphs

### image

Bitmap images

### label

A short piece of text that identifies or describes the purpose of an component

### bodyText

Content text inside of a component

## size

The size that is most commonly used

### default

The size that is most commonly used

### small

A size variant that is smaller than what is most commonly used

### large

A size variant that is larger than what is most commonly used

## variant

Variants are options that we provide within a style or component group to account for visual hierarchy. Variants are based on the style so each category has variants that are tailored to it.

### color variants

#### brand

Core identity colors that express the brand’s personality and visual voice. Used for primary actions, highlights, and key visual accents. These colors are highly recognizable and should be applied consistently to reinforce brand recognition.

#### neutral

Functional foundation colors used for backgrounds, surfaces, borders, and typography. They provide contrast, readability, and balance between brand and status colors. Neutrals range from light to dark values to support different accessibility needs and contexts.

#### status

Contextual colors that communicate meaning, feedback, or urgency. Typically represent states such as success, warning, error, and information. Applied sparingly to draw attention to important messages or changes in state without overwhelming the brand palette.

## sub-variants

Sub-variants are an additional variation within a specific variant

### color weights

#### loud

Full-strength, highly saturated color with maximum contrast. Typically paired with white or black foreground elements for legibility. Used to draw strong attention to primary actions or key brand moments.

---

## Related resources

- Component Categories: tokens-structure://docs/tokenComponentCategories.md
- Token Group Map: tokens-structure://docs/token-group-map.md
- Primitive Colors: tokens-structure://docs/colors/token-primitive-colors.md

#### onLoud

When foreground elements rest on a loud background

#### tint

Soft, version of the base color with lower contrast. Suitable for gentle emphasis, background fills, or less prominent actions while maintaining brand connection.

#### onTint

When foreground elements rest on a tint background

#### subtle

A transparent or neutral rest that becomes visibly colored on hover, focus, or active states. Provides a calm resting state while still delivering strong feedback during interaction.

#### onSubtle

When foreground elements rest on a subtle background

#### transparent

No background fill — the container is fully transparent, so the foreground element must carry interaction states (e.g., color changes, underlines, or borders). Used when minimal visual weight is desired.

#### onTransparent

When foreground elements rest on a transparent background.

## property

Property targets a specific CSS property that are primarily used when defining the pieces of a composition token

## state

Interactive states that define how components respond to user interaction and system conditions.

### rest

The default, inactive appearance of a component before any user interaction. Communicates the element’s baseline visual style and priority within the layout.

### hover

The visual response when a pointer hovers over an interactive element. Signals that the element is clickable or tappable, providing immediate feedback without committing to an action.

### pressed

The active appearance when the user is clicking, tapping, or otherwise engaging with the element. Reinforces that the action is being executed and often increases contrast or changes depth.

### selected

The persistent visual state indicating that an element has been chosen, activated, or is currently in use. Remains active until another selection is made or the state is cleared.

### disabled

Visual state when an interactive component is temporarily unavailable or non-functional. Typically uses reduced opacity, muted colors, or grayed-out appearance to signal the element cannot be interacted with.

---

# Examples of tokens

## primitives

### color

background.brand.loud.rest
background.brand.loud.hover
background.brand.loud.pressed
background.brand.loud.selected
background.brand.loud.disabled
foreground.brand.onLoud.rest
foreground.brand.onLoud.hover
foreground.brand.onLoud.pressed
foreground.brand.onLoud.selected
foreground.brand.onLoud.disabled
stroke.brand.loud.rest
stroke.brand.loud.hover
stroke.brand.loud.pressed
stroke.brand.loud.selected
stroke.brand.loud.disabled

### corner

corner.container.level1
corner.container.level2
corner.container.level3
corner.container.level4

## group

corner.list
background.list
foreground.list.text
foreground.list.icon
foreground.list.hint

corner.button
background.button.primary
foreground.button.primary
background.button.secondary
foreground.button.secondary

### ctrl group

corner.list.menuList
background.list.menuList
foreground.list.menuList.text
foreground.list.menuList.icon
foreground.list.menuList.hint
