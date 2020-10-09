# GrapesJS

This field inserts a json object into your schema based on the `Text` field type implementation, and provides Webpage(html and css) editor in the Admin UI using [GrapesJS](https://grapesjs.com/) and React-Codemirror2 (https://github.com/scniro/react-codemirror2)

## Usage

This package isn't included with the keystone fields package and needs to be installed with `yarn add keystonejs-grapesjs-editor` or `npm install keystonejs-grapesjs-editor`

Then import it, and use it like any other field:

```js
const GrapesJSEditor = require('keystonejs-grapesjs-editor');

... 

fields: {
    content: {
        type: GrapesJSEditor, adminConfig: {
            "filePath": "uploads", // Public path for uploaded files(media) to be accessed by editor
            "css": [ // List of css files which need to be loaded on editor to show pages compatible with other pages
                '/css/bootstrap.min.css',
                '/css/style.css',
            "staticFolderUrl": "/uploads/", // Static path for uploaded files(media) to be accessed by editor
            "apiUrl": "/media" // API url to upload media files by editor asset manager
        }
    },
}

```

Here is demo after integration

![KeystoneJS GrapesJS Editor](/static/keystonejs-grapesjs-integration.gif)