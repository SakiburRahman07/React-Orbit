import css from "./TodoItem.module.css";
function TodoItem({ todoName, todoDate }) {
  return (
    <div className="container">
      <div className={'${css["container"]} row'}>
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className={'${css["kg-button"]} btn btn-danger'}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
