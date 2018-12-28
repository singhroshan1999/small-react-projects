import React from 'react';
import Div from './Div';

// STARTING WITH STATE LESS

const button = (props) => {
    return (
        <Div>
            <button onClick = {()=>{props.clicked(props.symbol)}} className={props.classes}>{props.symbol}</button>
        </Div>
    )

}

export default button;