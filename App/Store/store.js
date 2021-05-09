
import {createStore} from "redux";
import {addElementReducer} from './Reducer/addElement';


const store = createStore(addElementReducer); // il faut déclarer le reducer lié au store

export default store;