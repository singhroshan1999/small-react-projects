import React from 'react';
import Element from '../element';

const selected = (props) => {//use loop here
    const colors = {
        "yello":"#FFFF00",
        "brown":"#CC9933",
        "red":"#FF0000",
        "blue":"#6633FF",
        "indigo":"#993399",
        "green":"#009900"
    };

    const markerColor = {
        "black" : "#000",
        "white" : "#fff",
        "grey" : "#999"
    };

    const circles = 
    <React.Fragment>
    <Element.SelectedCircle colors = {colors["yello"]} />
    <Element.SelectedCircle colors = {colors["red"]} />
    <Element.SelectedCircle colors = {colors["indigo"]} />
    <Element.SelectedCircle colors = {colors["green"]} />
    </React.Fragment>;

    const marker = 
    <div className="markerDiv">
    <Element.MarkerCircle colors = {markerColor["black"]} />
    <Element.MarkerCircle colors = {markerColor["white"]} />
    <Element.MarkerCircle colors = {markerColor["grey"]} />
    <Element.MarkerCircle colors = {markerColor["grey"]} />
    </div>;

    return <div className="row">
        <Element.SerialNo />
        <div className="col-4 d-flex flex-row-reverse">{circles}</div>
        <div className="col">{marker}</div>
        <div className="col-4"></div>
    </div>
}

export default selected;