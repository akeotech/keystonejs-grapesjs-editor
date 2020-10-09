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
                        <GrapeJsEditor config={props.field.config} value={value} onChange={onChange} id={props.item ? props.item.id : ''} closeEditor={closeEditor} />
                    </div>
                    :
                    <button type="button" onClick={showEditor} className="css-1ha7rw4-ButtonElementComponent btn" style={{ backgroundColor: "#463a3c" }}>
                        <div className="css-79elbk">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABXCAQAAAA5HQqeAAAEXElEQVR42u2bW2gUVxjHZ2OM9b7RoNFo1aKhBCWoiK0alGKteEMfiimRPEmRokQRDAWhaV9UaMF9UNFUH8LSKgGLNVR9UImiD0HFiJfGCxobbdooGjWa2OivD3Fx98zMN7O7M3P2Yb/H2XPO/nbOzPf/LmcNI02jjD/ooJUIw41MMz7kIG+JWTODMwluEDV0kWjVmQIXopz7mO1UZuDN4CzW1qgfbhS1vMHOvtcLl8dmnmJvd8jXibeUFiRrYKw+uGKOinAtLNMHF2Y73QLcE6oZoAsuh0raBbg31DFa370r45K4sY1M1wdXRF2ciJntLyoJ6YIbSDXPBbgutjNEn4itthSxmL3lV8br29gpnBGfuovM0+mK1/BCgGtnLTk68b4RXooeftQcjvK5EAI0UKw7RhnNwwwUsbg396SNiG2ifyYEoCstRWwfowKlmMi31HOB00RZlaDuNJnwrgYrYkwiyn8JBA9ZGPuwxCLwHBFo8vUDLy33cGPfgK0mlzIrQDxJt3opMwyDY8rlvYHBldKIbPfINWhVLs4JBG4ke+jF2ZYZyv73+u9YyGU9j3FnvxhqKOU73gKacW/NgQIygXoR5yrlSkTwODBABlFj6U7e61YVuYah1nsCAmQ5dx2Sr3e6pQGQjzkubmwTs+NGBwtIPhFFxBLtgZp8BQhIDpX8K8D1EGGoaVZQgMznsrixR/nIcl4QgI5ZdQtLbOf6DeiYVT+hmjxhvr+ArHRwJ7VOYbCvgNSIT905ZrpYwz9ASoXM8AFr3NVy/AT8zgaum23uazl+Av5kifc7k5NaxUfAr0xwN1ic9Co+AvZPcM1P2ZxK8OvvW1xIwzsRq021NOy/ox7LzHQKTZriwSxgFjALmAXMAmYB9QE+U3pxA7XiDVGywU6DO8o9XKQVcIVCc9PgN+XSYa2AakG63mCTqeE6XxveQlO6v95gvCkXa2OCFrxi/lFIXjLC6rZCOxXBNvwJUUGHiePnvg/nWGZj54PrlzCL85bd/Vi/i0M2hYoDFPoOV8gBm4Q/+n7QGNs6XidbpFJPmnB5bKHTthYxMn7oXHpsyxa3+NKnd/aa7Xe+ii8Lx+pS0gGoE5R4ClfCCfHgy2LrmmirMOk1O705fkc+O3ktfNNdPrGbOoxdYgetg3X0SwuuH+ss3El8K243w5yaBsfEKt91vkgZb4FD3fo0pe4WWm4KIVwVwMU1xzmfBkvOAVQpgZiLFoLtak5tsC5q+CCVWn1U/M1tbgSREBW0iafBohR5LULxbaxPxfn2R5q9Og1GiEr+Fu9AnbUgUkDEwSdUpecT4t3PDkFpLARRFLG+Z3iHgztJGnIyR8TNus0GphEmzFQ2cFsceyS5urV7yM+4Qrr2p30bzAvEXL4WlUA2hzaYV5AFLo+UqCK2h4LgQnQnQUxVxDyFdBLE1ETM44hYFsRURcxTyCIipr8O9dkLImmImKeQYcrZTxOP6KGbDprYTzlhL9b+H8nwt0qfng0+AAAAAElFTkSuQmCC" style={{ height: "13px" }}></img>
                            <span className="css-t2nwix-LoadingButtonComponent" style={{ color: "#fff" }}>&nbsp;Open GrapesJS Editor</span>
                        </div>
                    </button>}
            </FieldContainer>
        </div>
    )

};
export default InputCustomField;