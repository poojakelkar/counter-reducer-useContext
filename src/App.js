import "./styles.css";
import { useReducer, useState } from "react";

const items = [
  {
    id: 1,
    name: "kala chasma",
    price: 1000
  },
  {
    id: 2,
    name: "laal chhadi",
    price: 500
  },
  {
    id: 3,
    name: "jalebi",
    price: 50
  },
  {
    id: 4,
    name: "japani joota",
    price: 10000
  }
];

function reducerFun() {
  return (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cartItem: state.cartItem + 1,
          totalPrice: state.totalPrice + action.payload
        };
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cartItem: state.cartItem - 1,
          totalPrice: state.totalPrice - action.payload
        };
    }
  };
}
export default function App() {
  const [state, dispatch] = useReducer(reducerFun(), {
    cartItem: 0,
    totalPrice: 0
  });
  const { cartItem, totalPrice } = state;
  return (
    <div className="App">
      <h1>Cart</h1>
      <h2>Items:{cartItem}</h2>
      <h2>Total Price:{totalPrice}</h2>
      <div>
        {items.map(({ name, price }) => (
          <div>
            <h2>{name}</h2>
            <p>{price}</p>
            <button
              onClick={() => dispatch({ type: "ADD_TO_CART", payload: price })}
            >
              Add To Cart
            </button>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: price })
              }
            >
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
