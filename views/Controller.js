import FieldController from '@keystonejs/fields/Controller';
// import { parseDefaultValues } from '../util';


class EditorController extends FieldController {

  constructor(config, ...args) {
    super({ ...config }, ...args);
  }
  serialize = data => {
    return data[this.path] ? JSON.stringify(data[this.path]) : null
  };
  deserialize = data => {
    return data[this.path] ? JSON.parse(data[this.path]) : null;
  };

  getFilterTypes = () => [];
}

export default EditorController;