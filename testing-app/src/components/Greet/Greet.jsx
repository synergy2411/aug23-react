import React from "react";
import Message from "../Message/Message";

export default function Greet(props) {
  return (
    <>
      {props.title}
      {/* <Message username={props.username} /> */}
      {props.message}
    </>
  );
}
