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
        return <span className="markerCircle" style={color}>&nbsp;</span>

    },
    SerialNo: (props) => {
        return <div className="serialNo col-1 d-flex flex-row-reverse">05</div>
    }
}

export default Element;