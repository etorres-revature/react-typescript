import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ todos: Todo[] }> = (props) => {
  return (
    <ul>
      <TodoItem todos={props.todos} />
    </ul>
  );
};

export default Todos;
