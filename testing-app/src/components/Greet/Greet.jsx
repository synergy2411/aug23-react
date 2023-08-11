import React from "react";
import Message from "../Message/Message";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Card from "../UI/Card";

export default function Greet(props) {
  return (
    <>
      {props.title}
      {/* <Message username={props.username} /> */}
      {props.message}

      {props.children}
    </>
  );
}
