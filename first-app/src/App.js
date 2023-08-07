import React from "react";

import UseReducer from "./components/Demo/UseReducer";

function App() {
  // const [toggle, setToggle] = useState(false);
  // const [show, setShow] = useState(false);

  // console.log("App Render");

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <h1>App Component works!</h1>

      <UseReducer />

      {/* <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Login />
      </AuthContext.Provider> */}

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
