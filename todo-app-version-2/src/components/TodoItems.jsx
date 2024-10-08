import TodoItem from "./TodoItem";

function TodoItems({ todoItems }) {
  return (
    <div className="items-container">
      {todoItems.map((todoItem, index) => (
        <TodoItem
          key={index}
          todoName={todoItem.todoName}
          todoDate={todoItem.todoDate}
        />
      ))}
    </div>
  );
}
export default TodoItems;
