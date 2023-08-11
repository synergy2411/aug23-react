import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

export default function Async() {
  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     try {
  //       const resp = await fetch("https://jsonplaceholder.typicode.com/todos");

  //       const todos = await resp.json();

  //       setTodos(todos);
  //     } catch (err) {}
  //   };

  //   fetchTodos();
  // });

  const { data, error } = useFetch({
    url: "https://jsonplaceholder.typicode.com/todos",
    method: "GET",
  });

  return (
    <>
      <h1>My Todos</h1>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
