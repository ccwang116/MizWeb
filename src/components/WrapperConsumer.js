import React from 'react';
const Context = React.createContext();
const consumer = Context.Consumer
const WrapperConsumer = wrappedcomponent => (props) => {
    return(
        <consumer>
            {(values)=>{
                return(
                    <wrappedcomponent {...props} localInfo={values}/>
                )
            }}
        </consumer>
    )
    }

export default WrapperConsumer;