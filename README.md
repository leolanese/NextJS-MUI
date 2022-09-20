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
  return <Button text="😀 😎 👍 💯" />;
});
```

## Update package.json

```js
// add npm script to package.json to start storybook
"storybook": "start-storybook -p 6006 -c .storybook"
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

