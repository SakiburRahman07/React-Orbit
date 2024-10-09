import TodoItem from "./TodoItem";

function TodoItems({ todoItems, onDeleteClick }) {                    
  return (
    <div className="items-container">
      {todoItems.map((todoItem, index) => (
        <TodoItem
          key={index}
          todoName={todoItem.todoName}
          todoDate={todoItem.todoDate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
}
export default TodoItems;
