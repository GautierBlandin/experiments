# Repo starter notes

## Project initialization

- Always use Nx to initialize a new project

## Code style

- Use Prettier. See attached `.prettierrc` file. Recommended .prettierrc configuration:

```json
{
  "printWidth": 120,
  "endingPosition": "absolute",
  "singleQuote": true,
  "plugins": ["prettier-plugin-tailwindcss", "prettier-plugin-classnames"]
}
```
- Use ESLint. Recommended overrides:

```json
{
  "rules": {
    "@typescript-eslint/no-use-before-define": "off"
  }
}
```

- See `style.md` for code style guidelines

## IDE 
- Enable `run eslint --fix on save`
- Enable `run prettier on save`
- Enable `use types from the server` for TypeScript

## Frontend 

### State management

- Use Zustand or Valtio for reactive state management
- Use Tanstack Query for data fetching and server synchronization

## Backend

- Use NestJS as a framework

## Testing

- Prefer Vitest over Jest

## Deployment

### CI

- Use GitHub Actions for CI

### IaC

- Use Pulumi for IaC
