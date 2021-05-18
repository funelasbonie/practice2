import React from 'react';

const Button = (props) => {

    //props
    const limitValue = props.limitValue;
    const incrementOnClick = props.incrementOnClick;

    //state  

    //function    
    const inc = () => {
        incrementOnClick(limitValue);
    }

    //style

    //execution
    return (
        <>
            <div>
                <button onClick={inc}>+{limitValue}</button>
            </div>
        </>
    );
}

export default Button;