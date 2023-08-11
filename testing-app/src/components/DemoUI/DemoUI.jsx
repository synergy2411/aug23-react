import React from "react";

export default function DemoUI() {
  const alertHandler = () => alert("Who's this?");

  const inputChangeHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <Card
        style={{ width: "400px" }}
        button={
          <Button
            onClick={alertHandler}
            onMouseEnter={() => console.log("Mouse entered")}
          >
            Get Quote
          </Button>
        }
      >
        <p>The card body</p>
      </Card>

      <Input onChange={inputChangeHandler} />

      <Button
        onClick={alertHandler}
        onMouseEnter={() => console.log("Mouse entered")}
      >
        Lucky Number
      </Button>
    </>
  );
}
