const ToDoListReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_TODO_LIST":
      console.log("ToDoListReducer Reducer ", action.payLoad);
      return {
        ...state,
        toDoList: action.payLoad,
      };
    default:
      return state;
  }
};

export default ToDoListReducer;
