import { ReactNode } from "react"

import { useCounter, useCounterText } from "./Context/CounterContext"


type childrenProp = {
    children:(num:number)=>ReactNode
}
        function Counter({children}:childrenProp) {
      
        const {count,increment,decrement} = useCounter()
        const {text , handleTextInput} =useCounterText() 
        return (
            <div>

                <h1>
                    {children(count)}
                </h1>

                <button onClick={increment}>+</button>
                <button onClick={decrement}>_</button>
                <input type="text" onChange={handleTextInput} />
                <h2>{text}</h2>
            </div>
        )
        }

export default Counter