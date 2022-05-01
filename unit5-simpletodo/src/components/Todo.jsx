import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import { nanoid } from "nanoid";

function Todo() {
  const [todoList, setTodoList] = useState([]);

  const getData = (todo) => {
    const payload = {
      title: todo,
      status: false,
      id: nanoid(5),
    };
    setTodoList([...todoList, payload]);
  };
  const handleStatus = (id) => {
    //console.log("id", id);
    const newArr = todoList.map((e) => {
      if (e.id === id) {
        return {
          ...e,
          status: !e.status,
        };
      }
      return e;
    });
    setTodoList(newArr);
  };

  return (
    <div className="allData">
      <div>
        {todoList.map((e) => (
          <TodoItem handleStatus={handleStatus} todo={e} />
        ))}
      </div>
      <TodoInput getData={getData} />
    </div>
  );
}

export { Todo };
