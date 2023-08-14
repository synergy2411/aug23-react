import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTodo from "./AddTodo";

export default function Todos() {
  const { isLoading, todos } = useSelector((store) => store);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_ALL_TODOS" });
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Todo Component </h1>
      <AddTodo />
      <br />
      <ul>
        {todos && todos.map((todo) => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </>
  );
}
