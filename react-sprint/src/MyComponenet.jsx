import React, {useState} from 'react';

export default function MyComponent(){

    let [count, changeCounter] = useState(0);

    const increaseCount = () => {
        changeCounter(count + 1);
    }

    const resetCount = () => {
        changeCounter(count = 0);
    }

    const decreaseCount = () => {
        changeCounter(count - 1);
    }

    return(<>
        <div>
            <h2>{count}</h2><br></br>
            <button onClick={increaseCount}>Increment</button>
            <button onClick={resetCount}>reset</button>
            <button onClick={decreaseCount}>Decrement</button>
        </div>
    </>);

}