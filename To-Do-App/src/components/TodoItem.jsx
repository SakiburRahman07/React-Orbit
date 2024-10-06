function TodoItem() {
  let todoName = "Buy Milk";
  let todoDate = " 10/11/24";
  return (
    <div className="item-contaier">
      <div class="row kg-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Danger
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
