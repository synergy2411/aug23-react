import React from "react";
import WithCounter from "../Hoc/WithCounter";

function CounterOne(props) {
  return (
    <>
      <h1>Counter One</h1>
      <button
        style={{ padding: "0 20px", backgroundColor: "goldenrod" }}
        onClick={props.increaseCounter}
      >
        {props.counter}
      </button>
    </>
  );
}

const nestedFn = WithCounter(CounterOne);

export default nestedFn(101);
