// import { useState } from "react";
import styles from "./App.module.css";
import { useRequestGetTudus } from "./hooks";
import { Todos } from "./components";

export const App = () => {
  const { todos } = useRequestGetTudus();

  return (
    <>
      <div className={styles.app}>
        {todos.map(({ id, title, completed }, index) => (
          <Todos key={id} title={title} completed={completed} index={index} />
        ))}
      </div>
    </>
  );
};
