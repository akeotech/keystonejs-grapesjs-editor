import React, { useState, useEffect } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import jsbeautifier from 'js-beautify'

const CodeEditor = (props) => {
  let htmlCode = jsbeautifier.html_beautify(localStorage.getItem(props.uuid + "_html"));

  let cssCode = localStorage.getItem(props.uuid + "_css").replace(/""/g, '');

  if (cssCode.match(/body/g).length > 1) {
    cssCode = cssCode.replace(/\*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}/g, "")
  }
  cssCode = jsbeautifier.css_beautify(cssCode);

  useEffect(() => {
    return () => {
      props.updateLandingPageHtml(htmlCode);
      props.updateLandingPageCss(cssCode);
    }
  }, [])

  return (
    <div className="editor-container">
      <div className="html-editor">
        <CodeMirror
          value={htmlCode}
          options={{
            mode: 'html',
            theme: 'material',
            lineNumbers: true
          }}
          onChange={(editor, data, value) => {
            htmlCode = value;
          }}
        />
      </div>
      <div className="css-editor">
        <CodeMirror
          value={cssCode}
          options={{
            mode: 'html',
            theme: 'material',
            lineNumbers: true
          }}
          onChange={(editor, data, value) => {
            console.log("Value", value)
            cssCode = value;
          }}
        />
      </div>
    </div>

  );
}

export default CodeEditor;
