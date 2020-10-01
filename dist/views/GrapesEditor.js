import 'grapesjs/dist/css/grapes.min.css';
import { Editor } from 'grapesjs-react';
import React, { useEffect, useState, useRef } from 'react';
import './static/editor.css';
import { v4 as uuidv4 } from 'uuid';
import CodeEditor from './CodeEditor';
const UUID = uuidv4();
export default function GrapeJsEditor(props) {
  const editorRef = useRef();
  const storageManager = {
    id: UUID + "_",
    type: 'local',
    autosave: true,
    autoload: false,
    stepsBeforeSave: 1
  };
  const [landingPage, setLandingPage] = useState({
    html: `<div></div>`,
    css: '',
    components: null,
    styles: null,
    assets: null
  });
  const [isShowingCodeEditor, setIsShowingCodeEditor] = useState(false); // Whenever editor initailised similar to editor.init()

  function initialiseEditor(editor) {
    editor.setComponents(landingPage.html);
    editor.setStyle(landingPage.css); // canvas config for additional external CSS

    if (props.config.css && props.config.css.length > 0) {
      let head = editor.Canvas.getDocument().head;
      let externalStyles = '';
      props.config.css.forEach(style => {
        externalStyles += `<link rel="stylesheet" href="${style}"/>`;
      });
      head.insertAdjacentHTML('beforeend', externalStyles);
    } // Config for Asset manager


    if (props.config.staticFolderUrl) {
      let assetConfig = editor.AssetManager.getConfig();
      assetConfig.upload = props.config.apiUrl;
      assetConfig.uploadName = 'files';
      assetConfig.stylePrefix = "am-";

      assetConfig.uploadFile = function (e) {
        var files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
        var formData = new FormData();

        for (var i in files) {
          formData.append('file', files[i]);
        }

        fetch(props.config.apiUrl, {
          method: 'POST',
          body: formData
        }).then(async res => {
          let files = await res.json();
          files = files.map(item => props.config.staticFolderUrl + item.filename);
          editor.AssetManager.add(files);
        }).catch(err => {
          console.log(err);
        });
      };

      editor.AssetManager.init(assetConfig);
    }
  }

  useEffect(() => {
    // This effect is whenever value changes.
    const value = props.value;

    if (value && Object.keys(value).length > 0) {
      setLandingPage(state => {
        let newLandingPage = state;
        newLandingPage.html = value["html"];
        newLandingPage.css = value['css'];
        newLandingPage.assets = JSON.parse(value["assets"]);
        newLandingPage.styles = JSON.parse(value["styles"]);
        newLandingPage.components = JSON.parse(value["components"]);
        return { ...newLandingPage
        };
      });
    }
  }, [props.value]); // Handle changes

  function handleChanges() {
    const myJson = {};
    let re = new RegExp(UUID, 'g');
    setJsonFromLocalStorage(myJson, re);
    props.onChange(myJson);
    props.closeEditor();
  } // Convert local stroage to JSON


  const setJsonFromLocalStorage = (myJson, re) => {
    for (const item of Object.keys(localStorage)) {
      if (item.match(re)) {
        myJson[item.split("_")[1]] = localStorage.getItem(item);
        localStorage.removeItem(item);
      }
    }
  }; // for showing show editor


  function showCodeEditor() {
    setIsShowingCodeEditor(true);
  } // for closing code editor


  function closeCodeEditor() {
    setIsShowingCodeEditor(false);
  } // update landing page whenever the code editor edits code


  function updateLandingPageCss(css) {
    setLandingPage(state => {
      state['styles'] = {
        pStylePrefix: "gjs-",
        em: ""
      };
      state['css'] = css;
      return { ...state
      };
    });
  } // update landing page whenever the code editor edits code


  function updateLandingPageHtml(html) {
    setLandingPage(state => {
      state['html'] = html;
      return { ...state
      };
    });
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "header"
  }, !isShowingCodeEditor ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    class: "btn",
    style: {
      float: "left"
    },
    onClick: props.closeEditor
  }, " ", /*#__PURE__*/React.createElement("i", {
    className: "fa fa-times"
  }), " "), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn",
    onClick: handleChanges
  }, " ", /*#__PURE__*/React.createElement("i", {
    className: "fa fa-save"
  }), " Save"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn",
    onClick: showCodeEditor
  }, " ", /*#__PURE__*/React.createElement("i", {
    className: "fa fa-code"
  }), " Code Editor  ")) : /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn",
    onClick: closeCodeEditor
  }, " ", /*#__PURE__*/React.createElement("i", {
    className: "fa fa-times"
  }), " Close Code Editor")), !isShowingCodeEditor ? /*#__PURE__*/React.createElement(Editor, {
    ref: editorRef,
    onInit: initialiseEditor,
    id: "gjs",
    presetType: "webpage",
    storageManager: storageManager,
    components: landingPage.components || landingPage.html,
    styleManager: landingPage.styles || landingPage.css // assetsManager={assetsManager}

  }) : /*#__PURE__*/React.createElement(CodeEditor, {
    updateLandingPageHtml: updateLandingPageHtml,
    updateLandingPageCss: updateLandingPageCss,
    uuid: UUID
  }));
}