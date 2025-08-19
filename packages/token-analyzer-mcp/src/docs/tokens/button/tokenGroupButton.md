# Group: Button

Token specification for button components based on Fluent UI React v9 analysis and the [Token Guidance](tokens-structure://docs/token-guidance.md) framework.

## Overview

Buttons are interactive molecular components that trigger actions when activated. This token group defines the visual properties for all button variants, sizes, and states to ensure consistent styling and behavior across the design system.

---

## Token Structure

Following the tokenGuidance pattern: `category.group.element.size.variant.subVariant.state`

### Categories Used

- `background` - Button container backgrounds
- `foreground` - Text and icon colors
- `corner` - Border radius values
- `stroke` - Border properties
- `gap` - Internal spacing and padding
- `typography` - Font properties

---

## Primitive Color Mapping

The button component tokens directly leverage the primitive color patterns defined in `primitive.md`. This creates a consistent relationship between foundational colors and component implementations.
See [Primitive Colors](tokens-structure://docs/colors/token-primitive-colors.md) for the full primitive palette.

### Button Variant to Primitive Pattern Mapping

| Button Variant  | Primitive Pattern                        | Usage Context               | Design Intent                          |
| --------------- | ---------------------------------------- | --------------------------- | -------------------------------------- |
| **Primary**     | `brand.loud`                             | High emphasis actions, CTAs | Maximum visual weight, brand identity  |
| **Secondary**   | `neutral.background.level3`              | Standard actions            | Balanced emphasis without brand weight |
| **Outline**     | `neutral.stroke.primary` + `transparent` | Defined but subtle actions  | Clear boundaries, minimal background   |
| **Subtle**      | `neutral.background.level2`              | Low emphasis actions        | Gentle presence, secondary tasks       |
| **Transparent** | `transparent` + `neutral.foreground`     | Minimal emphasis actions    | Nearly invisible until interaction     |

---

## Background Tokens

### Primary Variant (Brand Loud Pattern)

```
background.button.container.small.brand.loud.rest = [brand.loud.rest]
background.button.container.small.brand.loud.hover = [brand.loud.hover]
background.button.container.small.brand.loud.pressed = [brand.loud.pressed]
background.button.container.small.brand.loud.disabled = [neutral.background.level3.disabled]

background.button.container.default.brand.loud.rest = [brand.loud.rest]
background.button.container.default.brand.loud.hover = [brand.loud.hover]
background.button.container.default.brand.loud.pressed = [brand.loud.pressed]
background.button.container.default.brand.loud.disabled = [neutral.background.level3.disabled]

background.button.container.large.brand.loud.rest = [brand.loud.rest]
background.button.container.large.brand.loud.hover = [brand.loud.hover]
background.button.container.large.brand.loud.pressed = [brand.loud.pressed]
background.button.container.large.brand.loud.disabled = [neutral.background.level3.disabled]
```

### Secondary Variant (Neutral Background Level 3 Pattern)

```
background.button.container.small.neutral.subtle.rest = [neutral.background.level3.rest]
background.button.container.small.neutral.subtle.hover = [neutral.background.level3.hover]
background.button.container.small.neutral.subtle.pressed = [neutral.background.level3.pressed]
background.button.container.small.neutral.subtle.disabled = [neutral.background.level3.rest]

background.button.container.default.neutral.subtle.rest = [neutral.background.level3.rest]
background.button.container.default.neutral.subtle.hover = [neutral.background.level3.hover]
background.button.container.default.neutral.subtle.pressed = [neutral.background.level3.pressed]
background.button.container.default.neutral.subtle.disabled = [neutral.background.level3.rest]

background.button.container.large.neutral.subtle.rest = [neutral.background.level3.rest]
background.button.container.large.neutral.subtle.hover = [neutral.background.level3.hover]
background.button.container.large.neutral.subtle.pressed = [neutral.background.level3.pressed]
background.button.container.large.neutral.subtle.disabled = [neutral.background.level3.rest]
```

### Outline Variant (Transparent with Stroke Pattern)

```
background.button.container.small.neutral.transparent.rest = [transparent]
background.button.container.small.neutral.transparent.hover = [neutral.background.level3.rest]
background.button.container.small.neutral.transparent.pressed = [neutral.background.level3.hover]
background.button.container.small.neutral.transparent.disabled = [transparent]

background.button.container.default.neutral.transparent.rest = [transparent]
background.button.container.default.neutral.transparent.hover = [neutral.background.level3.rest]
background.button.container.default.neutral.transparent.pressed = [neutral.background.level3.hover]
background.button.container.default.neutral.transparent.disabled = [transparent]

background.button.container.large.neutral.transparent.rest = [transparent]
background.button.container.large.neutral.transparent.hover = [neutral.background.level3.rest]
background.button.container.large.neutral.transparent.pressed = [neutral.background.level3.hover]
background.button.container.large.neutral.transparent.disabled = [transparent]
```

---

## Foreground Tokens

### Primary Variant Text (Brand OnLoud Pattern)

```
foreground.button.label.small.brand.onLoud.rest = [brand.onLoud.rest]
foreground.button.label.small.brand.onLoud.hover = [brand.onLoud.hover]
foreground.button.label.small.brand.onLoud.pressed = [brand.onLoud.pressed]
foreground.button.label.small.brand.onLoud.disabled = [brand.onLoud.disabled]

foreground.button.label.default.brand.onLoud.rest = [brand.onLoud.rest]
foreground.button.label.default.brand.onLoud.hover = [brand.onLoud.hover]
foreground.button.label.default.brand.onLoud.pressed = [brand.onLoud.pressed]
foreground.button.label.default.brand.onLoud.disabled = [brand.onLoud.disabled]

foreground.button.label.large.brand.onLoud.rest = [brand.onLoud.rest]
foreground.button.label.large.brand.onLoud.hover = [brand.onLoud.hover]
foreground.button.label.large.brand.onLoud.pressed = [brand.onLoud.pressed]
foreground.button.label.large.brand.onLoud.disabled = [brand.onLoud.disabled]
```

### Secondary/Outline/Subtle Variant Text (Neutral Foreground Secondary Pattern)

```
foreground.button.label.small.neutral.secondary.rest = [neutral.foreground.secondary.rest]
foreground.button.label.small.neutral.secondary.hover = [neutral.foreground.secondary.hover]
foreground.button.label.small.neutral.secondary.pressed = [neutral.foreground.secondary.pressed]
foreground.button.label.small.neutral.secondary.disabled = [neutral.foreground.secondary.disabled]

foreground.button.label.default.neutral.secondary.rest = [neutral.foreground.secondary.rest]
foreground.button.label.default.neutral.secondary.hover = [neutral.foreground.secondary.hover]
foreground.button.label.default.neutral.secondary.pressed = [neutral.foreground.secondary.pressed]
foreground.button.label.default.neutral.secondary.disabled = [neutral.foreground.secondary.disabled]

foreground.button.label.large.neutral.secondary.rest = [neutral.foreground.secondary.rest]
foreground.button.label.large.neutral.secondary.hover = [neutral.foreground.secondary.hover]
foreground.button.label.large.neutral.secondary.pressed = [neutral.foreground.secondary.pressed]
foreground.button.label.large.neutral.secondary.disabled = [neutral.foreground.secondary.disabled]
```

### Transparent Variant Text (Neutral Foreground Tertiary Pattern)

```
foreground.button.label.small.neutral.tertiary.rest = [neutral.foreground.tertiary.rest]
foreground.button.label.small.neutral.tertiary.hover = [neutral.foreground.tertiary.hover]
foreground.button.label.small.neutral.tertiary.pressed = [neutral.foreground.tertiary.pressed]
foreground.button.label.small.neutral.tertiary.disabled = [neutral.foreground.tertiary.disabled]

foreground.button.label.default.neutral.tertiary.rest = [neutral.foreground.tertiary.rest]
foreground.button.label.default.neutral.tertiary.hover = [neutral.foreground.tertiary.hover]
foreground.button.label.default.neutral.tertiary.pressed = [neutral.foreground.tertiary.pressed]
foreground.button.label.default.neutral.tertiary.disabled = [neutral.foreground.tertiary.disabled]

foreground.button.label.large.neutral.tertiary.rest = [neutral.foreground.tertiary.rest]
foreground.button.label.large.neutral.tertiary.hover = [neutral.foreground.tertiary.hover]
foreground.button.label.large.neutral.tertiary.pressed = [neutral.foreground.tertiary.pressed]
foreground.button.label.large.neutral.tertiary.disabled = [neutral.foreground.tertiary.disabled]
```

---

## Stroke Tokens

### Outline Variant Borders (Neutral Stroke Primary Pattern)

```
stroke.button.container.small.neutral.primary.rest = [neutral.stroke.primary.rest]
stroke.button.container.small.neutral.primary.hover = [neutral.stroke.primary.hover]
stroke.button.container.small.neutral.primary.pressed = [neutral.stroke.primary.pressed]
stroke.button.container.small.neutral.primary.disabled = [neutral.stroke.primary.disabled]

stroke.button.container.default.neutral.primary.rest = [neutral.stroke.primary.rest]
stroke.button.container.default.neutral.primary.hover = [neutral.stroke.primary.hover]
stroke.button.container.default.neutral.primary.pressed = [neutral.stroke.primary.pressed]
stroke.button.container.default.neutral.primary.disabled = [neutral.stroke.primary.disabled]

stroke.button.container.large.neutral.primary.rest = [neutral.stroke.primary.rest]
stroke.button.container.large.neutral.primary.hover = [neutral.stroke.primary.hover]
stroke.button.container.large.neutral.primary.pressed = [neutral.stroke.primary.pressed]
stroke.button.container.large.neutral.primary.disabled = [neutral.stroke.primary.disabled]
```

---

## Button Group Primitive Color Usage Data Table

The following table demonstrates how button groups leverage primitive color patterns across different component states and variants. This mapping ensures consistency between foundational colors and component implementations.

| Component Token                                       | Primitive Pattern                             | Rest Value    | Hover Value | Pressed Value | Disabled Value | Design Purpose                               |
| ----------------------------------------------------- | --------------------------------------------- | ------------- | ----------- | ------------- | -------------- | -------------------------------------------- |
| **Primary Button Background**                         |
| `background.button.container.*.brand.loud.*`          | `brand.loud.*`                                | `#0F6CBD`     | `#106EBE`   | `#005A9E`     | `#F5F5F5`      | High emphasis brand actions                  |
| **Primary Button Text**                               |
| `foreground.button.label.*.brand.onLoud.*`            | `brand.onLoud.*`                              | `#FFFFFF`     | `#FFFFFF`   | `#FFFFFF`     | `#A19F9D`      | High contrast on brand backgrounds           |
| **Secondary Button Background**                       |
| `background.button.container.*.neutral.subtle.*`      | `neutral.background.level3.*`                 | `#F5F5F5`     | `#EBEBEB`   | `#D6D6D6`     | `#F5F5F5`      | Standard actions with neutral emphasis       |
| **Secondary Button Text**                             |
| `foreground.button.label.*.neutral.secondary.*`       | `neutral.foreground.secondary.*`              | `#323130`     | `#201F1E`   | `#201F1E`     | `#A19F9D`      | Clear text on neutral backgrounds            |
| **Outline Button Background**                         |
| `background.button.container.*.neutral.transparent.*` | `transparent` + `neutral.background.level3.*` | `transparent` | `#F5F5F5`   | `#EBEBEB`     | `transparent`  | Minimal background with interaction feedback |
| **Outline Button Border**                             |
| `stroke.button.container.*.neutral.primary.*`         | `neutral.stroke.primary.*`                    | `#C8C6C4`     | `#A19F9D`   | `#605E5C`     | `#E1DFDD`      | Defined boundaries without background        |
| **Outline Button Text**                               |
| `foreground.button.label.*.neutral.secondary.*`       | `neutral.foreground.secondary.*`              | `#323130`     | `#201F1E`   | `#201F1E`     | `#A19F9D`      | Clear text for outlined buttons              |
| **Transparent Button Background**                     |
| `background.button.container.*.neutral.transparent.*` | `transparent` + `neutral.background.level3.*` | `transparent` | `#F5F5F5`   | `#EBEBEB`     | `transparent`  | Minimal presence until interaction           |
| **Transparent Button Text**                           |
| `foreground.button.label.*.neutral.tertiary.*`        | `neutral.foreground.tertiary.*`               | `#605E5C`     | `#323130`   | `#323130`     | `#A19F9D`      | Subtle text for minimal emphasis             |

### Status Button Variants (Using Status Primitive Patterns)

| Status Type       | Component Token                                  | Primitive Pattern  | Rest Value | Hover Value | Pressed Value | Usage Context                        |
| ----------------- | ------------------------------------------------ | ------------------ | ---------- | ----------- | ------------- | ------------------------------------ |
| **Danger/Error**  |
| Background        | `background.button.container.*.danger.loud.*`    | `danger.loud.*`    | `#A4262C`  | `#8A1F24`   | `#6E1A1F`     | Critical destructive actions         |
| Text              | `foreground.button.label.*.danger.onLoud.*`      | `danger.onLoud.*`  | `#FFFFFF`  | `#FFFFFF`   | `#FFFFFF`     | High contrast on danger backgrounds  |
| Subtle Background | `background.button.container.*.danger.subtle.*`  | `danger.subtle.*`  | `#FDE7E9`  | `#F8C7CA`   | `#F1707B`     | Non-critical error contexts          |
| **Warning**       |
| Background        | `background.button.container.*.warning.loud.*`   | `warning.loud.*`   | `#D29200`  | `#B8800A`   | `#9E6E0A`     | Caution-required actions             |
| Text              | `foreground.button.label.*.warning.onLoud.*`     | `warning.onLoud.*` | `#FFFFFF`  | `#FFFFFF`   | `#FFFFFF`     | High contrast on warning backgrounds |
| Subtle Background | `background.button.container.*.warning.subtle.*` | `warning.subtle.*` | `#FFF4CE`  | `#FFE8A1`   | `#FFD454`     | Non-critical warning contexts        |
| **Success**       |
| Background        | `background.button.container.*.success.loud.*`   | `success.loud.*`   | `#107C10`  | `#0E6A0E`   | `#0C580C`     | Positive confirmation actions        |
| Text              | `foreground.button.label.*.success.onLoud.*`     | `success.onLoud.*` | `#FFFFFF`  | `#FFFFFF`   | `#FFFFFF`     | High contrast on success backgrounds |
| Subtle Background | `background.button.container.*.success.subtle.*` | `success.subtle.*` | `#DFF6DD`  | `#C7E9B0`   | `#A6D785`     | Positive feedback contexts           |
| **Info**          |
| Background        | `background.button.container.*.info.loud.*`      | `info.loud.*`      | `#005A9E`  | `#004578`   | `#003152`     | Informational actions                |
| Text              | `foreground.button.label.*.info.onLoud.*`        | `info.onLoud.*`    | `#FFFFFF`  | `#FFFFFF`   | `#FFFFFF`     | High contrast on info backgrounds    |
| Subtle Background | `background.button.container.*.info.subtle.*`    | `info.subtle.*`    | `#D0F0FD`  | `#A6D8F0`   | `#6EC1F8`     | Informational contexts               |

### Size-Agnostic Primitive Relationships

| Token Category        | Primitive Source        | Relationship Type | Implementation Notes                            |
| --------------------- | ----------------------- | ----------------- | ----------------------------------------------- |
| **Corner Radius**     | Fluent Design Language  | Static Value      | `4px` across all sizes for consistency          |
| **Typography Weight** | Fluent Typography Scale | Static Value      | `600` for all button text                       |
| **Gap Scaling**       | Fluent Spacing System   | Progressive Scale | `7px → 15px → 23px` for small → default → large |
| **Height Scaling**    | Fluent Component Scale  | Progressive Scale | `24px → 32px → 40px` for touch targets          |
| **Icon Spacing**      | Fluent Icon Guidelines  | Contextual Scale  | `4px` small, `8px` default/large                |

### Primitive Pattern Benefits for Button Groups

1. **Consistency**: All button variants use the same primitive color relationships
2. **Accessibility**: Primitive patterns ensure WCAG compliance across all states
3. **Scalability**: New button variants automatically inherit proper color relationships
4. **Maintainability**: Color updates in primitives cascade to all button implementations
5. **Semantic Clarity**: Status colors provide immediate visual feedback meaning
6. **Brand Alignment**: Brand colors maintain identity while neutral colors provide functional hierarchy

---

## Related resources

- Token Guidance: tokens-structure://docs/token-guidance.md
- Primitive Colors: tokens-structure://docs/colors/token-primitive-colors.md
- Token Group Map: tokens-structure://docs/token-group-map.md

```
---

## Corner Tokens

```

corner.button.container.small = 4px
corner.button.container.default = 4px
corner.button.container.large = 4px

```

```

---

## Gap Tokens

### Horizontal Padding

```
gap.button.container.small = 7px
gap.button.container.default = 15px
gap.button.container.large = 23px
```

### Icon Spacing (when icon is present)

```
gap.button.icon.small = 4px
gap.button.icon.default = 8px
gap.button.icon.large = 8px
```

---

## Typography Tokens

### Font Sizes

```
typography.button.label.small.fontSize = 12px
typography.button.label.default.fontSize = 14px
typography.button.label.large.fontSize = 16px
```

### Font Weights

```
typography.button.label.fontWeight = 600
```

### Line Heights

```
typography.button.label.small.lineHeight = 16px
typography.button.label.default.lineHeight = 20px
typography.button.label.large.lineHeight = 22px
```

---

## Size Tokens

### Container Heights

```
size.button.container.small.height = 24px
size.button.container.default.height = 32px
size.button.container.large.height = 40px
```

### Minimum Widths

```
size.button.container.small.minWidth = 64px
size.button.container.default.minWidth = 96px
size.button.container.large.minWidth = 120px
```

---

## Usage Guidelines

### Updated Token Selection Logic

1. **Start with category**: Choose `background`, `foreground`, `stroke`, etc.
2. **Specify group**: Always `button`
3. **Define element**: `container` for backgrounds/borders, `label` for text, `icon` for icons
4. **Select size**: `small`, `default`, or `large` (omit for size-agnostic tokens)
5. **Choose variant**: `brand` (primary), `neutral` (secondary/outline/subtle/transparent), `danger`, `warning`, `success`, `info` (status variants)
6. **Pick sub-variant**: `loud` (solid), `subtle` (tinted), `transparent` (clear), `onLoud` (high contrast text), `primary/secondary/tertiary` (neutral hierarchy)
7. **Add state**: `rest`, `hover`, `pressed`, `disabled` (omit for static properties)

### Updated Variant Mapping

| Fluent UI Variant | Token Variant | Token Sub-variant                | Primitive Source                                | Usage                         |
| ----------------- | ------------- | -------------------------------- | ----------------------------------------------- | ----------------------------- |
| Primary           | `brand`       | `loud`                           | `brand.loud.*`                                  | High emphasis brand actions   |
| Secondary         | `neutral`     | `subtle`                         | `neutral.background.level3.*`                   | Medium emphasis actions       |
| Outline           | `neutral`     | `transparent` + `primary` stroke | `transparent` + `neutral.stroke.primary.*`      | Low emphasis with definition  |
| Subtle            | `neutral`     | `subtle`                         | `neutral.background.level2.*`                   | Low emphasis, minimal         |
| Transparent       | `neutral`     | `transparent`                    | `transparent` + `neutral.foreground.tertiary.*` | Minimal emphasis              |
| Danger            | `danger`      | `loud` / `subtle`                | `danger.loud.*` / `danger.subtle.*`             | Error/destructive actions     |
| Warning           | `warning`     | `loud` / `subtle`                | `warning.loud.*` / `warning.subtle.*`           | Caution-required actions      |
| Success           | `success`     | `loud` / `subtle`                | `success.loud.*` / `success.subtle.*`           | Positive confirmation actions |
| Info              | `info`        | `loud` / `subtle`                | `info.loud.*` / `info.subtle.*`                 | Informational actions         |

### Updated Example Usage

```css
/* Primary button leveraging brand.loud primitive */
.button-primary-default {
  background-color: var(--background-button-container-default-brand-loud-rest);
  color: var(--foreground-button-label-default-brand-onLoud-rest);
  border-radius: var(--corner-button-container-default);
  padding: 0 var(--gap-button-container-default);
}

/* Danger button leveraging danger.loud primitive */
.button-danger-default {
  background-color: var(--background-button-container-default-danger-loud-rest);
  color: var(--foreground-button-label-default-danger-onLoud-rest);
}

/* Outline button leveraging neutral.stroke.primary primitive */
.button-outline-default {
  background-color: var(--background-button-container-default-neutral-transparent-rest);
  color: var(--foreground-button-label-default-neutral-secondary-rest);
  border: 1px solid var(--stroke-button-container-default-neutral-primary-rest);
}
```

---

## Notes

- All color values leverage primitive patterns from `primitive.md` for consistency
- Token references use `[primitive.pattern.*]` notation to show primitive relationships
- Button variants map directly to semantic primitive patterns (brand, neutral, status)
- Status button variants (danger, warning, success, info) extend the core button system
- Size-specific tokens allow for responsive button scaling while maintaining primitive relationships
- Sub-variants (`loud`, `subtle`, `transparent`, `onLoud`, `primary`, `secondary`, `tertiary`) provide semantic color hierarchy
- States ensure interactive feedback consistency across all primitive patterns
- Icon spacing tokens accommodate buttons with icons
- Minimum width tokens ensure usable touch targets
- Primitive pattern mapping enables systematic color consistency and easy maintenance
