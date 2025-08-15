# Group Map: Fluent UI Component Token Category Mapping

Comprehensive mapping of all Fluent UI React v9 components to the token categories and groups defined in `tokenGuidance.md`. This mapping establishes the systematic relationship between component types and their corresponding token organization patterns.

## Overview

This mapping follows the atomic design hierarchy and token naming conventions established in our token guidance framework. Each component is categorized by its functional role, atomic complexity, and token requirements.

---

## Atomic Elements
*Smallest self-contained shapes used for single, non-interactive visual elements*

### Text Group
Typography components that handle the presentation of textual content with appropriate styling, hierarchy, and semantic meaning.

| Component | Token Group | Primary Categories | Key Elements | Design Purpose |
|-----------|-------------|-------------------|--------------|----------------|
| **Text** | `text` | `foreground`, `text`, `size` | `label`, `bodyText` | Display text with Fluent typography styles |
| **Label** | `text` | `foreground`, `text`, `size` | `label` | Form control labels and descriptive text |
| **Link** | `text` | `foreground`, `text`, `stroke` | `label`, `underline` | Hyperlink text with states |

#### Token Examples:
```
foreground.text.label.default.neutral.primary.rest
text.text.bodyText.default.weight
size.text.label.small.fontSize
stroke.text.underline.default.brand.loud.hover
```

### Image Group
Content display components specifically designed for visual assets like images, avatars, and multimedia content.

| Component | Token Group | Primary Categories | Key Elements | Design Purpose |
|-----------|-------------|-------------------|--------------|----------------|
| **Image** | `image` | `corner`, `size`, `stroke` | `image`, `container` | Display bitmap images with styling |
| **Avatar** | `image` | `corner`, `size`, `background`, `foreground` | `image`, `container`, `initials`, `icon` | User profile representation |
| **AvatarGroup** | `image` | `corner`, `size`, `background`, `gap` | `container`, `avatar`, `overflow` | Multiple user representation |

#### Token Examples:
```
corner.image.container.default
size.image.avatar.small.width
background.image.avatar.default.neutral.subtle.rest
foreground.image.initials.default.neutral.onSubtle.rest
gap.image.avatarGroup.default.overlap
```

---

## Small Interactive Primitives
*Compact tap/click targets that can contain atomic elements*

### Choice Group
Selection and decision components that allow users to choose from options.

| Component | Token Group | Primary Categories | Key Elements | Design Purpose |
|-----------|-------------|-------------------|--------------|----------------|
| **Checkbox** | `choice` | `background`, `foreground`, `stroke`, `corner`, `size` | `container`, `icon`, `label` | Binary selection control |
| **RadioGroup** | `choice` | `background`, `foreground`, `stroke`, `corner`, `size` | `container`, `icon`, `label` | Exclusive selection control |
| **Switch** | `choice` | `background`, `foreground`, `corner`, `size`, `gap` | `container`, `thumb`, `label` | Toggle control for binary states |
| **ToggleButton** | `choice` | `background`, `foreground`, `stroke`, `corner`, `gap` | `container`, `label`, `icon` | Button with toggle behavior |
| **Rating** | `choice` | `foreground`, `size`, `gap` | `icon`, `container` | User feedback rating control |
| **RatingDisplay** | `choice` | `foreground`, `size`, `gap` | `icon`, `container` | Read-only rating visualization |

#### Token Examples:
```
background.choice.container.default.neutral.subtle.rest
foreground.choice.icon.default.brand.loud.selected
stroke.choice.container.default.neutral.primary.rest
corner.choice.container.default
size.choice.thumb.default.width
gap.choice.label.default
```

### Badge Group
Indicator components that display status, counts, or supplementary information.

| Component | Token Group | Primary Categories | Key Elements | Design Purpose |
|-----------|-------------|-------------------|--------------|----------------|
| **Badge** | `badge` | `background`, `foreground`, `corner`, `size`, `padding` | `container`, `label`, `icon` | Status indicators and counts |
| **ProgressBar** | `badge` | `background`, `foreground`, `corner`, `size` | `container`, `fill`, `label` | Progress indication |
| **Skeleton** | `badge` | `background`, `corner`, `size` | `container`, `shimmer` | Loading state placeholder |

