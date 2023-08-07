import React, { useState } from "react";

import Expenses from "./components/Expeses/Expenses";
import ClassBased from "./components/Demo/ClassBased";
import Login from "./components/Demo/Login";
import RegisterForm from "./components/Demo/RegisterForm";
import UseEffect from "./components/Demo/UseEffect";

function App() {
  // const [toggle, setToggle] = useState(false);
  // const [show, setShow] = useState(false);

  // console.log("App Render");

  return (
    <>
      <h1>App Component works!</h1>

      <UseEffect />

      {/* <Login /> */}

      {/* <RegisterForm /> */}

      {/* <button onClick={() => setShow(!show)} className="btn btn-success">
        Show
      </button>
      <button onClick={() => setToggle(!toggle)} className="btn btn-primary">
        Toggle
      </button>

      {show && <ClassBased toggle={toggle} />} */}

      {/* <Expenses /> */}
    </>
  );
}

export default App;
