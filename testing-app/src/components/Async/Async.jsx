import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Async() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/todos");

        const todos = await resp.json();

        setTodos(todos);
      } catch (err) {}
    };

    fetchTodos();
  });

  return (
    <>
      <h1>My Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
