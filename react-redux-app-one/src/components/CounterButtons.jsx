import React from "react";
import { useDispatch } from "react-redux";
import * as fromActions from "../store/actions/counter.action";

export default function CounterButtons() {
  const dispatch = useDispatch();

  return (
    <div className="btn-group">
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: fromActions.INCREMENT })}
      >
        Increase
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => dispatch({ type: fromActions.DECREMENT })}
      >
        Decrease
      </button>
      <button
        className="btn btn-dark"
        onClick={() => dispatch(fromActions.addCounter(10))}
      >
        Add (10)
      </button>
    </div>
  );
}
