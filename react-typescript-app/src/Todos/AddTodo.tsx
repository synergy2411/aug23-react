import React, { useRef } from "react";
import { ITodo } from "../model/todo.model";

interface IProps {
  onAddNewItem: (todo: ITodo) => void;
}

const AddTodo: React.FC<IProps> = (props) => {
  const inputItem = useRef<HTMLInputElement>(null);

  const addItemClickHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let newItem: ITodo = {
      id: Math.round(Math.random() * 100).toString(),
      label: inputItem.current!.value,
    };
    props.onAddNewItem(newItem);
  };

  return (
    <form className="mb-4" onSubmit={addItemClickHandler}>
      <div className="row">
        <div className="col-8">
          <input type="text" className="form-control" ref={inputItem} />
        </div>
        <div className="col-4">
          <button className="btn btn-secondary" type="submit">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
