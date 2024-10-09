import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const initialtodoItems = [
  
  ];

  const [todoItems, setTodoItem] = useState(initialtodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(itemName, itemDueDate);
    const newTodoItems = [...todoItems, { todoName: itemName, todoDate: itemDueDate }];
    setTodoItem(newTodoItems);
  }

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.todoName !== todoItemName);
    setTodoItem(newTodoItems);
  }                                                                   

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem}/>
      <WelcomeMessage todoItems={todoItems}></WelcomeMessage>

      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
