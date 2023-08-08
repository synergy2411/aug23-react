import React from "react";

function Child({ toggle, demoFn }) {
  console.log("Child render!");

  console.log(demoFn());

  return (
    <>
      <h2>The Child Component</h2>
      {toggle && <p>Toggle value is true now!</p>}
    </>
  );
}

export default React.memo(Child);

// prevProps.toggle === currProps.toggle => does not re-render the component
// prevProps.demoFn === currProps.demoFn => referencetial Equality
