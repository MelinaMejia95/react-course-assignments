import React from 'react';

const validation = (props) => {

    let condition = null;

    if(props.length <= 5) {
        condition = (
            <h2>Text is too short</h2>
        );
    } else {
        condition = (
            <h2>Text long enough</h2>
        );
    }

    return (
        <div>
            {condition}
        </div>

    );

    //Another way to do it
    /* return (
        <div>
            {
                props.length > 5 ? 
                    <p>Text long enough</p> :
                    <p>Text too short</p>
            }
        </div>
    ); */
}

export default validation;