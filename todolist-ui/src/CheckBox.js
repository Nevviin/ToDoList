import { useDispatch, useSelector } from "react-redux";
import allActions from "./redux/actions";
import * as toDoService from "./toDoService";
import { useState } from "react";

const CheckBox = (props) => {
  console.log("CheckBox props", props);
  const dispatch = useDispatch();
  const todoListAll = useSelector((state) => state.ToDoListReducer.toDoList);
 
  const OnChangeHandler = (e) => {
    console.log("OnChangeHandler", e.target, todoListAll);
    var updatedToDoList = toDoService.SetSelected(todoListAll, parseInt(e.target.value));
    dispatch(allActions.toDoListActions.setToDoList(updatedToDoList));
  };

  return (
    <input
      type="checkbox"
      checked={props.toDoProp.isSelected}
      onChange={OnChangeHandler}
      value={props.toDoProp.id}
    ></input>
  );
};
export default CheckBox;
