# Setting up a Node.js Project with Eslint, Prettier, TypeScript and ts-node-dev

```bash
# create a folder for the source files
mkdir src
# create our entrypoint file
touch src/index.ts
# init package.json with defaults
npm init --yes
# install our tools
npm install \
  eslint \
  typescript ts-node-dev \
  prettier eslint-plugin-prettier eslint-config-prettier
  --save-dev
# create a tsconfig.json
npx tsc --init
# create a .eslintrc.js
npx eslint --init
```

`tsconfig.json` and `.eslintrc.js` need some editing.

- Adding `prettier` to `extends` and `plugins` in [`.eslintrc.js`](.eslintrc.js)
- Adding `src/` and `dist/` under `rootDir` and `outDir` in [`tsconfig.json`](tsconfig.json)


!Hint you can create files called `.eslintignore` and `.prettierignore` to configure ignore patterns.


Finally edit `package.json` and add these scripts for formatting, linting and running your code

```json
{
  // …
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "lint": "eslint \"./src/*\" --fix",
    "format": "prettier --write ./src/*",
    "build": "tsc",
    "dev": "ts-node --respawn --transpile-only src/index.ts",
    "start": "node dist/index.js"
  }
  // …
}
```

To make eslint format on save add this snippet to your VSCode `settings.json`. This can also be found under [./vscode-things/fabianmoronzirfas.settings.json](./vscode-things/fabianmoronzirfas.settings.json).

```json
{
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnSave": true
    },
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
      }
}
```
