import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

import styles from "./Todos.module.css";

const Todos: React.FC<{ todos: Todo[] }> = (props) => {
  return (
    <ul className={styles.todos}>
      {props.todos.map((todo) => {
        return <TodoItem key={todo.id} text={todo.text} />;
      })}
    </ul>
  );
};

export default Todos;
