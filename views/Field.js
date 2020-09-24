/** @jsx jsx */

import { jsx } from '@emotion/core';
import { useState } from 'react'
import { FieldContainer, FieldLabel } from '@arch-ui/fields';
import GrapeJsEditor from './GrapesEditor';


const InputCustomField = (props) => {

    const value = props.value;
    const field = props.field;
    const onChange = props.onChange;
    const errors = props.errors;
    const [isShowingEditor, setIsShowingEditor] = useState(false);

    function showEditor() {
        setIsShowingEditor(true);
    }

    function closeEditor() {
        setIsShowingEditor(false)
    }

    return (
        <div>
            <FieldContainer>
                <FieldLabel htmlFor={`ks-input-${field.path}`} field={field} errors={errors} />

                {isShowingEditor ?
                    <div style={{ position: "fixed", top: 0, right: 0, width: "100%", height: "100%", zIndex: 99 }}>
                        <GrapeJsEditor config={props.field.config} value={value} onChange={onChange} id={props.item?.id} closeEditor={closeEditor} />
                    </div>
                    :
                    <button type="button" onClick={showEditor} className="css-1ha7rw4-ButtonElementComponent btn" style={{ backgroundColor: "#463a3c"}}>
                        <div className="css-79elbk">
                            <img src={require('./static/grapesjs-logo-cl.png')} style={{height: "13px"}}></img>
                            <span className="css-t2nwix-LoadingButtonComponent" style={{color: "#fff" }}>&nbsp;Open GrapesJS Editor</span>
                        </div>
                    </button>}
            </FieldContainer>
        </div>
    )

};
export default InputCustomField;