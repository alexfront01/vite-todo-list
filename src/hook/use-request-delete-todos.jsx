import { useState } from "react";

const deletingUrl = (id) => {
  let url = "http://localhost:3005/todos";

  const urlDelitingTodo = `${url}/${id}`;

  return urlDelitingTodo;
};

export const useRequestDeleteTodos = (id, refreshTodos) => {
  const [isloadingDeleteTodos, setIsLoadingDeleteTodos] = useState(false);

  const deleteTodos = () => {
    setIsLoadingDeleteTodos(true);
    fetch(deletingUrl(id), {
      method: "DELETE",
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        console.log("Задача удалена", response);
        refreshTodos();
      })
      .finally(() => {
        setIsLoadingDeleteTodos(false);
      });
  };

  return {
    deleteTodos,
    isloadingDeleteTodos,
  };
};
