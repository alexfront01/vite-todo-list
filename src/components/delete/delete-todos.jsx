import { useRequestDeleteTodos } from "../../hook";

export const DeleteTodos = ({ id, refreshTodos }) => {
  const { deleteTodos, isloadingDeleteTodos } = useRequestDeleteTodos(
    id,
    refreshTodos
  );

  return (
    <>
      <button onClick={deleteTodos} disabled={isloadingDeleteTodos}>
        Удалить
      </button>
    </>
  );
};
