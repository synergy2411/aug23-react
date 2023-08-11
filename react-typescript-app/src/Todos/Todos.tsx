import { useContext, useState } from "react";
import { ITodo } from "../model/todo.model";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

let INITAL_TODOS: ITodo[] = [
  { id: "t001", label: "pot the plants" },
  { id: "t002", label: "renew car insurance" },
];

export default function Todos() {
  const [todos, setTodos] = useState<ITodo[]>(INITAL_TODOS);

  const [show, setShow] = useState<boolean>(false);

  const onAddNewItem = (newItem: ITodo) => {
    setTodos((prevTodos) => [newItem, ...prevTodos]);
    setShow(false);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>

      <button className="btn btn-primary mb-4" onClick={() => setShow(!show)}>
        Show
      </button>

      {show && <AddTodo onAddNewItem={onAddNewItem} />}

      <div className="row">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
