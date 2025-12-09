import styles from "./Todos.module.css";

export const Todos = ({ title, completed, index }) => {
  return (
    <div className={styles.todo}>
      <input
        className={styles.checkBox}
        type="checkbox"
        checked={completed}
        readOnly
      />
      {index + 1} : {title}
    </div>
  );
};
