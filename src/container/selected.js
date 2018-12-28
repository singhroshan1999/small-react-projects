import React from 'react';
import Element from '../element';

const selected = (props) => {//use loop here
    const circles = 
    <React.Fragment>
    <Element.SelectedCircle />
    <Element.SelectedCircle />
    <Element.SelectedCircle />
    <Element.SelectedCircle />
    </React.Fragment>;

    const marker = 
    <React.Fragment>
    <Element.MarkerCircle />
    <Element.MarkerCircle />
    <Element.MarkerCircle />
    <Element.MarkerCircle />
    </React.Fragment>;

    return <div>
        <Element.SerialNo />
        <div>{circles}</div>
        <div>{marker}</div>
    </div>
}

export default selected;