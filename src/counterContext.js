import { createContext, useContext, useReducer } from "react";
import { reducer } from "./counterReducer";

const CounterContext = createContext(null);

const useCounter = () => useContext(CounterContext);

const CounterProvider = ({ children }) => {
  const [state, dispatcher] = useReducer(reducer, { count: 0 });
  return (
    <CounterContext.Provider value={{ state, dispatcher }}>
      {children}
    </CounterContext.Provider>
  );
};

export { useCounter, CounterProvider };
