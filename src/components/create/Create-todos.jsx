import { useState } from "react";
import { useRequestCreateTodos } from "../../hook";
import styles from "./Create-todos.module.css";

export const CreateTodos = ({ refreshTodos, isGetLoading }) => {
  const [addedTodo, setAddedTodo] = useState("");
  const { addTodosOnServer, isAddLoading } = useRequestCreateTodos(
    addedTodo,
    refreshTodos
  );

  const addTodoChange = ({ target }) => {
    setAddedTodo(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodosOnServer();
    setAddedTodo("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className={styles.inputAddTodo}
        type="text"
        name="addTodo"
        value={addedTodo}
        onChange={addTodoChange}
        placeholder="Ведите новую задачу..."
      />
      <button
        className={styles.button}
        type="submit"
        disabled={isGetLoading || isAddLoading}
      >
        Добавить дело
      </button>
    </form>
  );
};
