# Design Token System Rules & Guidelines

> **Purpose**: This document defines the complete architecture for creating a scalable, semantic design token library with mathematical consistency across nested components.

---

## 📋 Table of Contents

1. [Token Hierarchy Overview](#token-hierarchy-overview)
2. [System Architecture](#system-architecture)
3. [Atomic Design Levels](#atomic-design-levels)
4. [Naming Conventions](#naming-conventions)
5. [Implementation Examples](#implementation-examples)
6. [Token Reference](#token-reference)

---

## 🏗️ Token Hierarchy Overview

Our design token system uses a **4-tier hierarchy** that ensures consistency, scalability, and semantic clarity:

| Group Tokens                | Generic Tokens              | Primitive Tokens            | Final Values                |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| <div align="center">↓</div> | <div align="center">↓</div> | <div align="center">↓</div> | <div align="center">↓</div> |
| Component Specific          | UI Intent / Semantic        | Mathematical Foundation     | Actual CSS Values           |

### Quick Reference

| Token Type    | Purpose                            | Example                                    | Usage                  |
| ------------- | ---------------------------------- | ------------------------------------------ | ---------------------- |
| **Primitive** | All possible options in the system | `brand.loud.hover`                         | Foundation values      |
| **Generic**   | Curated UI intent from primitives  | `background.brand.hover`                   | Product team interface |
| **Group**     | Component family implementations   | `group.button.brand.backgroundColor.hover` | Component styling      |
| **Control**   | Unique edge cases                  | `ctrl.toggleButton.special.color`          | Rare overrides         |

---

## 🧩 System Architecture

### Primitive Tokens

**Definition**: The foundational values that define **all available options** in the design system.

**Key Characteristics**:

- ✅ Complete palette of design choices
- ✅ Atomic building blocks for all decisions
- ✅ Mathematical foundation for spatial properties
- ✅ All other tokens resolve to primitives

**Core Questions Primitives Answer**:

- What color options exist for each family + weight + state?
- What spacing values are available across 4 atomic levels?
- What typography sizes and weights can be used?
- What corner radius options support nested components?

### Primitive Token Structure

**Pattern Overview**: Different property types follow specific naming patterns optimized for their use cases.

| Property Type     | Pattern                      | Example                     | Key Features               |
| ----------------- | ---------------------------- | --------------------------- | -------------------------- |
| **Color**         | `[family].[weight].[state]`  | `brand.loud.hover`          | Interactive states         |
| **Spacing**       | `[category].[level].[scale]` | `spacing.level3.medium`     | 4-level hierarchy          |
| **Corner Radius** | `[category].[level].[scale]` | `cornerRadius.level2.large` | Mathematical relationships |
| **Typography**    | `[category].[scale]`         | `fontSize.medium`           | Simple scale system        |
| **Dimensions**    | `[category].[level].[scale]` | `width.level4.large`        | Component nesting support  |

**🔢 Mathematical Foundation**: Spacing, corner radius, and dimensional properties use a **4-level atomic design hierarchy** ensuring visual harmony across nested components.

---

### Generic Tokens

**Definition**: Curated subset of primitive choices selected for specific UI intentions.

**Key Role**:

- 🎯 **Primary interface for product teams** creating custom components
- 🔗 **Bridge** between vast primitive options and specific component needs
- 📐 **Semantic layer** that reduces decision fatigue

**Resolution Chain Example**:

```
group.button.brand.backgroundColor.hover  ← Group (component specific)
         ↓
background.brand.hover                     ← Generic (UI intent)
         ↓
brand.loud.hover                          ← Primitive (foundation)
         ↓
#106EBE                                   ← Final value
```

**Critical Rule**: 🔥 **All group tokens MUST connect to generic tokens**, never directly to primitives.

---

### Group Tokens

**Definition**: Component family implementations that share design language and style patterns.

**Purpose**:

- 🎨 Simplified interface for theming at component group level
- 🔄 Consistent changes across related components
- 🏗️ Semantic foundation through generic token connections

**Examples**:

- `group.button.*` → All button variants (brand, neutral, danger, etc.)
- `group.input.*` → All form input components
- `group.card.*` → All card container components

---

### Control Override Tokens

**Definition**: Highly specific tokens for unique component needs or edge cases.

**Usage Guidelines**:

- ⚠️ Use **sparingly** - only when group/generic tokens can't express required nuance
- 🚨 Too many control tokens = need to refactor into group tokens
- 🎯 Target individual components with unique styling requirements

---

## ⚛️ Atomic Design Levels

### 🧮 Mathematical Foundation

Our spatial properties follow precise mathematical relationships ensuring visual harmony across nested components:

```
Level 4 = Level 3 + Level 4 padding    (Expands outward)
Level 3 = Base foundation               (Primary reference)
Level 2 = max(0, Level 3 - Level 3 padding)  (Contracts inward)
Level 1 = max(0, Level 2 - Level 2 padding)  (Innermost)
```

### Corner Radius Calculation Examples

**Base Values**: Level 3 radius = 12px, Level 3 padding = 8px, Level 4 padding = 16px

| Level       | Calculation          | Result | Use Case        |
| ----------- | -------------------- | ------ | --------------- |
| **Level 4** | `12px + 16px`        | `28px` | Card containers |
| **Level 3** | Base radius          | `12px` | Buttons, inputs |
| **Level 2** | `max(0, 12px - 8px)` | `4px`  | Badges, tags    |
| **Level 1** | `max(0, 4px - 4px)`  | `0px`  | Icons, text     |

### Spacing Scale Examples

**Consistent Progression**: Each level maintains proportional relationships

| Level       | Small  | Medium | Large  | Context           |
| ----------- | ------ | ------ | ------ | ----------------- |
| **Level 4** | `12px` | `16px` | `24px` | Container padding |
| **Level 3** | `6px`  | `8px`  | `12px` | Control padding   |
| **Level 2** | `3px`  | `4px`  | `6px`  | Compact elements  |
| **Level 1** | `1px`  | `2px`  | `3px`  | Fine details      |

---

### 🔗 Component Organization by Nesting Level

| Level                           | Purpose                  | Components                  | Token Properties                    |
| ------------------------------- | ------------------------ | --------------------------- | ----------------------------------- |
| **Level 1 - Atomic**            | Smallest content holders | Text, Images, Icons         | Minimal spacing, Calculated radii   |
| **Level 2 - Small Interactive** | Compact tap targets      | Badges, Tags, Toggles       | Level 2 spacing, Level 3 - padding  |
| **Level 3 - Primary Controls**  | Form-aligned components  | Buttons, Inputs, Navigation | Base foundation, Reference point    |
| **Level 4 - Containers**        | Multi-element surfaces   | Cards, Dialogs, Toolbars    | Generous padding, Level 3 + padding |

---

## 📝 Naming Conventions

### Schema Structure

```
[ctrl/group].[component].[variant].[subComponent].[element].[elementVariant].[property].[state]
```

### Schema Flexibility

**Key Principle**: Tokens should be **as specific as necessary, but no more specific than required**.

**Omitted Segments Examples**:

- `group.button.small.paddingLeft` ← omits subComponent, element, elementVariant, state
- `background.brand.rest` ← generic omits ctrl/group, component, variant
- `spacing.level3.medium` ← includes atomic level for relationships

### Token Component Structure

| Schema Segment     | Purpose           | Examples                                                  |
| ------------------ | ----------------- | --------------------------------------------------------- |
| **[ctrl/group]**   | Token scope       | group (component family), ctrl (unique component)         |
| **[component]**    | Target component  | button, input, card                                       |
| **[variant]**      | Style variation   | Size: small, medium, large; Color: brand, neutral, danger |
| **[subComponent]** | Nested elements   | dropdown, iconButton, chevron                             |
| **[element]**      | Internal parts    | text, icon, image, label                                  |
| **[property]**     | CSS property      | backgroundColor, fontSize, paddingLeft                    |
| **[state]**        | Interactive state | rest, hover, pressed, disabled                            |

### Size Variants

| Variant  | Usage                                 | Context                   |
| -------- | ------------------------------------- | ------------------------- |
| `small`  | Compact interfaces, secondary actions | Space-constrained layouts |
| `medium` | Default baseline                      | Standard component size   |
| `large`  | Prominent actions, primary interfaces | High-emphasis elements    |

### Color Variants

| Variant   | Purpose                     | Usage                                   |
| --------- | --------------------------- | --------------------------------------- |
| `brand`   | Core identity colors        | Primary actions, key visual accents     |
| `neutral` | Functional foundation       | Backgrounds, surfaces, typography       |
| `danger`  | Critical/destructive states | Errors, warnings, destructive actions   |
| `success` | Positive outcomes           | Completion, approval, success messages  |
| `warning` | Cautionary information      | Important notices, proceed with caution |
| `info`    | Neutral information         | Helpful guidance, general communication |

### Interactive States

| State      | Definition              | Visual Impact                |
| ---------- | ----------------------- | ---------------------------- |
| `rest`     | Default appearance      | Baseline visual style        |
| `hover`    | Pointer hover feedback  | Signals interactivity        |
| `pressed`  | Active engagement       | Confirms action in progress  |
| `selected` | Persistent choice state | Remains until cleared        |
| `disabled` | Temporarily unavailable | Reduced opacity/muted colors |

---

## 📚 Implementation Examples

### Resolution Chain Examples

**Color Token Resolution:**

```
group.button.brand.backgroundColor.hover  ← Group: Component specific
    ↓
background.brand.hover                    ← Generic: UI semantic intent
    ↓
brand.loud.hover                          ← Primitive: Mathematical foundation
    ↓
#106EBE                                   ← Value: Final CSS color
```

**Spatial Token Resolution:**

```
group.button.medium.paddingLeft           ← Group: Button padding
    ↓
spacing.component.medium                  ← Generic: Component spacing intent
    ↓
spacing.level3.medium                     ← Primitive: Level 3 foundation
    ↓
12px                                      ← Value: Final CSS measurement
```

### Custom Component Usage

When product teams create custom components, they use generics directly:

**Custom Card Component (Level 4)**:

```css
.custom-card {
  background: var(--background-neutral-rest);
  padding: var(--spacing-container-large);
  border-radius: var(--cornerRadius-container-medium);
}
```

**Custom Button (Level 3)**:

```css
.custom-action-button {
  background: var(--background-brand-hover);
  color: var(--foreground-onBrand-rest);
  padding: var(--spacing-component-medium);
  border-radius: var(--cornerRadius-interactive-small);
}
```

---

## 📊 Token Hierarchy & Resolution Reference

This comprehensive table demonstrates how tokens connect across the entire hierarchy:

| Group Token | Generic Token | Primitive Token | Final Value | Semantic Purpose |
| ----------- | ------------- | --------------- | ----------- | ---------------- |

### 🎨 Color Token Resolution

| Group Token                                 | Generic Token             | Primitive Token          | Final Value | Notes                           |
| ------------------------------------------- | ------------------------- | ------------------------ | ----------- | ------------------------------- |
| `group.button.brand.backgroundColor.rest`   | `background.brand.rest`   | `brand.loud.rest`        | `#0078D4`   | Primary brand button background |
| `group.button.brand.backgroundColor.hover`  | `background.brand.hover`  | `brand.loud.hover`       | `#106EBE`   | Brand button hover state        |
| `group.button.brand.text.color.rest`        | `foreground.onBrand.rest` | `neutral.loud.rest`      | `#FFFFFF`   | Text on brand background        |
| `group.button.neutral.backgroundColor.rest` | `background.neutral.rest` | `neutral.tint.rest`      | `#F3F2F1`   | Neutral button background       |
| `group.button.danger.backgroundColor.rest`  | `background.danger.rest`  | `statusDanger.loud.rest` | `#D13438`   | Destructive action button       |

### 📐 Spacing Token Resolution

| Group Token                       | Generic Token              | Primitive Token         | Final Value | Notes                                        |
| --------------------------------- | -------------------------- | ----------------------- | ----------- | -------------------------------------------- |
| `group.button.small.paddingLeft`  | `spacing.component.small`  | `spacing.level3.small`  | `6px`       | Small button padding (semantic: component)   |
| `group.button.medium.paddingLeft` | `spacing.component.medium` | `spacing.level3.medium` | `12px`      | Medium button padding (semantic: component)  |
| `group.button.large.paddingLeft`  | `spacing.component.large`  | `spacing.level3.large`  | `16px`      | Large button padding (semantic: component)   |
| `group.card.medium.paddingTop`    | `spacing.container.medium` | `spacing.level4.medium` | `16px`      | Card container padding (semantic: container) |
| `group.stack.medium.gap`          | `spacing.stack.medium`     | `spacing.level3.medium` | `12px`      | Vertical stack spacing (semantic: stack)     |

### 🔄 Corner Radius Token Resolution

| Group Token                         | Generic Token                     | Primitive Token              | Final Value | Notes                      |
| ----------------------------------- | --------------------------------- | ---------------------------- | ----------- | -------------------------- |
| `group.button.medium.borderRadius`  | `cornerRadius.interactive.medium` | `cornerRadius.level3.medium` | `8px`       | Interactive element radius |
| `group.card.medium.borderRadius`    | `cornerRadius.container.medium`   | `cornerRadius.level4.medium` | `24px`      | Container surface radius   |
| `group.image.medium.borderRadius`   | `cornerRadius.image.medium`       | `cornerRadius.level1.medium` | `4px`       | Image/media radius         |
| `group.surface.medium.borderRadius` | `cornerRadius.surface.medium`     | `cornerRadius.level2.medium` | `6px`       | Background surface radius  |

### 📝 Typography Token Resolution

| Group Token                         | Generic Token         | Primitive Token       | Final Value | Notes                          |
| ----------------------------------- | --------------------- | --------------------- | ----------- | ------------------------------ |
| `group.button.small.text.fontSize`  | `fontSize.small`      | `fontSize.small`      | `12px`      | Small button text size         |
| `group.button.medium.text.fontSize` | `fontSize.medium`     | `fontSize.medium`     | `14px`      | Medium button text size        |
| `group.button.all.text.fontWeight`  | `fontWeight.semibold` | `fontWeight.semibold` | `600`       | Button text weight (all sizes) |

### 📏 Dimensional Token Resolution

| Group Token                  | Generic Token             | Primitive Token        | Final Value | Notes                        |
| ---------------------------- | ------------------------- | ---------------------- | ----------- | ---------------------------- |
| `group.button.medium.height` | `height.control.standard` | `height.level3.medium` | `32px`      | Standard form control height |
| `group.badge.small.width`    | `width.content.minimal`   | `width.level2.small`   | `16px`      | Minimal content width        |
| `group.card.large.width`     | `width.content.extended`  | `width.level4.large`   | `400px`     | Extended container width     |

### 🔍 Resolution Patterns Summary

| Pattern Type    | Group Level                                | Generic Level                        | Primitive Level                                 | Key Characteristic              |
| --------------- | ------------------------------------------ | ------------------------------------ | ----------------------------------------------- | ------------------------------- |
| **Color**       | Semantic intent (brand, neutral)           | UI purpose (background, foreground)  | Color family + weight + state (brand.loud.rest) | Interactive state support       |
| **Spatial**     | Component specific (button.medium.padding) | UI intent + level (component.medium) | Mathematical foundation (level3.medium)         | 4-level hierarchy relationships |
| **Typography**  | Component context (button.text.fontSize)   | Semantic scale (fontSize.medium)     | Direct value (fontSize.medium)                  | Simple direct mapping           |
| **Dimensional** | Component sizing (button.medium.height)    | Functional intent (control.standard) | Level-based scale (level3.medium)               | Nesting level support           |

---

## 🔗 Advanced Resolution Examples

### Multi-Level Atomic Chain (Mathematical Relationships)

```
Level 4 Container → Level 3 Control → Level 2 Small → Level 1 Atomic
      ↓                    ↓               ↓             ↓
28px (12px + 16px)    12px (base)     4px (12-8)    0px (4-4)
```

**Corner Radius Chain:**

- `group.card.large.borderRadius` → `cornerRadius.level4.large` → `28px` (molecular: base + padding)
- `group.button.large.borderRadius` → `cornerRadius.level3.large` → `12px` (primary: foundation)
- `group.tag.large.borderRadius` → `cornerRadius.level2.large` → `4px` (small: foundation - padding)
- `group.icon.large.borderRadius` → `cornerRadius.level1.large` → `0px` (atomic: calculated minimum)

### Custom Component Implementation

**Product teams use generics directly for consistency:**

```css
/* Level 4 - Custom Card Component */
.custom-dashboard-card {
  background: var(--background-neutral-rest);
  padding: var(--spacing-container-large);
  border-radius: var(--cornerRadius-container-medium);
  box-shadow: var(--elevation-level4-rest);
}

/* Level 3 - Custom Action Button */
.custom-action-button {
  background: var(--background-brand-hover);
  color: var(--foreground-onBrand-rest);
  padding: var(--spacing-component-medium);
  border-radius: var(--cornerRadius-interactive-small);
  height: var(--height-control-standard);
}

/* Level 2 - Custom Status Badge */
.custom-status-indicator {
  background: var(--background-statusSuccess-rest);
  color: var(--foreground-onStatus-rest);
  padding: var(--spacing-inline-small);
  border-radius: var(--cornerRadius-surface-full);
  font-size: var(--fontSize-small);
}
```

---

## 🗂️ Complete Token Reference

### Primitive Tokens

#### 🎨 Color Primitives

```
Brand Family:
brand.loud.{rest|hover|pressed}
brand.tint.{rest|hover}
brand.subtle.{rest|hover}
brand.transparent.{rest|hover}

Neutral Family:
neutral.loud.{rest|hover}
neutral.tint.{rest|hover}
neutral.subtle.{rest|hover}
neutral.transparent.rest

Status Families:
statusDanger.{loud|tint|subtle|transparent}.rest
statusSuccess.{loud|tint|subtle}.rest
statusWarning.{loud|tint|subtle}.rest
statusInfo.{loud|tint|subtle}.rest
```

#### 📐 Spacing Primitives

```
spacing.level1.{none|small|medium|large|full}
spacing.level2.{none|small|medium|large|full}
spacing.level3.{none|small|medium|large|full}  ← Foundation level
spacing.level4.{none|small|medium|large|full}
```

#### 🔄 Corner Radius Primitives

```
cornerRadius.level1.{none|small|medium|large|full}
cornerRadius.level2.{none|small|medium|large|full}
cornerRadius.level3.{none|small|medium|large|full}  ← Foundation level
cornerRadius.level4.{none|small|medium|large|full}
```

#### 📝 Typography Primitives

```
fontSize.{none|small|medium|large|full}
fontWeight.{light|regular|medium|semibold|bold}
lineHeight.{none|small|medium|large|full}
letterSpacing.{none|small|medium|large|full}
```

#### 📏 Dimensional Primitives

```
width.level{1-4}.{none|small|medium|large|full}
height.level{1-4}.{none|small|medium|large|full}
```

---

### Generic Tokens

#### 🎨 Color Generics

```
Backgrounds:
background.{brand|neutral|danger|success|warning|info}.{rest|hover|pressed}

Foregrounds:
foreground.{brand|neutral}.{rest|hover|pressed}
foreground.on{Brand|Neutral|Status}.{rest|hover|pressed}

Strokes:
stroke.{brand|neutral}.{rest|hover|pressed}
stroke.on{Brand|Neutral|Status}.{rest|hover|pressed}
```

#### 📐 Layout Generics (Semantic Intent)

```
Spacing (UI Purpose):
spacing.{component|container|stack|inline}.{small|medium|large}

Corner Radius (Element Type):
cornerRadius.{interactive|container|surface|image}.{small|medium|large}
```

#### 📏 Dimensional Generics (Functional Intent)

```
Width (Content Type):
width.{content|layout|control}.{narrow|standard|wide|compact|expanded}

Height (Function Type):
height.{control|section|header}.{compact|standard|comfortable|minimal|spacious}
```

---

### Group Token Examples

#### 🔘 Button Group (Level 3 - Primary Interactive)

```
Shared Properties (All Variants):
group.button.all.text.fontWeight
group.button.all.text.fontWeight.selected

Size Variants:
group.button.{small|medium|large}.{paddingLeft|paddingRight|paddingTop|paddingBottom}
group.button.{small|medium|large}.{gap|text.fontSize|borderRadius}

Color Variants:
group.button.{neutral|brand|danger}.backgroundColor.{rest|hover|pressed}
group.button.{neutral|brand|danger}.text.color.{rest|hover|pressed}
group.button.{outline|subtle|transparent}.{borderColor|backgroundColor}.{rest|hover}
```

#### 🏷️ Additional Component Groups

```
Level 1 - Atomic Elements:
group.{icon|text|avatar}.{size}.{property}

Level 2 - Small Interactive:
group.{tag|badge|checkbox}.{size|color}.{property}.{state}

Level 4 - Molecular Containers:
group.{card|dialog|toolbar}.{size|color}.{property}.{state}
```

---

### Control Override Examples

```
Unique Component Overrides:
ctrl.toggleButton.brand.text.color.rest
ctrl.specialCard.custom.backgroundColor.hover
ctrl.uniqueInput.error.borderColor.focus
```

**⚠️ Usage Guidelines**:

- Use sparingly for true edge cases
- Consider refactoring into group tokens if used frequently
- Document reasoning for custom overrides

---

## 🎯 Best Practices Summary

### ✅ Do's

- **Always** connect group tokens to generics (never direct to primitives)
- **Use Level 3 as foundation** for mathematical calculations
- **Leverage generics** for custom component creation
- **Keep token names semantic** and as simple as possible
- **Follow the 4-level hierarchy** for spatial consistency

### ❌ Don'ts

- **Never** bypass the generic layer in group tokens
- **Don't** create excessive control override tokens
- **Avoid** overly specific token names when simpler will suffice
- **Don't** break mathematical relationships in spatial tokens
- **Resist** creating new patterns outside the established hierarchy

### 🔧 Implementation Tips

- Start with **Level 3 as your foundation** for most components
- Use **Level 4 for containers** that need to accommodate Level 3 components
- Apply **Level 2 for compact elements** within Level 3 controls
- Reserve **Level 1 for pure content** elements (text, icons, images)
- **Test mathematical relationships** when customizing spatial values
