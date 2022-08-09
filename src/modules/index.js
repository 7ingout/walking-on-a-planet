import { combineReducers } from "redux";
// import trips from './trips';
import visuals from './visuals';
import recommands from './recommands';
import pics from './pics';
import logincheck from "./logincheck";
import trip from "./trip"

const rootReducer = combineReducers({ visuals, recommands, pics, trip, logincheck });
export default rootReducer;