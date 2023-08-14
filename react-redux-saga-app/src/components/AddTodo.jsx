import React, { useRef } from "react";
import { useDispatch } from "react-redux";

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
      <form>
        <input type="text" ref={inputRef} />
        <button onClick={clickHandler}>Add</button>
      </form>
    </>
  );
}
