## About

This is a NextJS + MUI v5 starter kit

## Make it work

1. Clone the project.
2. Run `npm i` or `yarn`.

## Setup TS
```js
yarn add -D typescript @types/react @types/node
```

```js
/* root folder */
$ touch tsconfig.json
```

## Setup Storybook

```js
yarn add -D @storybook/react @storybook/preset-typescript
```

```js
yarn add -D sass style-loader css-loader sass-loader @babel/core babel-loader babel-preset-react-app
```

```js
/* root folder */
mkdir .storybook
touch .storybook/main.js .storybook/next-preset.js .storybook/preview.js
```

## Setup SCSS

```js
/* root folder */
mkdir styles
touch styles/global.scss
```

```js
// preview.js
// Import global css here
import "../styles/global.scss";
```

```js
// main.js
const path = require("path");

module.exports = {
  stories: ["../components/**/*.stories.tsx"],
  addons: ["@storybook/preset-typescript"],
  // Add nextjs preset
  presets: [path.resolve(__dirname, "./next-preset.js")],
};
```

## Create a story

```js
/* root folder*/
mkdir components
touch components/Button.tsx components/Button.stories.tsx
```

```js
// button.tsx
import * as React from "react";

type Props = {
  text: string;
};

export default ({ text }: Props) => <button>{text}</button>;
```

```js
// button.stories.tsx
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module).add("with text", () => {
  return <Button text="Hello World" />;
});

storiesOf("Button", module).add("with emoji", () => {
  return <Button text="Label" />;
});
```

## Update package.json

```js
// add npm script to package.json to start storybook
"storybook": "start-storybook -p 6006 -c .storybook"
```

```js
// Happy coding
yarn storybook
```

## Setup Jest

```js
yarn add -D jest @types/jest ts-jest babel-jest @types/enzyme enzyme enzyme-adapter-react-16
```

```js
/* root folder */
mkdir config
touch config/setup.js
```

```js
// setup.js
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });
```

```js
touch jest.config.js
```

```js
module.exports = {
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/.storybook/**',
    '!**/tests/**',
    '!**/coverage/**',
    '!jest.config.js',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  setupFiles: ['<rootDir>/config/setup.js'],
  preset: 'ts-jest',
  testPathIgnorePatterns: ['/.next/', '/node_modules/', '/lib/', '/tests/', '/coverage/', '/.storybook/'],
  testRegex: '(/__test__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testURL: 'http://localhost',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  transform: {
    '.(ts|tsx)': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
```

## Config babel.config.json

```js
yarn add -D @babel/preset-env @babel/preset-react @babel/preset-flow @babel/plugin-transform-runtime babel-plugin-transform-es2015-modules-commonjs
```

```js
/* root folder */
touch babel.config.json
```

```js
{
  "presets": ["@babel/preset-env", "@babel/preset-react", "@babel/preset-flow"],
  "plugins": [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-modules-commonjs",
    "@babel/plugin-proposal-class-properties"
  ],
  "env": {
    "development": {
      "plugins": ["transform-es2015-modules-commonjs"]
    },
    "test": {
      "plugins": [
        "transform-es2015-modules-commonjs",
        "@babel/plugin-proposal-class-properties"
      ],
      "presets": ["@babel/preset-react"]
    }
  }
}
```

## Create a Jest test

```js
/* root folder */
mkdir components/__test__
touch components/__test__/index.test.tsx
```

```js
import React from "react";
import { mount } from "enzyme";
import Home from "../../pages/index";
describe("Pages", () => {
  describe("Home", () => {
    it("should render without throwing an error", function () {
      const wrap = mount(<Home />);
      expect(wrap.find("h1").text()).toBe("Welcome to My Next App!");
    });
  });
});
```

## Update package.json

```js
// package.json
{
  ...
  "scripts": {
    ...
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

```js
// Happy coding
yarn run test
```