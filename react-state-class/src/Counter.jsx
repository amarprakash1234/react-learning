import { useState } from "react";

function init() {
    console.log("init was executed!");
    return Math.floor(Math.random()*10) + 1;
}

export default function Counter() {
    let [count, setCount] = useState(init); // ye line pr initialization ho rha h so, re-render me esko chhorkr sara code execute hota hai.
    console.log("Component is rendered!");

    let incCount = () => {
        setCount((currCount) => {
            return currCount + 1;
        });
        setCount((currCount) => {
            return currCount + 1;
        });

        // setCount(25);
    };

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )
}