import React from "react";
import { useDispatch } from "react-redux";
import { todoRemoved } from "./todosSlice"

function Todo({ todo }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(todoRemoved(todo.id));
  }

  return (
    <li>
      <span>{todo.text}</span>
      <button onClick={handleDelete}>DELETE</button>
    </li>
  );
}

export default Todo;
