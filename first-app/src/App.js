import React, { useState } from "react";

import Expenses from "./components/Expeses/Expenses";
import ClassBased from "./components/Demo/ClassBased";
import Login from "./components/Demo/Login";
import RegisterForm from "./components/Demo/RegisterForm";
import UseEffect from "./components/Demo/UseEffect";
import AuthContext from "./context/auth-context";

function App() {
  // const [toggle, setToggle] = useState(false);
  // const [show, setShow] = useState(false);

  // console.log("App Render");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <h1>App Component works!</h1>

      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Login />
      </AuthContext.Provider>

      {/* <UseEffect /> */}

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
