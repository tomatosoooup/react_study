import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../store/todos-context";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const ctx = useContext(TodoContext);
  return (
    <ul className={classes.todos}>
      {ctx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onDelete={ctx.deleteTodoFunction.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
