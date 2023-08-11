import React from "react";
import classes from "./Button.module.css";

export default function Button(props) {
  const style = {
    padding: "10px 20px",
    margin: "10px 12px",
  };

  return (
    // <button
    //   style={style}
    //   className={props.className}
    //   onClick={props.onClick}
    //   onMouseEnter={props.onMouseEnter}
    // >
    //   {props.children}
    // </button>
    <button style={style} {...props} className={classes["my-btn"]}>
      {props.children}
    </button>
  );
}
