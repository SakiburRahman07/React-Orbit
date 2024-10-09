import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItem from "./components/TodoItem";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const initialtodoItems = [
  
  ];

  const [todoItems, setTodoItem] = useState(initialtodoItems);

  const addNewItem = (itemName, itemDueDate) => {
    
    setTodoItem((currValue)=>[
    
      ...currValue, { todoName: itemName, todoDate: itemDueDate }
    ]);
  }

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.todoName !== todoItemName);
    setTodoItem(newTodoItems);
  }
  
  const defaultTodoItems = [ { name: "Buy groceries", date: "2021-09-01" }, { name: "Pay bills", date: "2021-09-02" }, { name: "Go to the gym", date: "2021-09-03" } ];

  return (
    <TodoItemsContext.Provider value={{
      todoItems,
      addNewItem,
      deleteItem,
    }}>
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <WelcomeMessage ></WelcomeMessage>

      <TodoItems></TodoItems>
    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
