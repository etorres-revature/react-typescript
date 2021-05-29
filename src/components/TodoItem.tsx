import React, { Fragment } from "react";
import Todo from "../models/todo";

const TodoItem: React.FC<{ todos: Todo[] }> = (props) => {
  return (
    <Fragment>
      {props.todos.map((todo) => {
        return <li key={todo.id}>{todo.text}</li>;
      })}
    </Fragment>
  );
};

export default TodoItem;
