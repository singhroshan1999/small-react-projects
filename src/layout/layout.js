import React from 'react';
import Div from './Div';

// STARTING WITH STATE LESS

const layout = (props) => {
    return (
        <Div>
            
            {props.children}
        </Div>
    )

}

export default layout;