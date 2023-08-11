import React from "react";
import Message from "../Message/Message";
import Button from "../UI/Button";

export default function Greet(props) {
  const alertHandler = () => alert("Who's this?");
  return (
    <>
      {props.title}
      {/* <Message username={props.username} /> */}
      {props.message}

      {props.children}

      <Button
        onClick={alertHandler}
        onMouseEnter={() => console.log("Mouse entered")}
      >
        Get Quote
      </Button>
      <Button
        onClick={alertHandler}
        onMouseEnter={() => console.log("Mouse entered")}
      >
        Lucky Number
      </Button>
    </>
  );
}
