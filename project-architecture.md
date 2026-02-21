# Project Architecture

This document describes the folder and file structure of the project.

## Root Directory
- `README.md`: Project overview and instructions.
- `fun-facts/`: Main application folder.

## fun-facts/
- `eslint.config.js`: ESLint configuration.
- `index.html`: Main HTML file.
- `package.json`: Project dependencies and scripts.
- `README.md`: App-specific documentation.
- `tsconfig.app.json`: TypeScript config for app.
- `tsconfig.json`: Base TypeScript config.
- `tsconfig.node.json`: TypeScript config for Node.
- `vite.config.ts`: Vite configuration.

### public/
- Static assets for the app.

### src/
- `App.css`: App styles.
- `App.tsx`: Main React component.
- `index.css`: Global styles.
- `main.tsx`: App entry point.
- `assets/`: Images and other static resources.

---

This structure supports a modern React + TypeScript + Vite workflow, with clear separation of configuration, source code, and static assets.