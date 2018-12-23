import React from 'react';
import Button from './button';

// STARTING WITH STATE LESS

const keypad = (props) => {
    const keymap = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','=','AC','+/-','%','.'];
    return (
        <div className="keypad">
            <div className="row">
            <Button clicked={props.clicked} classes="col keypad_operator" symbol={keymap[15]} />
            <Button clicked={props.clicked} classes="col keypad_operator" symbol={keymap[16]} />
            <Button clicked={props.clicked} classes="col keypad_operator" symbol={keymap[17]} />
            <Button  clicked={props.clicked} classes="col keypad_operator" symbol={keymap[13]} />
            </div>
            <div className="row">
            <Button clicked={props.clicked} classes="col keymap_number" symbol={keymap[7]} />
          <Button clicked={props.clicked}  classes="col keymap_number" symbol={keymap[8]} />
          <Button clicked={props.clicked}  classes="col keymap_number" symbol={keymap[9]} />
          <Button  clicked={props.clicked}  classes="col keypad_operator" symbol={keymap[12]} />
            </div>
            <div className="row">
            <Button clicked={props.clicked} classes="col keymap_number" symbol={keymap[4]} />
            <Button clicked={props.clicked} classes="col keymap_number" symbol={keymap[5]} />
            <Button clicked={props.clicked} classes="col keymap_number" symbol={keymap[6]} />
            <Button  clicked={props.clicked} classes="col keypad_operator" symbol={keymap[10]} />          
            </div>

            <div className="row">
            <Button clicked={props.clicked} classes="col keymap_number" symbol={keymap[1]} />
            <Button clicked={props.clicked} classes="col keymap_number" symbol={keymap[2]} />
            <Button clicked={props.clicked} classes="col keymap_number" symbol={keymap[3]} />
            <Button  clicked={props.clicked} classes="col keypad_operator" symbol={keymap[11]} />
            </div>
            <div className="row">
            <Button clicked={props.clicked} classes="col-6 keymap_number" symbol={keymap[0]} />
            <Button clicked={props.clicked} classes="col keymap_number" symbol={keymap[18]} />
            <Button clicked={props.clicked} classes="col keypad_equal" symbol={keymap[14]} />
            </div>
        </div>
    )

}

export default keypad;