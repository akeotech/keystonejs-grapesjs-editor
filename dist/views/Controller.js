function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import FieldController from '@keystonejs/fields/Controller'; // import { parseDefaultValues } from '../util';

class EditorController extends FieldController {
  constructor(config, ...args) {
    super({ ...config
    }, ...args);

    _defineProperty(this, "serialize", data => {
      return data[this.path] ? JSON.stringify(data[this.path]) : null;
    });

    _defineProperty(this, "deserialize", data => {
      return data[this.path] ? JSON.parse(data[this.path]) : null;
    });

    _defineProperty(this, "getFilterTypes", () => []);
  }

}

export default EditorController;