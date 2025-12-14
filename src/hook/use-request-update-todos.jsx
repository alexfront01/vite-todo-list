import { useState } from "react";

export const useRequestUpdateTodos = (id, newTitle, refreshTodos) => {
  const [isLoadingUpdate, setIsLoudingUpdate] = useState(false);

  const updateingTodoUrlEndId = (id) => {
    let urlTodos = "http://localhost:3005/todos/";

    const urlTodosUpdate = `${urlTodos}${id}`;

    return urlTodosUpdate;
  };

  const updateTodo = () => {
    setTimeout(() => setIsLoudingUpdate(true), 0);

    fetch(updateingTodoUrlEndId(id), {
      method: "PUT",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        title: newTitle.trim(),
        completed: false,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((responseTodo) => {
        console.log("Ответ сервера обновления задачи", responseTodo);
        refreshTodos();
      })
      .finally(() => {
        setIsLoudingUpdate(false);
      });
  };

  return {
    updateTodo,
    isLoadingUpdate,
  };
};
