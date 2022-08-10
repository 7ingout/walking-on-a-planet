import { combineReducers } from "redux";
import visuals from './visuals';
import recommands from './recommands';
import pics from './pics';
import logincheck from "./logincheck";
import trip from "./trip"
import goods from "./usedtrade"

const rootReducer = combineReducers({ visuals, recommands, pics, trip, goods, logincheck });
export default rootReducer;