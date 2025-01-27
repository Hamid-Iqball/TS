import { ReactNode, useReducer } from "react"



const initialState = {count:0}
//AN enum is a TypeScript feature that defines a set of named constants, giving them readable name while assigning them values.
const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
}

type ReducerAction = {
    type:REDUCER_ACTION_TYPE
}
const reducer = (state: typeof initialState, action:ReducerAction):typeof initialState =>{
    switch (action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT:
            return {...state, count:state.count+1}
    
        case REDUCER_ACTION_TYPE.DECREMENT:
            return {...state, count:state.count-1}
        default:
        throw new Error()
    }
}

type childrenProp = {
    children:(num:number)=>ReactNode
}
function Counter({children}:childrenProp) {
    const [state,dispatch] = useReducer(reducer,initialState)

const increment = ()=>dispatch({type:REDUCER_ACTION_TYPE.INCREMENT})
const decrement = ()=>dispatch({type:REDUCER_ACTION_TYPE.DECREMENT})

  return (
    <div>

        <h1>
            {children(state.count)}
        </h1>

        <button onClick={increment}>+</button>
        <button onClick={decrement}>_</button>
    </div>
  )
}

export default Counter