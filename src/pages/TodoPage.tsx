import React, { useState, useEffect } from "react";
import { ITodo } from "../interfaces";
import { ToDoFrom } from "../components/ToDoForm";
import { ToDoList } from "../components/ToDoList";

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];

    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newToDo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    // setTodos([newToDo, ...todos]);
    setTodos((prev) => [newToDo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    const shoudRemove = window.confirm(
      "Вы уверены, что хотите удалить элементы?"
    );
    if (shoudRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <React.Fragment>
      <ToDoFrom onAdd={addHandler} />

      <ToDoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </React.Fragment>
  );
};
