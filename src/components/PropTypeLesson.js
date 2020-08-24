import React, { Component } from 'react';
import PropTypes from 'prop-types'

const Test = (props) =>{
    return(
        <>
        <h1>{props.str}</h1>
        <h1>{(props.bool?'true':'false')}</h1>
        <p>{props.strOrNum} </p>
        <div>
                {
                    props.arr.map((val)=>
                    
                    <li key={val}>{val}</li>
                    
                    )
                }
            </div>
        <h1>{props.children}</h1>
        </>
    )

}

Test.ptopTypes = {
    str:PropTypes.string,
    bool:PropTypes.bool,
    strOrNum:PropTypes.oneOfType(PropTypes.string,PropTypes.number),
    arr:PropTypes.arrayOf(PropTypes.number),
    arrOfObj:PropTypes.arrayOf(PropTypes.shape(
        {
            name:PropTypes.string,
            age:PropTypes.number
        }
    )),
    children:PropTypes.element.isRequired
}
class PropTypeLesson extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Test str={'techsith'} 
                bool 
                strOrNum={10}
                arr={[1,2,3]}
                >children</Test>
            </div>
            
        );
    }
}

export default PropTypeLesson;