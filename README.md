# GrapesJS

This field inserts a json object into your schema based on the `Text` field type implementation, and provides Webpage(html and css) editor in the Admin UI using [GrapesJS](https://grapesjs.com/) and React-Codemirror2 (https://github.com/scniro/react-codemirror2)

## Usage

This package isn't included with the keystone fields package and needs to be installed with `yarn add @keystonejs/grapesjs-editor` or `npm install @keystonejs/grapesjs-editor`

Then import it, and use it like any other field:

```js
const { GrapesJS } = require('@keystonejs/grapesjs-editor');
```

