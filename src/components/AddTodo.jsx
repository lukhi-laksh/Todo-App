import MyButton from "./MyButton";
const AddTodo = () => {
  const addHandler = () => {
    console.log(`try to Add Item`);
  }
  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-3">
          <input type="date" className="form-control" />
        </div>
        <div className="col-2">
        <MyButton btnType={"sucess"} btnText={"Add"} handler={addHandler} />
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
