import React from 'react';
import "./style.module.css";
function Center(props) {
    return(
        <div className="center">
            {props.children}
        </div>
    )
    
}

export default Center;