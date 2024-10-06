import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <center>
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div className="items-container">
        <TodoItem></TodoItem>
      </div>
    </center>
  );
}

export default App;
