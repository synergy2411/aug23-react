import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import style from "styled-components";

const H1 = style.h1`
    font-size : 1.2rem;
    color : blue
`;

const Button = style.button`
    border : 2px red solid;
    color : grey;
    backgroundColor : #fff;
    fontSize : 1.2rem;
    padding : 10px 12px

`;

export default function AddTodo() {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();
    const todoItem = {
      title: inputRef.current.value,
      completed: false,
    };
    dispatch({ type: "CREATE_TODO_ITEM", payload: todoItem });
  };

  return (
    <>
      <H1>The Form</H1>
      <form>
        <input type="text" ref={inputRef} />
        <Button onClick={clickHandler}>Add</Button>
      </form>
    </>
  );
}
