import { useState } from "react";

export const useRequestCreateTodos = (addedTodo, refreshTodos) => {
  const [isAddLoading, setIsAddLoading] = useState(false);
  const addTodosOnServer = () => {
    setIsAddLoading(true);
    fetch("http://localhost:3005/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        title: addedTodo.trim(),
        completed: false,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        refreshTodos();
        console.log("Ответ сервера после добавления задачи", response);
      })
      .finally(() => setIsAddLoading(false));
  };

  return {
    isAddLoading,
    addTodosOnServer,
  };
};
