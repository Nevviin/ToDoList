import { useState, useEffect } from "react";
import ToDoView from './ToDoView';
import { useDispatch, useSelector } from 'react-redux';
import allActions from './redux/actions';
import * as toDoService from "./toDoService";
function App() {
  const dispatch = useDispatch();
  const todoListAll = useSelector((state) => state.ToDoListReducer.toDoList);
  const [todoList,setTodoList] = useState(todoListAll);
  const[showList,setShowList]=useState(false);
  useEffect(()=>{
    getTodos();
  },[]);


const getTodos =()=>
{
  toDoService.FetchToDoList().then((response)=>{
    if (response.status === 200) {
     // dispatch(allActions.toDoListActions.setToDoList(updatedToDoList));
     dispatch(allActions.toDoListActions.setToDoList(response.data))
      console.log('response.data',response.data);
      setShowList(true);
    }
  })

}



  return (
    <div className="container-sm">
     {showList &&   <ToDoView  toDoList={todoList} />}
    </div>
  );
}
export default App;
