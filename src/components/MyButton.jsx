const MyButton = ({btnType, btnText, handler}) => {
  if (btnType === "sucess") {
    return <button className="btn btn-success button" onClick={handler}>{btnText}</button>;
  } else if (btnType === "danger") {
    return <button className="btn btn-danger button" onClick={handler}>{btnText}</button>;
  } else {
    return <button className="Blue-Button button" onClick={handler}>{btnText}</button>;
  }
};

export default MyButton;