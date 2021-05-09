const CheckBox = (props) => {
  console.log("checkbox", props.toDoPropisSelected);

  const OnChangeHandler = () => {};

  return (
    <input
      type="checkbox"
      checked={props.toDoProp.isSelected}
      onChange={OnChangeHandler}
    ></input>
  );
};
export default CheckBox;
