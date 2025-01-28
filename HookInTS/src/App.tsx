import { CountProvider, initialState, } from "./Context/CounterContext";

import Counter from "./Counter";

function App() {
  return (
      <CountProvider count={initialState.count} text={initialState.text}>
    <Counter>
      {(num) => (
        
        <span>
          Count is {num}
        </span>
      )}
    </Counter>
      </CountProvider>
  );
}

export default App;
