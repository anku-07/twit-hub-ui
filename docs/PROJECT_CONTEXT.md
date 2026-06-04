# Project Context

Use this document as the living project brief. Keep it updated whenever the product direction,
technical setup, routes, design rules, data model, or integration details change.

## Project Summary

- **Project name:** [Add project name]
- **Product type:** [Dashboard / marketing site / admin panel / marketplace / app shell / other]
- **Primary goal:** [Describe what the product helps users accomplish]
- **Current stage:** [Discovery / prototype / MVP / production / maintenance]
- **Primary owner:** [Name or team]
- **Last updated:** [YYYY-MM-DD]

## Audience

- **Primary users:** [Who uses this product most often]
- **Secondary users:** [Other user groups, if any]
- **User goals:** [Main outcomes users need]
- **Accessibility needs:** [Keyboard, contrast, screen reader, localization, reduced motion, etc.]

## Product Scope

### In Scope

- [Feature, page, or workflow]
- [Feature, page, or workflow]
- [Feature, page, or workflow]

### Out Of Scope

- [Feature or workflow intentionally excluded for now]
- [Feature or workflow intentionally excluded for now]

## Key Workflows

1. **[Workflow name]**
   - Entry point: [Route, button, link, or trigger]
   - Main steps: [Step 1 -> Step 2 -> Step 3]
   - Success state: [What the user sees after completion]
   - Error or empty state: [Expected fallback behavior]

2. **[Workflow name]**
   - Entry point: [Route, button, link, or trigger]
   - Main steps: [Step 1 -> Step 2 -> Step 3]
   - Success state: [What the user sees after completion]
   - Error or empty state: [Expected fallback behavior]

## Routes And Pages

| Route | Purpose | Status | Notes |
| --- | --- | --- | --- |
| `/` | [Homepage or main entry] | [Planned / In progress / Done] | [Notes] |
| `/example` | [Page purpose] | [Planned / In progress / Done] | [Notes] |

## UI And Design Direction

- **Design source:** [Figma URL, screenshot folder, product spec, or design notes]
- **Visual tone:** [Clean, dense, editorial, playful, enterprise, minimal, etc.]
- **Layout behavior:** [Desktop/tablet/mobile expectations]
- **Typography:** [Theme typography rules or references]
- **Spacing and radius:** [Theme spacing/radius rules or references]
- **Interaction states:** [Hover, focus, active, disabled, loading, empty, error]
- **Responsive priorities:** [What must remain visible or easy to use on small screens]

## Theme Notes

- **Palette additions:** [List custom palette keys added to `mui-theme/_palette.ts`]
- **Type additions:** [List custom MUI type additions in `mui-theme/types.ts`]
- **Component variants:** [Buttons, Chips, Badges, Cards, Dialogs, etc.]
- **Theme overrides:** [Reusable visual rules registered in `mui-theme/_muiTheme.ts`]

## Components

| Component | Location | Purpose | Reusable? | Notes |
| --- | --- | --- | --- | --- |
| `[ComponentName]` | `components/...` | [What it does] | [Yes / No] | [Props, states, variants] |
| `[ComponentName]` | `ui/...` | [What it does] | [Yes / No] | [Props, states, variants] |

## Data And Mocking

- **Data source:** [API / static JSON / mock data / CMS / local state]
- **Mock data location:** [`json/mock/...` or feature folder]
- **Important types:** [Type/interface names and locations]
- **Empty states:** [What should render when data is missing]
- **Error states:** [What should render when data fails]
- **Loading states:** [Skeletons, spinners, disabled controls, etc.]

## Assets

- **Asset source:** [Figma export / provided files / placeholder assets]
- **Asset folder:** `public/assets/`
- **Asset registry:** `json/assest/index.ts`
- **Image rules:** Use `next/image`, meaningful alt text, and centralized paths.
- **Placeholders used:** [List temporary placeholder assets that need replacement]

## Integrations

| Integration | Purpose | Config | Status | Notes |
| --- | --- | --- | --- | --- |
| `[Service name]` | [Why it exists] | [Env vars or config file] | [Planned / Active / Disabled] | [Notes] |

## Environment

- **Node version:** [Version]
- **Package manager:** [yarn / npm / pnpm]
- **Required env vars:**
  - `[ENV_VAR_NAME]`: [Purpose]
  - `[ENV_VAR_NAME]`: [Purpose]
- **Local dev command:** `[Add command]`
- **Build command:** `[Add command]`
- **Validation command:** `[Add command]`

## Constraints And Decisions

- [Decision, constraint, or tradeoff]
- [Decision, constraint, or tradeoff]
- [Decision, constraint, or tradeoff]

## Open Questions

- [Question that needs product/design/engineering input]
- [Question that needs product/design/engineering input]

## Validation Checklist

- [ ] UI matches the provided design or spec.
- [ ] Desktop, tablet, and mobile layouts are checked.
- [ ] Loading, empty, error, disabled, hover, focus, and active states are covered.
- [ ] Images use `next/image` and centralized asset paths.
- [ ] New colors are added to `mui-theme/_palette.ts`.
- [ ] New custom palette types are added to `mui-theme/types.ts`.
- [ ] Reusable variants are registered in `mui-theme/_muiTheme.ts`.
- [ ] TypeScript passes.
- [ ] Linting passes.
- [ ] Build or validation command passes.

## Handoff Notes

- **What changed:** [Short summary]
- **Files touched:** [Important files]
- **Theme updates:** [Palette, types, variants, overrides]
- **Assets added or placeholders used:** [Asset notes]
- **Validation run:** [Command and result]
- **Known limitations:** [Anything intentionally deferred]
