import { useContext } from "react";
import css from "./TodoItem.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ todoName, todoDate }) {
  console.log(todoName);
  console.log(todoDate);

  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className={css.container}>
      <div className={`${css["container"]} row`}>
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className={`${css["kg-button"]} btn btn-danger`}
            onClick={() => deleteItem(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
