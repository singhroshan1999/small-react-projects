import React from 'react';
import Div from './Div';
import Button from './button';

// STARTING WITH STATE LESS

const keypad = (props) => {
    const keymap = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','=','AC','+/-','%','.'];
    return (
        <Div>
            
            <Button />
        </Div>
    )

}

export default keypad;