#### Token Examples:
```
background.badge.container.default.status.loud.rest
foreground.badge.label.default.status.onLoud.rest
corner.badge.container.default
size.badge.container.small.height
padding.badge.container.default.horizontal
```

---

## Primary Interactive Controls
*Medium-size components that align with form fields and contain smaller elements*

### Button Group
Action trigger components that initiate commands, submit forms, or navigate users.

| Component | Token Group | Primary Categories | Key Elements | Design Purpose |
|-----------|-------------|-------------------|--------------|----------------|
| **Button** | `button` | `background`, `foreground`, `stroke`, `corner`, `gap`, `size` | `container`, `label`, `icon` | Primary action triggers |
| **SplitButton** | `button` | `background`, `foreground`, `stroke`, `corner`, `gap`, `size` | `container`, `label`, `icon`, `trigger` | Combined action and menu |
| **ToggleButton** | `button` | `background`, `foreground`, `stroke`, `corner`, `gap` | `container`, `label`, `icon` | Action with toggle state |

#### Token Examples:
```
background.button.container.default.brand.loud.rest
foreground.button.label.default.brand.onLoud.rest
stroke.button.container.default.neutral.primary.rest
corner.button.container.default
gap.button.content.default
size.button.container.default.height
```

### Navigation Group
Wayfinding components that help users move through application structure.

| Component | Token Group | Primary Categories | Key Elements | Design Purpose |
|-----------|-------------|-------------------|--------------|----------------|
| **Breadcrumbs** | `navigation` | `foreground`, `gap`, `size`, `text` | `label`, `icon`, `separator` | Hierarchical navigation path |
| **TabList** | `navigation` | `background`, `foreground`, `stroke`, `corner`, `gap` | `container`, `tab`, `label`, `icon` | Content organization tabs |
| **Tab** | `navigation` | `background`, `foreground`, `stroke`, `corner`, `padding` | `container`, `label`, `icon` | Individual tab element |

#### Token Examples:
```
foreground.navigation.label.default.neutral.secondary.rest
gap.navigation.breadcrumb.default.separator
background.navigation.container.default.neutral.subtle.selected
stroke.navigation.indicator.default.brand.loud.selected
```

### List Group
Data presentation components that display collections of information.

| Component | Token Group | Primary Categories | Key Elements | Design Purpose |
|-----------|-------------|-------------------|--------------|----------------|
| **List** | `list` | `background`, `foreground`, `stroke`, `gap`, `padding` | `container`, `item`, `label`, `icon` | Generic list display |
| **Tree** | `list` | `background`, `foreground`, `stroke`, `gap`, `padding` | `container`, `item`, `label`, `icon`, `expander` | Hierarchical data display |
| **Table** | `list` | `background`, `foreground`, `stroke`, `gap`, `padding` | `container`, `header`, `cell`, `row` | Tabular data presentation |
| **DataGrid** | `list` | `background`, `foreground`, `stroke`, `gap`, `padding` | `container`, `header`, `cell`, `row` | Advanced data table |

#### Token Examples:
```
background.list.container.default.neutral.subtle.rest
foreground.list.label.default.neutral.primary.rest
stroke.list.divider.default.neutral.secondary.rest
gap.list.item.default.vertical
padding.list.item.default.horizontal
```

### Input Group
Data entry components that allow users to provide information.

| Component | Token Group | Primary Categories | Key Elements | Design Purpose |
|-----------|-------------|-------------------|--------------|----------------|
| **Input** | `input` | `background`, `foreground`, `stroke`, `corner`, `padding`, `size` | `container`, `label`, `text`, `icon` | Single-line text input |
| **Textarea** | `input` | `background`, `foreground`, `stroke`, `corner`, `padding`, `size` | `container`, `label`, `text` | Multi-line text input |
| **Dropdown** | `input` | `background`, `foreground`, `stroke`, `corner`, `padding`, `size` | `container`, `label`, `text`, `icon` | Selection from options |
| **Combobox** | `input` | `background`, `foreground`, `stroke`, `corner`, `padding`, `size` | `container`, `label`, `text`, `icon` | Text input with dropdown |
| **DatePicker** | `input` | `background`, `foreground`, `stroke`, `corner`, `padding`, `size` | `container`, `label`, `text`, `icon` | Date selection input |
| **TagPicker** | `input` | `background`, `foreground`, `stroke`, `corner`, `gap`, `size` | `container`, `label`, `tag`, `input` | Multi-select tag input |
| **SpinButton** | `input` | `background`, `foreground`, `stroke`, `corner`, `padding`, `size` | `container`, `label`, `text`, `button` | Numeric input with controls |
| **ColorPicker** | `input` | `background`, `foreground`, `stroke`, `corner`, `padding`, `size` | `container`, `label`, `swatch`, `input` | Color selection input |
| **Slider** | `input` | `background`, `foreground`, `corner`, `size`, `gap` | `container`, `track`, `thumb`, `label` | Range value selection |
| **Field** | `input` | `background`, `foreground`, `gap`, `padding` | `container`, `label`, `hint`, `message` | Form field wrapper |

