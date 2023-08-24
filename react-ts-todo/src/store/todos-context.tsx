import React, { useState } from "react";
import Todo from "../models/todo";

type Props = {
  items: Todo[];
  addTodoFunction: (text: string) => void;
  deleteTodoFunction: (id: string) => void;
};

export const TodoContext = React.createContext<Props>({
  items: [],
  addTodoFunction: () => {},
  deleteTodoFunction: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addNewTodo = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };

  const todoDeleteHandler = (id: string) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  };

  const contextValue: Props = {
    items: todos,
    addTodoFunction: addNewTodo,
    deleteTodoFunction: todoDeleteHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodosContextProvider;
