/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { FieldContainer, FieldLabel } from '@arch-ui/fields';
import GrapeJsEditor from './GrapesEditor';

const InputCustomField = props => {
  const value = props.value;
  const field = props.field;
  const onChange = props.onChange;
  const errors = props.errors;
  const [isShowingEditor, setIsShowingEditor] = useState(false);

  function showEditor() {
    setIsShowingEditor(true);
  }

  function closeEditor() {
    setIsShowingEditor(false);
  }

  return jsx("div", null, jsx(FieldContainer, null, jsx(FieldLabel, {
    htmlFor: `ks-input-${field.path}`,
    field: field,
    errors: errors
  }), isShowingEditor ? jsx("div", {
    style: {
      position: "fixed",
      top: 0,
      right: 0,
      width: "100%",
      height: "100%",
      zIndex: 99
    }
  }, jsx(GrapeJsEditor, {
    config: props.field.config,
    value: value,
    onChange: onChange,
    id: props.item ? props.item.id : '',
    closeEditor: closeEditor
  })) : jsx("button", {
    type: "button",
    onClick: showEditor,
    className: "css-1ha7rw4-ButtonElementComponent btn",
    style: {
      backgroundColor: "#463a3c"
    }
  }, jsx("div", {
    className: "css-79elbk"
  }, jsx("img", {
    src: require('./static/grapesjs-logo-cl.png'),
    style: {
      height: "13px"
    }
  }), jsx("span", {
    className: "css-t2nwix-LoadingButtonComponent",
    style: {
      color: "#fff"
    }
  }, "\xA0Open GrapesJS Editor")))));
};

export default InputCustomField;