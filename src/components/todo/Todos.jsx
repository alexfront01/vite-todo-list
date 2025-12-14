import { useState } from "react";

import { UpdateTodo } from "../update/Update-todo";
import styles from "./Todos.module.css";

export const Todos = ({ title, id, index, refreshTodos }) => {
  const [marckActiveTodo, setMarckActiveTodo] = useState(false);

  const checkMarckActive = ({ target }) => {
    setMarckActiveTodo(target.checked);
  };

  return (
    <div className={styles.todo}>
      <div>
        <input
          id={index}
          className={styles.checkBox}
          type="checkbox"
          onChange={checkMarckActive}
        />
        {index + 1} : {title}{" "}
        {marckActiveTodo ? (
          <span style={{ color: "green" }}>- Задача выполнена</span>
        ) : null}
      </div>
      <UpdateTodo id={id} refreshTodos={refreshTodos} />
    </div>
  );
};
