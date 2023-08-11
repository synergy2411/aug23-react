import React from "react";
import { ITodo } from "../model/todo.model";

const TodoItem: React.FC<{ todo: ITodo }> = (props) => {
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-header">
          <h5 className="text-center">{props.todo.label.toUpperCase()}</h5>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
