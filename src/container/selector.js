import React from 'react';
import Element from '../element';

const selector = (props) => {//use loop here
    const colors = {
        "yello":"#FFFF00",
        "brown":"#CC9933",
        "red":"#FF0000",
        "blue":"#6633FF",
        "indigo":"#993399",
        "green":"#009900"
    }
    
    return <div>
        <Element.SelectorCircle colors = {colors["blue"]} />
        <Element.SelectorCircle colors = {colors["brown"]}/>
        <Element.SelectorCircle colors = {colors["green"]}/>
        <Element.SelectorCircle colors = {colors["indigo"]}/>
        <Element.SelectorCircle colors = {colors["red"]}/>
        <Element.SelectorCircle colors = {colors["yello"]}/>
    </div>
}

export default selector;