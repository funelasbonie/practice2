import React from 'react';

const Button = (props) => {

    //props
    const limitValue = props.limitValue;

    const incrementOnClick = props.incrementOnClick;

    //state  

    //function    
    const increment = () => {
        incrementOnClick(limitValue);
    }

    //style

    return (
        <>
            <div>
                <button onClick={increment}>+{limitValue}</button>
            </div>
        </>
    );
}

export default Button;