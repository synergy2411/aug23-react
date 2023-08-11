import React from "react";
import Message from "../Message/Message";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Card from "../UI/Card";

export default function Greet(props) {
  const alertHandler = () => alert("Who's this?");

  const inputChangeHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      {props.title}
      {/* <Message username={props.username} /> */}
      {props.message}

      {props.children}

      <Card>
        <p>The card body</p>
      </Card>

      <Input onChange={inputChangeHandler} />

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
