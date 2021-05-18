import React, { useState } from 'react';
import Button from './button';
import Display from './display';

const Counter = (props) => {

    //props

    //state
    const [currentState, setState] = useState(0);

    //function
    const increment = (val) => {
        setState(currentState + val);
    }

    //style

    return (
        <>
            <div>
                <Button incrementOnClick={increment} limitValue={2} />
                <Button incrementOnClick={increment} limitValue={4} />
                <Display message={currentState} />
            </div>
        </>
    );
}

export default Counter;