import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { CounterProvider } from "./counterContext";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </StrictMode>,
  rootElement
);
