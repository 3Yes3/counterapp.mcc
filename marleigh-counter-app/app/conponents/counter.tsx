import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
   
   const incrementCounter = () => {
        setCount(count + 1);
   }
   const decrementCounter = () => {

        setCount(count - 1);
    
   }
   const Reset = () => {
      setCount(0)
   }

    return (
        <div>
            <h1 className="componentHeading">Counter</h1>
            <p className={count==100?"countLabel":""}>Count: {count}</p>
            <button className="fancybutton" onClick={() => incrementCounter()}>Increment</button>
            <button className="fancybutton" onClick={() => decrementCounter()}>Decrement</button>
            <button className="fancybutton" onClick={() => Reset()}>Reset</button>        
        </div>
    )
}

export default Counter;