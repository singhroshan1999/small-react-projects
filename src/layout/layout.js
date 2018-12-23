import React from 'react';
import Div from './Div';

// STARTING WITH STATE LESS

const layout = (props) => {
    return (
        <Div>
            LAYOUT
            {props.children}
        </Div>
    )

}

export default layout;