import React, { useRef, useContext } from "react";
import { TodoContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const ctx = useContext(TodoContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    ctx.addTodoFunction(enteredText);

    if (todoTextInputRef.current) {
      todoTextInputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
