import React, { Fragment } from "react";
import ToDo from "./ToDo";
import "bootstrap/dist/css/bootstrap.css";
const ToDoView = ({ toDoList }) => {
  return (
    <Fragment>
      <ul className="list-group">
        <li className="list-group-item">
          <input
            className="form-control"
            type="text"
            placeholder="Add Task"
            aria-label="default input example"
          />
          <button type="button" className="btn btn-primary">
            Add Task
          </button>
        </li>
        <div key={1}>
          {toDoList.map((todo) => {
            return <ToDo toDoProp={todo} />;
          })}
        </div>
      </ul>
    </Fragment>
  );
};
export default ToDoView;
