import React, { useState } from "react";

import Expenses from "./components/Expeses/Expenses";
import ClassBased from "./components/Demo/ClassBased";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <h1>App Component works!</h1>

      <ClassBased toggle={toggle} />

      {/* <Expenses /> */}
    </>
  );
}

export default App;
