import {useDispatch,useSelector} from 'react-redux';
import allActions from './redux/actions';

const CheckBox = (props) => {
    const dispatch = useDispatch();
    const todoListAll = useSelector(state=>state.ToDoListReducer.toDoList);
    console.log("todoListAll", todoListAll);
    console.log("checkbox", props.toDoProp.isSelected);



  const OnChangeHandler = () => {


    dispatch(allActions.toDoListActions.setToDoList(''));
  };

  return (
    <input
      type="checkbox"
      checked={props.toDoProp.isSelected}
      onChange={OnChangeHandler}
    ></input>
  );
};
export default CheckBox;
