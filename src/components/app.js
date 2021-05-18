import React from 'react';
import Counter from './counter/counter';

const App = () => {
    return (
        <main>
            <Counter limitValue={2} />
        </main>
    );
}

export default App;