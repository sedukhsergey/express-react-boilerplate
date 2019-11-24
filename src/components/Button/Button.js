import React from 'react';

const Button = props => {
    return (
        <button onClick={props.callback} style={{
            backgroundColor: `${props.color}`
        }}>{ props.children }</button>
    )
}

export default Button;
