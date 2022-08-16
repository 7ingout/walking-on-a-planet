import { combineReducers } from "redux";
import visuals from './visuals';
import recommands from './recommands';
import pics from './pics';
import logincheck from "./logincheck";
import trip from "./trip"
import goods from "./usedtrade"
import cart from "./cart"
import event from "./event"
import my from "./my"

const rootReducer = combineReducers({ visuals, recommands, pics, trip, goods, cart, event, my, logincheck });
export default rootReducer;