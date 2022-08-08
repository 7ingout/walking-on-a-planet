import { combineReducers } from "redux";
// import trips from './trips';
import visuals from './visuals';
import recommands from './recommands';
import pics from './pics';
import logincheck from "./logincheck";
import trips from "./trips"


const rootReducer = combineReducers({ visuals, recommands, pics, trips, logincheck });
export default rootReducer;