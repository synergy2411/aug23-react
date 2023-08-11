import React from "react";
import WithCounter from "../Hoc/WithCounter";

function CounterTwo(props) {
  return (
    <>
      <h1>Counter Two</h1>
      <button
        style={{ padding: "0 20px", backgroundColor: "grey" }}
        onClick={props.increaseCounter}
      >
        {props.counter}
      </button>
    </>
  );
}

// const nestedFn = WithCounter(CounterTwo);

// export default nestedFn(250);

export default WithCounter(CounterTwo)(301);

// connect(mapStateToProps, mapDispatchToProps)(Counter)
