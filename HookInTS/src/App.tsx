import Counter from "./Counter";

function App() {
  return (
    <Counter>
      {(num) => (
        <span style={{ color: num % 2 === 0 ? "green" : "red" }}>
          Count is {num}
        </span>
      )}
    </Counter>
  );
}

export default App;
