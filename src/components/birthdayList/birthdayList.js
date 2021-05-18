import React, { useState } from 'react';
import Data from './data';
import List from './list';
import './index.css';

const BirthdayList = () => {

    //props

    //state
    const [people, setPeople] = useState(Data);

    //function
    const clearList = () => {
        setPeople([]);
    }

    //style

    //execution
    return (
        <>
            <div className="container">
                <h4>{people.length} Birthdays today</h4>
                <List people={people} />
                <button onClick={clearList}>Clear</button>
            </div>
        </>
    );
}

export default BirthdayList;