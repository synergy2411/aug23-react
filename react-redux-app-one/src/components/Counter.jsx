import React from "react";
import { useSelector } from "react-redux";
import CounterButtons from "./CounterButtons";

export default function Counter() {
  const count = useSelector((store) => store.counter);

  return (
    <>
      <p className="display-4">Counter : {count}</p>
      <br />
      <CounterButtons />
    </>
  );
}
