import React, { useState } from 'react';

const App = () => {
    let currTime = new Date().toLocaleTimeString();
    const state = useState();

    const [Time, setTime] = useState(currTime);

    const UpdatedTime = () => {
        currTime = new Date().toLocaleTimeString();
        setTime ( currTime );
    }
    return (
        <>
            <h1>{Time}</h1>
            <button onClick={UpdatedTime}>Get Time</button>
        </>
    );
}

export default App;
