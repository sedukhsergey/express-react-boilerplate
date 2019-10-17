import React from 'react';

const Button = props => {
    console.log('props.color',props.color)
    return (
        <button onClick={props.callback} style={{
            backgroundColor: `${props.color}`
        }}>{ props.children }</button>
    )
}

export default Button;
