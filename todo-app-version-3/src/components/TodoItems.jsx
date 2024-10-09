import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import css from "./TodoItem.module.css";


function TodoItems() {            

  const {todoItems} = useContext(TodoItemsContext);

  console.log(todoItems);

  return (
    <div className={css["items-container"]}>
      {todoItems.map((todoItem) => (
        <TodoItem
          todoName={todoItem.todoName}
          todoDate={todoItem.todoDate}
         
        />
      ))}
    </div>
  );
}
export default TodoItems;
