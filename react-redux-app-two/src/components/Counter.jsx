import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/slices/counter.slice";

export default function Counter() {
  const counter = useSelector((store) => store.ctr.counter);

  const dispatch = useDispatch();

  return (
    <>
      <p className="display-4">Counter : {counter}</p>
      <div className="btn-group">
        <button
          className="btn btn-primary"
          onClick={() => dispatch(increment())}
        >
          +1
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => dispatch(decrement())}
        >
          -1
        </button>
      </div>
    </>
  );
}
