import React from 'react';
function InputEnterRef({ type, onKeyDown, placeholder }, ref) {
    return
    <input ref={ref} type={type} onKeyDown={onKeyDown} placeholder={placeholder} />
}
const forwardInput = React.forwardRef(InputEnterRef)

export default forwardInput