## File Organization

- Keep one main component per file.
- Keep helper functions below the component unless they are reused elsewhere.
- Move reusable helpers into `lib/functions/`.
- Move reusable constants into `config/` or a feature-level constants file.
- Avoid barrel exports unless the folder is intentionally used as a public module.

## Imports

- Order imports from external packages first, then `@/` imports, then relative imports.
- Avoid unused imports and commented-out imports.
- Prefer `@/` alias for project imports.
- Avoid deep imports from a component's internal files unless needed.

## Naming

- Use clear component names that describe the UI purpose.
- Use event handler names like `handleSubmit`, `handleClose`, `handleChange`.
- Use boolean names starting with `is`, `has`, `can`, or `should`.
- Avoid vague names like `data`, `item`, `temp`, or `test` when a more specific name is available.

## Logic

- Keep render logic readable; extract complex conditional rendering into small variables.
- Avoid nested ternaries in JSX.
- Avoid duplicating validation, formatting, or mapping logic.
- Keep side effects inside hooks and avoid running side effects during render.

## Forms

- Keep form field names consistent with API or mock data keys.
- Put validation messages in shared message files when reused.
- Disable submit buttons while submitting.
- Show clear loading and error states for async form actions.

## Comments

- Do not add comments for obvious code.
- Add short comments only for business rules, edge cases, or non-obvious decisions.
- Remove stale TODOs when completing related work.

## Quality

- Do not leave `console.log`, debugger statements, or dead code.
- Keep files small enough to review comfortably.
- Prefer explicit returns for complex helper functions.
