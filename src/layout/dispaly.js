import React from 'react';

// STARTING WITH STATE LESS

const display = (props) => {
    var show;
    if(props.disp.operator !== undefined) {
        show = props.disp.rvalue*Math.pow(10,-props.disp.rexp)
      }else if (props.disp.ans === undefined) {
        show = props.disp.lvalue*Math.pow(10,-props.disp.lexp)
      } else {
        show = props.disp.ans
      }
      
    return (
        <div className="display">
            {show}
        </div>
    )

}

export default display;