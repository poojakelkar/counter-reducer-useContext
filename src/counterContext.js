import { createContext, useContext, useReducer } from "react";

const CounterContext = createContext();

const useCounter = () => useContext(CounterContext);

const CounterProvider = ({ children }) => {
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + action.payload };
      case "decrement":
        return { count: state.count + action.payload };
    }
  }
  const [state, dispatcher] = useReducer(reducer, { count: 0 });
  return (
    <CounterContext.Provider value={{ state, dispatcher }}>
      {children}
    </CounterContext.Provider>
  );
};
export { useCounter, CounterProvider };
