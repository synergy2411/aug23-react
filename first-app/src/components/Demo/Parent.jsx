import React, { useState, useCallback, useMemo } from "react";
import Child from "./Child";

export default function Parent() {
  const [toggle, setToggle] = useState(false);

  const [show, setShow] = useState(false);

  console.log("Parent render!");

  // returns memoized version of callback
  const demoFn = useCallback(() => (show ? "XYZ" : "ABC"), [show]);

  const demoFn2 = useMemo(() => () => show ? "XYZ" : "ABC", [show]);

  const arr = useMemo(() => [101, 102, 103, 104, 105], []);

  return (
    <>
      <h1>The Parent Component </h1>

      <button onClick={() => setToggle(!toggle)} className="btn btn-primary">
        Toggle
      </button>
      <button onClick={() => setShow(!show)} className="btn btn-primary">
        Show
      </button>

      <Child toggle={true} demoFn={demoFn2} arr={arr} />
    </>
  );
}
