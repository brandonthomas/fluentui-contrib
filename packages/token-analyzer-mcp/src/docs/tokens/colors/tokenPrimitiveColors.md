# Primitive: Colors

Foundational color patterns that define the system's visual language. These primitive color values serve as the ingredients for all component tokens and ensure consistency across the design system.

## Overview

Color primitives are organized into three main categories:

- **Brand** - Primary identity colors for key actions and brand representation
- **Neutral** - Functional colors for backgrounds, text, and structural elements
- **Status** - Semantic colors that communicate states and feedback (danger, warning, success, info)

All color values are from Fluent UI React v9 Web Light theme and follow WCAG accessibility guidelines.

For how primitives map into component groups, see [Token Guidance](tokens-structure://docs/token-guidance.md) and the [Token Group Map](tokens-structure://docs/token-group-map.md).

---

## Brand Colors

Primary identity colors used for brand representation and key interactive elements.

### Loud (Full Strength)

```
brand.loud.rest = #0F6CBD
brand.loud.hover = #106EBE
brand.loud.pressed = #005A9E
brand.loud.disabled = #BDBDBD
```
4
### Tint (Medium Strength)

```
brand.tint.rest = #0078D4
brand.tint.hover = #106EBE
brand.tint.pressed = #005A9E
brand.tint.disabled = #BDBDBD
```

### Subtle (Light Strength)

```
brand.subtle.rest = #DEECF9
brand.subtle.hover = #C7E0F4
brand.subtle.pressed = #9FD3EE
brand.subtle.disabled = #F5F5F5
```

### OnLoud (High Contrast on Brand)

```
brand.onLoud.rest = #FFFFFF
brand.onLoud.hover = #FFFFFF
brand.onLoud.pressed = #FFFFFF
brand.onLoud.disabled = #A19F9D
```

---

## Neutral Colors

Functional colors for backgrounds, text, borders, and structural UI elements.

### Background Levels

#### Level 1 (Primary Background)

```
neutral.background.level1.rest = #FFFFFF
neutral.background.level1.hover = #F5F5F5
neutral.background.level1.pressed = #E0E0E0
neutral.background.level1.selected = #EBEBEB
```

#### Level 2 (Secondary Background)

```
neutral.background.level2.rest = #FAFAFA
neutral.background.level2.hover = #F0F0F0
neutral.background.level2.pressed = #DBDBDB
neutral.background.level2.selected = #E6E6E6
```

#### Level 3 (Tertiary Background)

```
neutral.background.level3.rest = #F5F5F5
neutral.background.level3.hover = #EBEBEB
neutral.background.level3.pressed = #D6D6D6
neutral.background.level3.selected = #E0E0E0
```

#### Level 4 (Quaternary Background)

```
neutral.background.level4.rest = #F0F0F0
neutral.background.level4.hover = #FAFAFA
neutral.background.level4.pressed = #F5F5F5
neutral.background.level4.selected = #FFFFFF
```

### Foreground Colors

#### Primary Text

```
neutral.foreground.primary.rest = #242424
neutral.foreground.primary.hover = #201F1E
neutral.foreground.primary.pressed = #201F1E
neutral.foreground.primary.disabled = #A19F9D
```

#### Secondary Text

```
neutral.foreground.secondary.rest = #323130
neutral.foreground.secondary.hover = #201F1E
neutral.foreground.secondary.pressed = #201F1E
neutral.foreground.secondary.disabled = #A19F9D
```

#### Tertiary Text

```
neutral.foreground.tertiary.rest = #605E5C
neutral.foreground.tertiary.hover = #323130
neutral.foreground.tertiary.pressed = #323130
neutral.foreground.tertiary.disabled = #A19F9D
```

#### Inverted Text (On Dark Backgrounds)

```
neutral.foreground.inverted.rest = #FFFFFF
neutral.foreground.inverted.hover = #FFFFFF
neutral.foreground.inverted.pressed = #FFFFFF
neutral.foreground.inverted.disabled = #C8C6C4
```

### Stroke Colors

#### Accessible Strokes (High Contrast)

```
neutral.stroke.accessible.rest = #242424
neutral.stroke.accessible.hover = #383838
neutral.stroke.accessible.pressed = #383838
neutral.stroke.accessible.disabled = #C8C6C4
```

#### Primary Strokes

```
neutral.stroke.primary.rest = #C8C6C4
neutral.stroke.primary.hover = #A19F9D
neutral.stroke.primary.pressed = #605E5C
neutral.stroke.primary.disabled = #E1DFDD
```

#### Secondary Strokes

```
neutral.stroke.secondary.rest = #E1DFDD
neutral.stroke.secondary.hover = #C8C6C4
neutral.stroke.secondary.pressed = #A19F9D
neutral.stroke.secondary.disabled = #F3F2F1
```

### Shadow Colors

```
neutral.shadow.ambient.rest = rgba(0,0,0,0.12)
neutral.shadow.key.rest = rgba(0,0,0,0.14)
```

---

## Status Colors

Semantic colors that communicate states, feedback, and system status.

### Danger (Error)

#### Loud (High Emphasis)

```
danger.loud.rest = #A4262C
danger.loud.hover = #8A1F24
danger.loud.pressed = #6E1A1F
danger.loud.disabled = #A19F9D
```

#### Tint (Medium Emphasis)

```
danger.tint.rest = #C50E1F
danger.tint.hover = #A4262C
danger.tint.pressed = #8A1F24
danger.tint.disabled = #A19F9D
```

#### Subtle (Light Background)

```
danger.subtle.rest = #FDE7E9
danger.subtle.hover = #F8C7CA
danger.subtle.pressed = #F1707B
danger.subtle.disabled = #F5F5F5
```

#### OnLoud (High Contrast on Danger)

```
danger.onLoud.rest = #FFFFFF
danger.onLoud.hover = #FFFFFF
danger.onLoud.pressed = #FFFFFF
danger.onLoud.disabled = #A19F9D
```

#### Stroke

```
danger.stroke.rest = #F8B7BB
```

---

## Related resources

- Token Guidance: tokens-structure://docs/token-guidance.md
- Token Group Map: tokens-structure://docs/token-group-map.md
  danger.stroke.hover = #F1707B
  danger.stroke.pressed = #E73C4A
  danger.stroke.disabled = #E1DFDD

```

### Warning

#### Loud (High Emphasis)
```

warning.loud.rest = #D29200
warning.loud.hover = #B8800A
warning.loud.pressed = #9E6E0A
warning.loud.disabled = #A19F9D

```

#### Tint (Medium Emphasis)
```

warning.tint.rest = #F7630C
warning.tint.hover = #D29200
warning.tint.pressed = #B8800A
warning.tint.disabled = #A19F9D

```

#### Subtle (Light Background)
```

warning.subtle.rest = #FFF4CE
warning.subtle.hover = #FFE8A1
warning.subtle.pressed = #FFD454
warning.subtle.disabled = #F5F5F5

```

#### OnLoud (High Contrast on Warning)
```

warning.onLoud.rest = #FFFFFF
warning.onLoud.hover = #FFFFFF
warning.onLoud.pressed = #FFFFFF
warning.onLoud.disabled = #A19F9D

```

#### Stroke
```

warning.stroke.rest = #F8D47F
warning.stroke.hover = #FFD454
warning.stroke.pressed = #FFC62F
warning.stroke.disabled = #E1DFDD

```

### Success

#### Loud (High Emphasis)
```

success.loud.rest = #107C10
success.loud.hover = #0E6A0E
success.loud.pressed = #0C580C
success.loud.disabled = #A19F9D

```

#### Tint (Medium Emphasis)
```

success.tint.rest = #118D11
success.tint.hover = #107C10
success.tint.pressed = #0E6A0E
success.tint.disabled = #A19F9D

```

#### Subtle (Light Background)
```

success.subtle.rest = #DFF6DD
success.subtle.hover = #C7E9B0
success.subtle.pressed = #A6D785
success.subtle.disabled = #F5F5F5

```

#### OnLoud (High Contrast on Success)
```

success.onLoud.rest = #FFFFFF
success.onLoud.hover = #FFFFFF
success.onLoud.pressed = #FFFFFF
success.onLoud.disabled = #A19F9D

```

#### Stroke
```

success.stroke.rest = #BADF9C
success.stroke.hover = #A6D785
success.stroke.pressed = #8BC96A
success.stroke.disabled = #E1DFDD

```

### Info

#### Loud (High Emphasis)
```

info.loud.rest = #005A9E
info.loud.hover = #004578
info.loud.pressed = #003152
info.loud.disabled = #A19F9D

```

#### Tint (Medium Emphasis)
```

info.tint.rest = #0078D4
info.tint.hover = #005A9E
info.tint.pressed = #004578
info.tint.disabled = #A19F9D

```

#### Subtle (Light Background)
```

info.subtle.rest = #D0F0FD
info.subtle.hover = #A6D8F0
info.subtle.pressed = #6EC1F8
info.subtle.disabled = #F5F5F5

```

#### OnLoud (High Contrast on Info)
```

info.onLoud.rest = #FFFFFF
info.onLoud.hover = #FFFFFF
info.onLoud.pressed = #FFFFFF
info.onLoud.disabled = #A19F9D

```

#### Stroke
```

info.stroke.rest = #9CD9F6
info.stroke.hover = #6EC1F8
info.stroke.pressed = #3FB0E8
info.stroke.disabled = #E1DFDD

```

---

## Special Colors

### Transparent
```

transparent = transparent

```

### Pure Colors
```

pure.white = #FFFFFF
pure.black = #000000

```

---

## Usage Guidelines

### Color Intensity Hierarchy
1. **Loud** - Maximum emphasis, high contrast, used for primary actions
2. **Tint** - Medium emphasis, balanced visibility and contrast
3. **Subtle** - Minimal emphasis, light backgrounds and secondary information
4. **OnLoud** - High contrast text/icons for use on loud backgrounds

### Accessibility Notes
- All color combinations meet WCAG 2.1 AA contrast requirements
- Disabled colors provide visual indication while maintaining legibility
- Status colors use consistent patterns across danger, warning, success, and info

### Token Naming Pattern
```

[variant].[subVariant].[state] = [hex value]

```

Where:
- **variant**: `brand`, `neutral`, `danger`, `warning`, `success`, `info`
- **subVariant**: `loud`, `tint`, `subtle`, `onLoud`, `stroke`, `background.level[1-4]`, `foreground.[primary|secondary|tertiary|inverted]`, `stroke.[accessible|primary|secondary]`, `shadow.[ambient|key]`
- **state**: `rest`, `hover`, `pressed`, `selected`, `disabled`

### Example Usage in Component Tokens
```

background.button.container.brand.loud.rest = [brand.loud.rest]
foreground.button.label.neutral.onLoud.rest = [brand.onLoud.rest]
stroke.button.container.neutral.primary.rest = [neutral.stroke.primary.rest]

```

---

## Color Relationships

### Contrast Pairs
- `brand.loud` with `brand.onLoud`
- `danger.loud` with `danger.onLoud`
- `warning.loud` with `warning.onLoud`
- `success.loud` with `success.onLoud`
- `info.loud` with `info.onLoud`

### Background Hierarchy
- Level 1: Primary surfaces (cards, modals)
- Level 2: Secondary surfaces (subtle emphasis)
- Level 3: Tertiary surfaces (minimal emphasis)
- Level 4: Interactive surfaces (hover states)

### Text Hierarchy
- Primary: Main content, headings
- Secondary: Body text, labels
- Tertiary: Supporting text, captions
- Inverted: Text on dark backgrounds

This primitive color system provides the foundation for all component tokens while ensuring accessibility, consistency, and semantic meaning across the design system.
```
