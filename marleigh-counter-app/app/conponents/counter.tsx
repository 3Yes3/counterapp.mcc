import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
   
   const incrementCounter = () => {
        setCount(count + 1);
   }
   
    return (
        <div>
            <h1 className="componentHeading">Counter</h1>
            <p className="countLabel">Count: {count}</p>
            <button className="fancybutton" onClick={() => incrementCounter()}>Increment</button>
            <button className="fancybutton" onClick={() => decrementCounter()}>Decrement</button>
            <button className="fancybutton">Reset</button>        
        </div>
    )
}

export default Counter;