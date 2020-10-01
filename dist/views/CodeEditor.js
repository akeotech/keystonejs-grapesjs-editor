import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import jsbeautifier from 'js-beautify';

const CodeEditor = props => {
  let htmlCode = jsbeautifier.html_beautify(localStorage.getItem(props.uuid + "_html"));
  let cssCode = localStorage.getItem(props.uuid + "_css").replace(/""/g, '');

  if (cssCode.match(/body/g).length > 1) {
    cssCode = cssCode.replace(/\*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}/g, "");
  }

  cssCode = jsbeautifier.css_beautify(cssCode);
  useEffect(() => {
    return () => {
      props.updateLandingPageHtml(htmlCode);
      props.updateLandingPageCss(cssCode);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "editor-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "html-editor"
  }, /*#__PURE__*/React.createElement(CodeMirror, {
    value: htmlCode,
    options: {
      mode: 'html',
      theme: 'material',
      lineNumbers: true
    },
    onChange: (editor, data, value) => {
      htmlCode = value;
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "css-editor"
  }, /*#__PURE__*/React.createElement(CodeMirror, {
    value: cssCode,
    options: {
      mode: 'html',
      theme: 'material',
      lineNumbers: true
    },
    onChange: (editor, data, value) => {
      console.log("Value", value);
      cssCode = value;
    }
  })));
};

export default CodeEditor;