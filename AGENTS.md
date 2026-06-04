# Project Guidelines

Build production-ready UI in this Next.js + MUI workspace. The goal is to translate product specs,
screenshots, and Figma references into accessible, responsive, theme-aware React components using
the conventions already present in this repo.

## Stack

- Next.js with the App Router
- React
- TypeScript
- MUI / Material UI
- MUI theme customization through `_muiTheme.ts`
- Common UI components such as Button, Chip, Badge, inputs, cards, dialogs, drawers, tables, tabs,
  selects, and tooltips
- Next Image for all images
- Splide for sliders and carousels

> Before editing framework-specific code or config, check the installed package docs and existing
> implementation patterns in the repo.

## Non-Negotiables

- Match the provided design/spec. Do not redesign unless the task explicitly asks for design
  exploration.
- Do not omit states, responsive behavior, empty/error/loading states, or important interactions.
- Use existing components, theme tokens, variants, and helper APIs before creating new abstractions.
- Keep reusable UI theme-aware and compatible with the project theme.
- Avoid hard-coded colors. Add colors to `_palette.ts` and consume them through the MUI theme.
- Add custom color typings to `types.ts` inside the `mui-theme` folder.
- Keep code typed. Avoid `any` unless there is no reasonable typed alternative.
- Do not use inline styles. Always use styled components, `sx` only when already accepted by the
  repo pattern, or scoped style files.
- Run validation before handoff.
- Do not remove any existing files and comments.

## Repository Structure

Use the current project structure, not a generic structure. Keep files close to their domain while
extracting shared pieces only when they are genuinely reusable.

```text
app/                               Route-level composition
components/                        Shared and feature components
ui/                                Common reusable UI components
layout/                            Header, footer, navigation, shells
hooks/                             Shared hooks
public/assets/                     Static image assets
json/assest/index.ts               Exported image paths
styles/StyledComponents/           Common reusable styled components
styles/                            Global/base styles when required
mui-theme/                         MUI theme setup
  _muiTheme.ts                     Component variants and theme overrides
  _palette.ts                      Color palette values
  types.ts                         Theme and palette type augmentation
json/mock/                         Shared mock data
```

## Theme Rules

- Add every new project color to `mui-theme/_palette.ts`.
- Add or update palette/type definitions in `mui-theme/types.ts` whenever custom colors, variants,
  or theme keys are introduced.
- Register reusable component variants and visual rules in `mui-theme/_muiTheme.ts`.
- Style common Button, Chip, Badge, and other shared UI variants through the MUI theme instead of
  duplicating styles in every component.
- Prefer semantic theme values such as `primary`, `secondary`, `error`, `warning`, `info`,
  `success`, `background`, `text`, and custom palette keys from `_palette.ts`.
- Avoid hard-coded hex values inside components unless the color is temporary and clearly marked for
  replacement.

## Component Rules

- Before executing any UI/component task, check `components/examples/` for reference patterns.
- Prefer server components by default.
- Add `"use client"` only when the component needs state, effects, event handlers, browser APIs, or
  client-only libraries.
- Keep `app/**/page.tsx` files thin. A page file should compose and return that page's component,
  not contain large 300+ line UI implementations.
- Keep route composition in route folders; move reusable UI into `components`.
- Use common project components before raw MUI components when a common wrapper exists.
- Use the common Button, Chip, Badge, and their existing variants for UI elements.
- Add new variants to the common component and style them in `_muiTheme.ts` when the same visual
  pattern appears more than once.
- Keep component props clear and typed.
- Avoid hidden dependencies on mock data inside reusable components. Pass data through props.
- Use MUI components consistently for layout and interaction patterns unless the existing feature
  already uses a different local pattern.

## Styling Rules

- Do not use inline styles.
- Use common styled components from `styles/StyledComponents` for reusable layout, typography,
  cards, wrappers, sections, and repeated UI patterns.
- For feature-specific or scope-based styles, keep styles inside that specific feature/component
  folder.
- Use MUI `styled`, theme-aware styles, or existing project style utilities.
- Keep typography, spacing, border radius, shadows, and interaction states consistent with the MUI
  theme.
- For exact design work, copy measured spacing, font sizes, radii, borders, and states from the
  source design.
- Use stable layout dimensions for fixed-format UI such as dashboards, tables, toolbars, boards, and
  calendar cells so content does not jump.
- Avoid nested cards and decorative-only clutter.
- Do not add global styles unless they are necessary for third-party libraries, reset/base behavior,
  or shared app-level styling.

## Assets And Images

- Add all images to `public/assets/`.
- Add image paths to `json/assest/index.ts`.
- Always use `next/image` for rendering images.
- Do not use raw `<img>` tags unless there is a specific technical reason and it is documented in
  the code.
- Use meaningful alt text for content images.
- Use empty alt text only for decorative images.
- Keep image imports and paths centralized through `json/assest/index.ts` instead of scattering
  hard-coded paths across components.
- Do not generate images with AI. If the source design requires an image and the final asset is not
  available, use an existing placeholder from `public/assets/` and mention it during handoff.

## Sliders And Carousels

- Use Splide for sliders/carousels.
- Install Splide if it is not already present.

```bash
yarn add @splidejs/react-splide @splidejs/splide
```

- Import Splide CSS only where the project convention allows it, preferably in a shared/global style
  entry if the carousel appears across multiple routes.
- Keep slider controls, pagination, keyboard behavior, responsive breakpoints, and accessibility
  states aligned with the design.
- Do not create a custom slider from scratch unless Splide cannot support the required interaction.

## Mock Data Rules

- Keep shared mock data in the project mock data folder, such as `json/mock/`.
- For scope-specific mock data, place it inside the specific feature/component folder.
- Type mock data with interfaces or types.
- Do not hard-code mock arrays inside reusable UI components.
- Keep mock data realistic enough to test long text, empty states, missing images, and edge cases.

## Figma And Screenshot Implementation

- Break the design into sections and reusable components.
- Preserve the visual hierarchy from the design.
- Implement desktop, tablet, and mobile states.
- Match hover, focus, active, disabled, loading, empty, and error states when visible or implied.
- Use actual image assets when needed. Add images to `public/assets/` and export paths from
  `json/assest/index.ts`.
- Use common Button, Chip, Badge, typography, cards, and wrappers wherever possible.
- Add new theme variants only when a visual pattern is reusable.
- Keep page-specific styling scoped to the relevant feature/page folder.

## Accessibility

- Use semantic HTML through MUI components whenever possible.
- Ensure buttons, links, form controls, dialogs, drawers, menus, and sliders are keyboard
  accessible.
- Provide labels for inputs and form controls.
- Preserve visible focus states.
- Use proper alt text for images.
- Ensure color contrast is acceptable against the theme background.

## Validation

Before handing off changes, run the project validation command if available:

```bash
yarn validate
```

Useful commands:

```bash
yarn lint
yarn lint:fix
yarn typecheck
yarn format
yarn format:check
```

If Splide was added, verify the package installation and lockfile changes.

## Handoff Expectations

Summaries should be short and practical:

- What changed
- Files touched when useful
- Theme additions or updated variants
- Assets added or placeholders used
- Validation run
- Any known limitation or follow-up
