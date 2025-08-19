# Component categories

This page covers the middle layer that Jack mentions in the Proposal for MS Universal Tokens. The goal is to come up with a new framework that will allow us to be flexible in our tokens and its applications, but more prescriptive in grouping components based on similar behavioral attributes.

## Table of Contents

- Proposed set
- General
- ctrlGroups
- Component levels

---

### Proposed set

We've taken the existing list and expanded on it to make sure that we can account for all the components we provide in Fluent 2.

> **Comment by Karlee Boillot (2025-08-11):**
> is the focus still web currently? or should we be thinking cross platform to mobile, while possibly only implementing web to begin with?

---

### General

| #   | Token                      | Definition                                                                                                                                                                            | Components |
| --- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| 1   | page NEW                   | Foundation-level components that provide the overall application structure and theming. These are typically used once per application or page to establish the design system context. |            |
| 2   | layer NEW                  | **Structural elements** that create visual separation and hierarchy within layouts. These elements help organize content into distinct sections or levels.                            |            |
| 3   | ~~content~~ **layout** NEW | **Structural utility** that help arrange and position other components within the interface. These provide flexible spacing and alignment systems.                                    |            |

---

### ctrlGroups

| ctrlGroup                            | Definition                                                                                                                                                                            | Components                                                                       |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| ctrl                                 | Default category                                                                                                                                                                      |                                                                                  |
| card                                 | **Container components** that group related content together in a visually distinct, elevated surface. Cards are self-contained units that can display various types of content.      | Card, Carousel                                                                   |
| ~~flyout~~ **overlay** EDITED        | **Temporary informational components** that appear above other content to provide feedback, guidance, or additional options without permanent screen real estate.                     | Popover, Tooltip, Dialog, Drawer, Modal, TeachingPopover, Toast                  |
| toolbar                              | **Action-oriented horizontal containers** that group related commands and controls. These provide quick access to frequently used actions within a specific context.                  | Toolbar, MessageBar                                                              |
| **choice** NEW                       | **Selection and decision components** that allow users to choose from options. These include single-choice, multiple-choice, and toggle-based interactions.                           | Checkbox, Radio, Rating, Switch, ColorPicker, SwatchPicker, TimePicker, Calendar |
| **button** NEW                       | **Action trigger components** that initiate commands, submit forms, or navigate users through the interface. Various styles accommodate different action types and importance levels. | Button, ToggleButton, SpinButton, Link                                           |
| **list** NEW                         | **Data presentation components** that display collections of information in organized, scannable formats. These handle both simple lists and complex data tables.                     | Accordion, MenuItem, List, Table, Tree                                           |
| **input** NEW                        | **Data entry components** that allow users to provide information to the system. These include various field types for different data formats and input methods.                      | Combobox, TagPicker, Field, InfoLabel, Input, Label, TextArea, Slider, Search    |
| **navigation** NEW                   | **Wayfinding components** that help users move through and understand the structure of an application. These provide orientation and movement capabilities.                           | Breadcrumb, Nav, TabList                                                         |
| ~~badge~~ **statusIndicator** EDITED | **Indicator components** that display status, counts, or supplementary information. These are typically overlaid on or positioned near other elements.                                | Badge, ProgressBar, Spinner                                                      |
| ~~image~~ **media** EDITED           | **Content display components** specifically designed for visual assets like images, avatars, and multimedia content.                                                                  | Image, Avatar, AvatarGroup, Persona                                              |
| text                                 | **Typography components** that handle the presentation of textual content with appropriate styling, hierarchy, and semantic meaning.                                                  | Text, Layout                                                                     |
| window WINDOWS SPECIFIC              | Windows specific values                                                                                                                                                               |                                                                                  |

---

### Component levels

We also wanted to separate out these into different levels, from atomic, to product experiences. Level 1-4 would be system specific, while level 5 would be product experiences that partner teams would be more engaged with.

| #   | Level       | Definition                                                                                                                                                                     | ctrlGroup                          |
| --- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------- |
| 1   | **Level 1** | The smallest, indivisible UI elements that cannot be broken down further without losing their meaning. These are the fundamental building blocks with single responsibilities. | text, button, status, media, layer |
| 2   | **Level 2** | Simple combinations of atomic components that work together as a cohesive unit. They have specific functions but are still relatively simple and reusable.                     | input, choice, layout              |
| 3   | **Level 3** | Complex UI components made up of groups of molecules and atoms. They form distinct sections of an interface with specific purposes and can contain multiple types of content.  | card, toolbar, overlay             |
| 4   | **Level 4** | Complete, reusable interface patterns that solve common user problems. These combine multiple organisms and represent standard ways of organizing content and functionality.   | window, list, navigation           |
| 5   | **Level 5** | Complete user workflows and experiences that combine multiple patterns to deliver end-to-end functionality. These represent full application features or user journeys.        | page                               |

---

## Related resources

- Token Guidance: tokens-structure://docs/token-guidance.md
- Token Group Map: tokens-structure://docs/token-group-map.md
- Button Token Group: tokens-structure://docs/button/token-group-button.md
