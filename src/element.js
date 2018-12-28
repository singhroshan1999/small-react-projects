import React from 'react';

const Element = {
    SelectorCircle: (props) => {
        const color = {backgroundColor:props.colors};
        return <div className="selectorCircle" style={color}>&nbsp;</div>
    },
    SelectedCircle: (props) => {
        const color = {backgroundColor:props.colors};
        return <div className="selectedCircle" style={color}>&nbsp;</div>
    },
    MarkerCircle:(props) => {
        const color = {backgroundColor:props.colors};
        return <div className="markerCircle" style={color}>&nbsp;</div>

    },
    SerialNo: (props) => {
        return <div className="serialNo">05</div>
    }
}

export default Element;