import { useState, useEffect } from "react";

export const useRequestGetTudus = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(true), 0);
    fetch("http://localhost:3005/todos")
      .then((loadedData) => loadedData.json())
      .then((loadedTodos) => {
        setTodos(loadedTodos);
        console.log("Полученные задачи с сервера", loadedTodos);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    todos,
    isLoading,
  };
};
