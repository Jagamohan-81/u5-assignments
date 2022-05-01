export const TodoItem = ({ todo, handleStatus }) => {
  return (
    <div>
      {todo.title}
      <div
        className={todo.status ? "toggle red" : "toggle gray"}
        onClick={() => handleStatus(todo.id)}
      ></div>
    </div>
  );
};
