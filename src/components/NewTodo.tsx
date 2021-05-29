import React, { useRef } from "react";

const NewTodo = () => {
  const todoInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredTodo = todoInputRef.current!.value;

    if (enteredTodo.trim().length === 0) {
      //throw an erro(?)
      return;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor={"todo"}>To Do text</label>
      <input type="text" id="todo" ref={todoInputRef} />
      <button>Add item</button>
    </form>
  );
};

export default NewTodo;
