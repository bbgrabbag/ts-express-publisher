# TS Express Middleware Template

## Boilerplate project for developing and testing Express.js features/middleware. Includes built-in unit testing with Jest, a playground development server with Express.js, and VS Code debug configurations.
---

### Get Started

 Write any library/exportable code within `/src` folder. Make sure you export from `/src/index.ts` file specifically.

You can try different implementations using the bare-bones express.js server in `/playground` folder. Simply import code from `/src/index.ts` and run `npm run playground:serve` to start development server and watch changes.

#### Test
Write unit tests within `/src` folder using the following file naming convention: `<file>.spec.ts`. Run tests with `npm t`.

#### Debug
Configuration for debugger for VS Code lives in `/.vscode/launch.json` file. Includes two configurations out-of-the-box, one for debugging unit tests, and one for debugging playground development server.

#### Publish
Easily publish library out-of-the-box with `npm publish`.

---
### Scripts
- `npm run dev:build` 
    - generate typescript compiled code from `tsconfig.json` file.
- `npm run playground:serve`
    - run local express server for testing implementations of npm package.
- `npm t`
    - Run unit tests with `jest` (customize jest configuration in `jest.config.ts`).
- `npm run prod:build`
    - generate typescript compiled code from `/typescript/tsconfig.prod.json` file. Use this if you want to only see the ouput of production compiled code.
- `npm run build`
    - runs the same compilation process as `prod:build` but will trigger `prebuild` scripts, which will run all unit tests and delete previous built files.
