import "./styles.css";

import { useCounter } from "./counterContext";
export default function App() {
  const { state, dispatcher } = useCounter();
  return (
    <div className="App">
      <h1>Counter: {state.count} </h1>
      <button onClick={() => dispatcher({ type: "increment", payload: 42 })}>
        +
      </button>
      <button onClick={() => dispatcher({ type: "decrement", payload: 10 })}>
        -
      </button>
    </div>
  );
}
