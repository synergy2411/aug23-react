import React, { useReducer } from "react";

const initialState = {
  counter: 0,
  result: [],
};

function reducer(state, action) {
  if (action.type === "INCREMENT") {
    // state.counter++;             // NEVER CHANGE THE STATE MUTABLY

    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  } else if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.payload,
    };
  } else if (action.type === "STORE_RESULT") {
    return {
      ...state,
      result: [state.counter, ...state.result],
    };
  } else if (action.type === "DELETE_RESULT") {
    const filteredResult = state.result.filter((r, i) => i !== action.payload);
    return {
      ...state,
      result: filteredResult,
    };
  }
  return state;
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <h3>Counter : {state.counter}</h3>
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="btn btn-primary"
      >
        Increase
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        className="btn btn-secondary"
      >
        Decrease
      </button>
      <button
        onClick={() => dispatch({ type: "ADD_COUNTER", payload: 10 })}
        className="btn btn-dark"
      >
        Add - 10
      </button>
      <br />
      <button
        className="btn btn-warning"
        onClick={() => dispatch({ type: "STORE_RESULT" })}
      >
        STORE RESULT
      </button>

      <hr />

      <ul>
        {state.result.map((r, i) => (
          <li
            key={i}
            onClick={() => dispatch({ type: "DELETE_RESULT", payload: i })}
          >
            {r}
          </li>
        ))}
      </ul>
    </div>
  );
}
