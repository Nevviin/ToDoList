import React, { useEffect } from "react";
import ToDo from "./ToDo";
import "bootstrap/dist/css/bootstrap.css";
import { useSelector,useDispatch } from "react-redux";
import { useState,Fragment } from "react";
import allActions from './redux/actions';
import * as toDoService from "./toDoService";
const ToDoView = () => {
  const dispatch = useDispatch();
  const toDoListState = useSelector((state) => state.ToDoListReducer.toDoList);
 
  console.log("ToDoView toDoListState",toDoListState);
  const[toDoList,setToDoList]=useState(toDoListState);
 
  const [newTask,setNewTask]=useState('');
  console.log("ToDoView toDoList",toDoList);

  const deleteToDo =(toDo)=>
  {
    
    toDoService.DeleteItem(toDo).then((response)=>{
      if (response.status === 200) {
        setToDoList(response.data);
       dispatch(allActions.toDoListActions.setToDoList(response.data))
        console.log('response.data',response.data);
      }
    })
  }

  const handleKeyPress = (e) => {
    console.log("e.keyCode",e.keyCode);
    if (e.keyCode === 13) {
      addTaskHandler();
    }
  };



const addTaskHandler = () => {
  console.log('newTask',newTask);
  var newToDoListState = [...toDoListState];
  var lastTask = toDoListState.slice(-1);
  if (!newTask.trim())
  {
    alert('please enter the task');
    return false;
  }
  console.log("last task", lastTask);
  var task = {
    id: Number(lastTask[0].id) + 1,
    key: Number(lastTask[0].id) + 1,
    item: newTask,
    isSelected: false,
    isCompleted:false
  };


  toDoService.AddItem(task).then((response)=>{
    if (response.status===200)    
    {
      setToDoList(response.data);
      dispatch(allActions.toDoListActions.setToDoList(response.data));
    }
  })

 
};






const inputChangeHandler =(e)=>{
setNewTask(e.target.value);
}

//onChange={e => { setUserName(e.target.value); }}

  return (
    <Fragment>
      
      
      <ul className="list-group">
       
       
      <li className="list-group-item">

        <div className="container-fluid">
       <div className="row">
       <div className="col-sm-10">
       <input
           className="form-control"
           type="text"
            placeholder="Add Task"
            aria-label="default input example"
            onChange={inputChangeHandler}
            value={newTask}
            onKeyDown={handleKeyPress}
          />
         </div>
         <div className="col-sm-2">
         <button type="button" className="btn btn-primary" onClick={addTaskHandler}>
            Add Task
          </button>
         </div>
       </div>
       </div>
    
        </li>
  
        <div key={1}>
          {toDoList.map((todo) => {
            console.log('todo.map',todo);
            return <ToDo toDoProp={todo} onDelete ={deleteToDo} />;
          })}
        </div>
        <div>
        
        </div>
      </ul>
    </Fragment>
  );
};
export default ToDoView;
