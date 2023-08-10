import { useState } from "react";

export default function Output() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <h1>The OUtput Component</h1>
      <p>This component will output something</p>

      <button onClick={() => setToggle(true)}>Toggle</button>

      {toggle && <p>Toggle is true</p>}
      {!toggle && <p>Toggle is false</p>}
    </>
  );
}
