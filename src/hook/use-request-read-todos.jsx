import { useEffect } from "react";

export const useRequestReadTodos = (
  setTodos,
  setIsGetLoading,
  refreshTodosFlag
) => {
  useEffect(() => {
    setTimeout(() => setIsGetLoading(true), 0);
    fetch("http://localhost:3005/todos")
      .then((loadedData) => loadedData.json())
      .then((loadedTodos) => {
        setTodos(loadedTodos);
        console.log("Полученные задачи с сервера", loadedTodos);
      })
      .finally(() => {
        setIsGetLoading(false);
      });
  }, [refreshTodosFlag]);
};