#### Token Examples:
```
background.input.container.default.neutral.subtle.rest
foreground.input.text.default.neutral.primary.rest
stroke.input.container.default.neutral.primary.rest
corner.input.container.default
padding.input.container.default.horizontal
size.input.container.default.height
```

---

## Molecular Content Containers
*Larger multi-element surfaces that combine smaller components*

### Flyout Group
Temporary informational components that appear above other content.

| Component | Token Group | Primary Categories | Key Elements | Design Purpose |
|-----------|-------------|-------------------|--------------|----------------|
| **Dialog** | `flyout` | `background`, `foreground`, `stroke`, `corner`, `shadow`, `padding` | `container`, `header`, `body`, `footer` | Modal interaction dialogs |
| **Drawer** | `flyout` | `background`, `foreground`, `stroke`, `shadow`, `padding` | `container`, `header`, `body`, `footer` | Slide-in content panels |
| **Tooltip** | `flyout` | `background`, `foreground`, `corner`, `shadow`, `padding` | `container`, `label`, `arrow` | Contextual help information |
| **Popover** | `flyout` | `background`, `foreground`, `stroke`, `corner`, `shadow`, `padding` | `container`, `content`, `arrow` | Rich contextual content |
| **MenuPopover** | `flyout` | `background`, `foreground`, `stroke`, `corner`, `shadow` | `container`, `content` | Menu content container |
| **MenuList** | `flyout` | `background`, `foreground`, `stroke`, `gap`, `padding` | `container`, `item`, `label`, `icon` | Menu item list |
| **OverflowMenu** | `flyout` | `background`, `foreground`, `stroke`, `corner`, `shadow` | `container`, `trigger`, `content` | Overflow action menu |
| **Toast** | `flyout` | `background`, `foreground`, `stroke`, `corner`, `shadow`, `padding` | `container`, `message`, `icon`, `action` | Notification messages |
| **MessageBar** | `flyout` | `background`, `foreground`, `stroke`, `corner`, `padding` | `container`, `message`, `icon`, `action` | Alert and status messages |

#### Token Examples:
```
background.flyout.container.default.neutral.subtle.rest
foreground.flyout.label.default.neutral.primary.rest
stroke.flyout.container.default.neutral.secondary.rest
corner.flyout.container.default
shadow.flyout.container.default.elevation
padding.flyout.container.default.vertical
```

### Toolbar Group
Action-oriented horizontal containers that group related commands.

| Component | Token Group | Primary Categories | Key Elements | Design Purpose |
|-----------|-------------|-------------------|--------------|----------------|
| **Toolbar** | `toolbar` | `background`, `foreground`, `stroke`, `gap`, `padding` | `container`, `group`, `separator` | Command grouping container |

#### Token Examples:
```
background.toolbar.container.default.neutral.subtle.rest
gap.toolbar.group.default.horizontal
padding.toolbar.container.default.horizontal
stroke.toolbar.separator.default.neutral.secondary.rest
```

### Card Group
Container components that group related content in elevated surfaces.

| Component | Token Group | Primary Categories | Key Elements | Design Purpose |
|-----------|-------------|-------------------|--------------|----------------|
| **Card** | `card` | `background`, `foreground`, `stroke`, `corner`, `shadow`, `padding` | `container`, `header`, `body`, `footer` | Content grouping container |
| **CardHeader** | `card` | `background`, `foreground`, `gap`, `padding` | `container`, `title`, `description`, `image` | Card header section |
| **CardFooter** | `card` | `background`, `foreground`, `gap`, `padding` | `container`, `action` | Card footer section |

