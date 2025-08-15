# NPM Scripts Reference

This document provides a detailed reference for all the scripts defined in `package.json`.

| Script      | Description                                       | Parameters | Example               | Troubleshooting                                                              |
|-------------|---------------------------------------------------|------------|-----------------------|------------------------------------------------------------------------------|
| `dev`       | Starts the development server with hot-reloading. | None       | `npm run dev`         | - **Port in use**: Ensure port 3000 is free or specify a different port.     |
| `build`     | Compiles the application for production.          | None       | `npm run build`       | - **Type errors**: Resolve any TypeScript errors before building.            |
| `start`     | Starts the production server (requires `build`).  | None       | `npm run start`       | - **Missing build**: Run `npm run build` before starting.                    |
| `lint`      | Runs the ESLint linter to check for code issues.  | None       | `npm run lint`        | - **Linting errors**: Fix the reported issues in your code.                  |
| `lint:fix`  | Runs ESLint and automatically fixes fixable issues. | None       | `npm run lint:fix`    | - **Persistent errors**: Some issues may require manual intervention.        |
