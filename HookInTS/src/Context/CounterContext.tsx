/* eslint-disable react-refresh/only-export-components */
import {  createContext, useReducer, ReactElement, useCallback, useContext, ChangeEvent } from 'react';

type StateType = {
    count: number;
    text: string;
};

//1
export const initialState: StateType = {
    count: 0,
    text: '',
};


// Enum defines a set of named constants
const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
    NEW_INPUT,
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE;
    payload?: string;
};

//2
const reducer = (state: StateType, action: ReducerAction): StateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT:
            return { ...state, count: state.count + 1 };
        case REDUCER_ACTION_TYPE.DECREMENT:
            return { ...state, count: state.count - 1 };
        case REDUCER_ACTION_TYPE.NEW_INPUT:
            return { ...state, text: action.payload ?? '' };
        default:
            throw new Error('Unhandled action type');
    }
};

const useCounterContext = (initialState: StateType) => {
    const [state, dispatch] = useReducer(reducer, initialState); // 4 useReducer Hook

    const increment = useCallback(() => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT }), []);
    const decrement = useCallback(() => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT }), []);
    const handleTextInput = useCallback((text: string) => {
        dispatch({
            type: REDUCER_ACTION_TYPE.NEW_INPUT,
            payload: text,
        });
    }, []);

    return { state, increment, decrement, handleTextInput };
};

type UserCounterContextType = ReturnType<typeof useCounterContext>;

const initialContextState: UserCounterContextType = {
    state: initialState,
    increment: () => {},
    decrement: () => {},
    handleTextInput: () => {},
};

export const CounterContext = createContext<UserCounterContextType>(initialContextState);

type ChildrenType = {
    children?: ReactElement | undefined;
};

export const CountProvider = ({
    children,
    ...initialState
}: ChildrenType & StateType): ReactElement => {
    return (
        <CounterContext.Provider value={useCounterContext(initialState)}>
            {children}
        </CounterContext.Provider>
    );
};


type UseCounterHookType ={
    count:number,
    increment: () => void,
    decrement: () => void,
}


export const useCounter = ():UseCounterHookType =>{
    const {state:{count}, increment,decrement} = useContext(CounterContext)

    return {count,increment,decrement}
}


type useCounterTextType = {
    text:string,
    handleTextInput: (e:ChangeEvent<HTMLInputElement>) =>void

}

export const useCounterText = (): useCounterTextType => {
    const { state: { text }, handleTextInput } = useContext(CounterContext);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        handleTextInput(e.target.value); // Extracting the value from the event
    };

    return { text, handleTextInput: handleInputChange };
};