#### Token Examples:
```
background.card.container.default.neutral.subtle.rest
foreground.card.title.default.neutral.primary.rest
stroke.card.container.default.neutral.secondary.rest
corner.card.container.default
shadow.card.container.default.elevation
padding.card.container.default.vertical
```

---

## Layout and Utility Components
*Supporting components that provide structure and utility functions*

### Layout Components

| Component | Token Group | Primary Categories | Key Elements | Design Purpose |
|-----------|-------------|-------------------|--------------|----------------|
| **Flex** | `layout` | `gap`, `padding` | `container` | Flexible box layout |
| **Stack** | `layout` | `gap`, `padding` | `container` | Vertical/horizontal stacking |
| **Accordion** | `layout` | `background`, `foreground`, `stroke`, `corner`, `gap` | `container`, `header`, `panel`, `icon` | Collapsible content sections |
| **Divider** | `layout` | `stroke`, `gap` | `line`, `label` | Visual content separation |

#### Token Examples:
```
gap.layout.container.default.horizontal
padding.layout.container.default.vertical
background.layout.header.default.neutral.subtle.rest
stroke.layout.divider.default.neutral.secondary.rest
```

### Utility Components

| Component | Token Group | Primary Categories | Key Elements | Design Purpose |
|-----------|-------------|-------------------|--------------|----------------|
| **FluentProvider** | `utility` | N/A | N/A | Theme and context provider |
| **MenuTrigger** | `utility` | N/A | N/A | Menu activation utility |

---

## Token Group Summary

| Group | Component Count | Primary Focus | Token Categories |
|-------|----------------|---------------|------------------|
| **text** | 3 | Typography display | `foreground`, `text`, `size` |
| **image** | 3 | Visual content | `corner`, `size`, `background`, `stroke` |
| **choice** | 6 | User selection | `background`, `foreground`, `stroke`, `corner` |
| **badge** | 3 | Status indication | `background`, `foreground`, `corner`, `size` |
| **button** | 3 | Action triggers | `background`, `foreground`, `stroke`, `corner`, `gap` |
| **navigation** | 3 | Wayfinding | `background`, `foreground`, `stroke`, `gap` |
| **list** | 4 | Data display | `background`, `foreground`, `stroke`, `gap`, `padding` |
| **input** | 10 | Data entry | `background`, `foreground`, `stroke`, `corner`, `padding` |
| **flyout** | 9 | Overlays | `background`, `foreground`, `stroke`, `shadow`, `padding` |
| **toolbar** | 1 | Command grouping | `background`, `gap`, `padding` |
| **card** | 3 | Content containers | `background`, `foreground`, `stroke`, `shadow`, `padding` |
| **layout** | 4 | Structure | `gap`, `padding`, `background`, `stroke` |
| **utility** | 2 | System support | N/A |

---

## Token Naming Pattern Examples

Following the `category.group.element.size.variant.subVariant.state` pattern:

### Complete Token Examples by Group:
```
// Text Group
foreground.text.label.default.neutral.primary.rest
text.text.bodyText.default.weight.regular
size.text.label.small.fontSize

// Choice Group  
background.choice.container.default.brand.loud.selected
foreground.choice.icon.default.brand.onLoud.rest
stroke.choice.container.default.neutral.primary.rest

// Button Group
background.button.container.default.brand.loud.rest
foreground.button.label.default.brand.onLoud.rest
corner.button.container.default

// Input Group
background.input.container.default.neutral.subtle.rest
stroke.input.container.default.neutral.primary.focused
padding.input.container.default.horizontal

// Flyout Group
background.flyout.container.default.neutral.subtle.rest
shadow.flyout.container.default.elevation.medium
corner.flyout.container.default

// Card Group
background.card.container.default.neutral.subtle.rest
shadow.card.container.default.elevation.low
padding.card.container.default.vertical
```

---

## Implementation Notes

1. **Consistency**: All components within a group share common token patterns
2. **Inheritance**: Components can inherit tokens from primitive patterns
3. **Override Capability**: Specific components can have ctrl overrides when needed
4. **Accessibility**: All token patterns maintain WCAG compliance
5. **Scalability**: New components can be easily categorized using these group patterns
6. **Maintainability**: Token updates propagate systematically through component groups

This mapping provides the foundation for systematic token application across all Fluent UI React v9 components while maintaining consistency with our established token guidance framework.
