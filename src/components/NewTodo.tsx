import React, { useRef } from "react";

import styles from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (todo: string) => void }> = (props) => {
  const todoInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredTodo = todoInputRef.current!.value;

    if (enteredTodo.trim().length === 0) {
      //throw an erro(?)
      return;
    }

    props.onAddTodo(enteredTodo);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor={"todo"}>To Do text</label>
      <input type="text" id="todo" ref={todoInputRef} />
      <button>Add item</button>
    </form>
  );
};

export default NewTodo;
