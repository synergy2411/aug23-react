import React from "react";
import { useSelector } from "react-redux";
import CounterButtons from "./CounterButtons";
import CounterResult from "./CounterResult";

export default function Counter() {
  const count = useSelector((store) => store.ctr.counter);

  return (
    <>
      <p className="display-4">Counter : {count}</p>
      <br />
      <CounterButtons />
      <br />
      <CounterResult />
    </>
  );
}
