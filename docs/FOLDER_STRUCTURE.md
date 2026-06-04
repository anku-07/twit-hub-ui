# Folder Structure

Use this as the working map for where files should live in this project. Keep domain files close to
their feature, and only move code into shared folders when it is genuinely reusable.

## Current Structure

```text
app/                               Next.js App Router routes and route-level composition
  dashboard/                       Dashboard route pages
  offline/                         Offline route page
  layout.tsx                       Root app layout
  providers.tsx                    App-level providers

api/                               API clients, endpoints, and request functions
  axiosInstance/                   Axios setup
  endpoints/                       API endpoint constants
  functions/                       Domain API functions

components/                        Shared and feature-level React components
  Error/                           Error-state UI
  EventListener/                   App event listener components
  MainMessageComponent/            Message feature UI
  Seo/                             SEO helpers
  examples/                        Reference components for AI and developers

ui/                                Common reusable UI primitives and wrappers
  CommonInput/                     Shared input wrapper
  CustomButtons/                   Shared button wrappers
  CustomDatePicker/                Date picker wrapper
  CustomImage/                     Next Image wrapper
  CustomSelect*/                   Select wrappers
  CustomSwitch/                    Switch wrapper
  Icons/                           Local icon components
  Loader/                          Loading UI
  Modal/                           Modal wrapper
  Skeletons/                       Reusable skeleton states

layout/                            App shell, header, footer, sidebar, wrappers
  DashboardHeader/
  DashboardSidebar/
  DashboardWrapper/
  Footer/
  Header/
  wrapper/

hooks/                             Shared React hooks
  react-query/                     TanStack Query hooks
  utils/                           General-purpose utility hooks

json/                              Static JSON, mocks, assets registry, copy, events
  assest/                          Central image path registry; keep existing name unless migrated
  events/                          Event constants
  lottie/                          Lottie JSON files
  messages/                        Message and validation copy
  mock/                            Shared mock data

mui-theme/                         MUI theme setup
  AppThemeProvider.tsx             Theme provider wrapper
  _muiTheme.ts                     Theme options, typography, component overrides
  _palette.ts                      Palette values
  globalStyles.ts                  Theme global styles
  themeConstant.ts                 Theme constants
  types.ts                         MUI type augmentation

styles/                            Global and shared styling
  StyledComponents/                Common styled wrappers
  global.scss                      Global stylesheet

typescript/                        Shared TypeScript contracts
  interface/                       Interfaces
  types/                           Types

lib/                               Shared non-React utilities
  functions/                       Helper functions
  regex/                           Regex constants

services/                          App-level service instances
config/                            App constants and configuration
public/assets/                     Static assets used by Next Image
zustand/                           Zustand stores
docs/                              Project documentation for AI and developers
```

## Placement Rules

- Put route files, layouts, and page composition inside `app/`.
- Put reusable or feature-level UI under `components/`.
- Put low-level common UI wrappers under `ui/`.
- Put shared shell pieces such as headers, sidebars, footers, and wrappers under `layout/`.
- Put API setup and domain request functions under `api/`.
- Put shared hooks under `hooks/`, grouped by purpose.
- Put shared mock data in `json/mock/`.
- Put all static image files under `public/assets/`.
- Export image paths from `json/assest/index.ts` before using them in components.
- Put reusable styled wrappers in `styles/StyledComponents/`.
- Put feature-specific styles beside the feature component when the styles are not reusable.
- Put shared TypeScript contracts in `typescript/interface/` or `typescript/types/`.

## Component Folder Pattern

Use this pattern for a reusable feature component:

```text
components/
  FeatureName/
    FeatureName.tsx
    FeatureName.styles.ts        Optional, when styles are large enough to split out
    FeatureName.types.ts         Optional, when types are shared or complex
    index.ts                     Optional, for clean exports
```

For small components, a single typed `FeatureName.tsx` file is acceptable.

## Example Reference Component

The `components/examples/` folder contains reference-only components that AI and developers can use
as examples for project conventions.

```text
components/examples/
  ExampleFeatureCard.tsx
  ExampleFeatureCard.styles.ts
  ExampleFeatureCard.types.ts
```

Use these examples to copy patterns, not product content. Real feature work should still live in the
correct domain folder.

## Naming Rules

- Use `PascalCase` for React component files and component names.
- Use `camelCase` for functions, variables, and local constants.
- Use `kebab-case` only when required by assets, external files, or route names.
- Keep folder names consistent with existing project naming.
- Do not rename existing folders such as `json/assest` unless the migration is explicitly requested.

## Import Rules

- Prefer the `@/` alias for project-root imports.
- Use common UI wrappers from `ui/` before raw MUI components when a wrapper exists.
- Use `next/image` for images.
- Keep image paths centralized in `json/assest/index.ts`.
- Avoid importing from deep implementation paths when a folder-level `index.ts` exists.

## When To Create Shared Code

Create shared components or utilities when:

- The same visual pattern appears in more than one feature.
- The component has a stable, typed API.
- Theme-aware behavior should be consistent across the app.
- The abstraction removes meaningful duplication.

Keep code local when:

- It is specific to one route or feature.
- The pattern is still experimental.
- Sharing it would create unclear props or hidden dependencies.
