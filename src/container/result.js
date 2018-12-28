import React from 'react';
import Element from '../element';


const Reault = (props) => {
    const colors = {
        0:"#FFFF00",
        1:"#CC9933",
        2:"#FF0000",
        3:"#6633FF",
        4:"#993399",
        5:"#009900"
    };
    const pat = props.pattern;
    // const key = ['yello']
    const circles = 
    <React.Fragment>
    <Element.SelectedCircle colors = {colors[pat[0]]} />
    <Element.SelectedCircle colors = {colors[pat[1]]} />
    <Element.SelectedCircle colors = {colors[pat[2]]} />
    <Element.SelectedCircle colors = {colors[pat[3]]} />
    </React.Fragment>;
    return (
        <div className="">
                <div className="col-4 d-flex flex-row-reverse">{circles}</div>

        </div>
    )
}

export default Reault;