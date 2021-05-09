import "bootstrap/dist/css/bootstrap.css";
import CheckBox from './CheckBox';

const ToDo = (props) => {
    console.log('ToDo',props.toDoProp);
  return (<li className="list-group-item" key={props.toDoProp.id}>
     <CheckBox toDoProp={props.toDoProp}></CheckBox>   Id:{props.toDoProp.id} {props.toDoProp.name}
     
  </li>);
};
export default ToDo;
