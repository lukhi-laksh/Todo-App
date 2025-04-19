import MyButton from "./MyButton";
// we must need to give type of button
const TodoItem = ({ id, todoText, todoDate }) => {
  const deleteHandler = () => {
    console.log(`deleete button clicked which id is ${id} ${todoText}`);
  }
  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-5 text-truncate">{todoText}</div>
         <div className="col-3">{todoDate}</div>
           <div className="col-2">
          <MyButton btnType={"danger"} btnText={"Delete"} handler={deleteHandler}/>
        </div>
      </div>
    </div>
  );
};
// that is show type of the button to select new button
export default TodoItem;
