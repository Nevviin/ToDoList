import {createStore} from 'redux';
import rootReducer from './reducers';

const initialState =[
    {key:1, id:1, name:'TODO1', isSelected:true},
    {key:2, id:2, name:'TODO2', isSelected:false},
    {key:3, id:3, name:'TODO3', isSelected:false},
    {key:4, id:4, name:'TODO4', isSelected:false}
  ] ;

const store = createStore(rootReducer);
//store.dispatch({type:"SET_TODO_LIST",payLoad:[] });
store.subscribe(()=>{console.log('store.subscribe',store.getState())});
export default store;

