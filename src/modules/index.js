import { combineReducers } from "redux";
import trips from './trips';
import logincheck from "./logincheck";

const rootReducer = combineReducers({ trips, logincheck });
export default rootReducer;