import React, { useEffect, useRef } from 'react';
import InputEnter from "./InputEnterRef"
function EnterForm() {
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const submitRef = useRef(null);

    useEffect(() => {
        // alert('load!')
        firstNameRef.current.focus();
    }, [])

    function firstKeyDown(e) {
        if (e.key === "Enter") {
            lastNameRef.current.focus();
        }
    }
    return (
        <div className="">
            <header>
                <InputEnter type="text" onKeyDown={firstKeyDown} ref={firstNameRef} name="" value="" placeholder="enter first name" />
                <InputEnter type="text" ref={lastNameRef} name="" value="" placeholder="enter last name" />
                <button type="submit"></button>
            </header>
        </div>
    )
}

export default EnterForm;