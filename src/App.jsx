// import { useState } from "react";
import styles from "./App.module.css";
import { useState } from "react";
import { useRequestReadTodos } from "./hook";
import { Todos, CreateTodos } from "./components";

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [isGetLoading, setIsGetLoading] = useState(false);
  const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);

  //   функция изменения флага обновления useEffect
  const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

  //   Запрос на сервер - чтение
  useRequestReadTodos(setTodos, setIsGetLoading, refreshTodosFlag);

  return (
    <>
      <div className={styles.app}>
        <div>
          <CreateTodos
            setTodos={setTodos}
            setIsGetLoading={setIsGetLoading}
            refreshTodos={refreshTodos}
          />
        </div>
        {isGetLoading ? (
          <div className={styles.loader}></div>
        ) : (
          todos.map(({ id, title, completed }, index) => (
            <Todos
              key={id}
              title={title}
              completed={completed}
              index={index}
              id={id}
              refreshTodos={refreshTodos}
            />
          ))
        )}
      </div>
    </>
  );
};
