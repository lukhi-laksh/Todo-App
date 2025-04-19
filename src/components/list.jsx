import MyButton from "./MyButton";

const TodoItem = ({ id, todoText, todoDate }) => {
  const deleteHandler = () => {
    console.log(`deleete button clicked which id is ${id} ${todoText}`);
  }
  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-5 text-truncate">{todoText}</div>
    </div>
  );
};

export default TodoItem;
