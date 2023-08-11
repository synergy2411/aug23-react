import React from "react";
import classes from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={classes["card"]} style={props.style}>
      {props.title && (
        <div className={classes["card-header"]}>
          <h5 className="text-center">{props.title}</h5>
        </div>
      )}
      <div className={classes["card-body"]}>
        {props.children}
        {props.button}
      </div>
    </div>
  );
}
