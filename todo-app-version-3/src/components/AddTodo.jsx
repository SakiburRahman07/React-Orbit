import { useRef, useContext } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import {TodoItemsContext} from '../store/todo-items-store'; // Assuming this context is available

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext); // Add the correct context
  const nameElement = useRef(null);
  const dueDateElement = useRef(null);

  const handleAddButtonClicked = (event) => {
    event.preventDefault();  // Prevent the form from refreshing the page
    if (nameElement.current.value && dueDateElement.current.value) {
      const todoName = nameElement.current.value;
      const dueDate = dueDateElement.current.value;
      addNewItem(todoName, dueDate);

      // Clear the input fields after submission
      nameElement.current.value = "";
      dueDateElement.current.value = "";

      // Set focus back to the name input for accessibility
      nameElement.current.focus();
    }
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={nameElement}
            className="form-control" // Add Bootstrap class for styling
          />
        </div>
        <div className="col-4">
          <input 
            type="date" 
            ref={dueDateElement} 
            className="form-control" // Add Bootstrap class for styling
          />
        </div>
        <div className="col-2">
          <button
            type="submit"  // Change to 'submit' to allow form submission
            className="btn btn-success kg-button"
          >
            <IoIosAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
