import "bootstrap/dist/css/bootstrap.css";
import CheckBox from "./CheckBox";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const ToDo = (props) => {
  console.log("ToDo", props.toDoProp);
  const [toDoProp] = useState(props.toDoProp);
  return (
    <li className="list-group-item" key={toDoProp.id}>
      <div className="container">
        <div className="row">
          <div className="col-md-1">
            <CheckBox toDoProp={toDoProp}></CheckBox>
          </div>
          <div className="col-md-9"> {toDoProp.item}</div>
          <div className="col-md-2"><FontAwesomeIcon  icon={faTrashAlt}    color="red" size="1x"> </FontAwesomeIcon></div>
        </div>
      </div>
    </li>
  );
};
export default ToDo;
