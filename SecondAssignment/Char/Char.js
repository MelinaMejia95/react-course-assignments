import React from 'react';

const char = (props) => {

    const style = {
        display: 'inline-block', 
        padding: '16px', 
        textAlign: 'center',
        margin: '16px', 
        border: '1px solid black',
        borderRadius: '2px',
        background: 'rgb(145, 212, 243)'
    }

    return (
        <div style={style} onClick={props.click}>{props.char}</div>
    );

}

export default char;