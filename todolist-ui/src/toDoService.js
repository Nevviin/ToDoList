import axios from 'axios';

export const SetSelected = (toDoList, toDoListId) => {
 // console.log("in  toDoService SetSelected",toDoList,toDoListId);

 var newtoDoList  = [...toDoList];
  try {
    var toDo = newtoDoList.find(toDoItem => {
      return toDoItem.id === toDoListId
    });
    console.log("SetSelected,toDo",toDo);
    toDo.isSelected = !toDo.isSelected;
    console.log("SetSelected,toDoToggle",toDo);
    return newtoDoList;
  } catch (exception) {
    console.log("exception in  toDoService SetSelected");
    return exception;
  }
};

export const FetchToDoList = async () => {
 
  try {
      const response = await axios.get('http://localhost:60634/api/todo');
      //console.log('shipmentservice GetShipments response',response);
      return response;
  } catch (exception) {
      if (!exception.response) {
          console.log('toDoService FetchToDoList exception', exception);
          return exception;
      }
      return exception.response;
  }
}

export const AddItem = async (toDoItem) => {
 
  try {
      const response = await axios.post('http://localhost:60634/api/todo',
      JSON.stringify(toDoItem),
      {
        headers: { 'Content-Type': 'application/json'}
      }
      );
     
      return response;
  } catch (exception) {
      if (!exception.response) {
          console.log('toDoService AddItem exception', exception);
          return exception;
      }
      return exception.response;
  }
}


export const DeleteItem = async (toDoItem) => {
  console.log('toDoService DeleteItem toDoItem.id',toDoItem.id);
  console.log('toDoService delete url',`http://localhost:60634/api/todo?id=${toDoItem.id}`);
  try {
      const response = await axios.delete(`http://localhost:60634/api/todo?id=${toDoItem.id}`);
      return response;
  } catch (exception) {
      if (!exception.response) {
          console.log('toDoService delete exception', exception);
          return exception;
      }
      return exception.response;
  }
}