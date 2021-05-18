import React, { useState } from 'react';

const Counter = (props) => {

    //props
    const limitValue = props.limitValue;

    //state
    const [currentState, setState] = useState(0);

    //function
    const increment = () => {
        setState(currentState + limitValue);
    }

    //style

    return (
        <>
            <div>
                <button onClick={increment}>{currentState}</button>
            </div>
        </>
    );
}

export default Counter;