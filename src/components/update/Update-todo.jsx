import { useState, useRef, useEffect } from "react";
import { useRequestUpdateTodos } from "../../hook";
import { DeleteTodos } from "../delete";
import styles from "./Update-todo.module.css";

export const UpdateTodo = ({ id, refreshTodos }) => {
  const [newTitle, setNewTitle] = useState("");
  const [inputUpdateFlag, setInputUpdateFlag] = useState(false);

  const { updateTodo, isLoadingUpdate } = useRequestUpdateTodos(
    id,
    newTitle,
    refreshTodos
  );

  //   Реф для инпута обновить задачу
  const inputUpdateRef = useRef(null);

  //   Обработчик для поля обновления задачи
  const newTitleChange = ({ target }) => {
    setNewTitle(target.value);
  };

  //   Обработчик кнопки Обновить
  const updateTodosClick = () => {
    if (inputUpdateFlag === false) {
      setInputUpdateFlag((prev) => !prev);
    } else if (inputUpdateFlag === true && newTitle.trim() !== "") {
      console.log("Обновление данных на сервере", newTitle);
      updateTodo();

      setNewTitle("");
    }
  };

  //   Смена фокуса с кнопки на поле обновления задачи
  useEffect(() => {
    if (inputUpdateFlag && inputUpdateRef.current) {
      inputUpdateRef.current.focus();
    }
  }, [inputUpdateFlag]);

  //   Закрытия поля обновления задачи при смене фокуса
  const onInputNewTitleBlur = () => {
    if (newTitle === "") {
      setInputUpdateFlag(false);
    }
  };

  return (
    <div className={styles.butonControl}>
      {inputUpdateFlag ? (
        <input
          className={styles.inputUpdate}
          type="text"
          value={newTitle}
          ref={inputUpdateRef}
          onChange={newTitleChange}
          onBlur={onInputNewTitleBlur}
          placeholder="Введите изменения..."
        />
      ) : null}
      <button
        type="button"
        className={newTitle ? styles.buttonUdate : null}
        onClick={updateTodosClick}
        disabled={isLoadingUpdate}
      >
        Обновить
      </button>
      <DeleteTodos id={id} refreshTodos={refreshTodos} />
    </div>
  );
};
