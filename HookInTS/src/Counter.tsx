import { ChangeEvent, ReactNode, useReducer } from "react"


//initial state
const initialState = {
    count:0,
    text:''
}
//AN enum is a TypeScript feature that defines a set of named constants, giving them readable name while assigning them values.
const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
    NEW_INPUT,
}

type ReducerAction = {
    type:REDUCER_ACTION_TYPE,
    payload?:string,
}
const reducer = (state: typeof initialState, action:ReducerAction):typeof initialState =>{
    switch (action.type) {

        case REDUCER_ACTION_TYPE.INCREMENT:
            return {...state, count:state.count+1}
        case REDUCER_ACTION_TYPE.DECREMENT:
            return {...state, count:state.count-1}
        case REDUCER_ACTION_TYPE.NEW_INPUT:
            return {...state, text:action.payload??" "}

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
        const handleTextInput = (e:ChangeEvent<HTMLInputElement>)=>{
            dispatch({
                type:REDUCER_ACTION_TYPE.NEW_INPUT, payload:e.target.value
            })
        }
        return (
            <div>

                <h1>
                    {children(state.count)}
                </h1>

                <button onClick={increment}>+</button>
                <button onClick={decrement}>_</button>
                <input type="text" onChange={handleTextInput} />
                <h2>{state.text}</h2>
            </div>
        )
        }

export default Counter