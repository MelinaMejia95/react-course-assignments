import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>Hello</p>
            <p>This is the username: {props.userName}</p>
        </div>
    )
}

export default userOutput;