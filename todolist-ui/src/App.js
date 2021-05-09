import { useState } from "react";
import ToDoView from './ToDoView';

function App() {
  const [toDoList,setToDoList] =useState(
  [
    {key:1, id:1, name:'TODO1', isSelected:true},
    {key:2, id:2, name:'TODO2', isSelected:false},
    {key:3, id:3, name:'TODO3', isSelected:false},
    {key:4, id:4, name:'TODO4', isSelected:false}
  ]);

  return (
    <div className="container-sm">
    <ToDoView key={1} toDoList={toDoList} /></div>
  );
}

export default App;
