import { API_URL } from "../config/constant";
import axios from "axios";

// 액션타입, 액션 생성함수, 초기값, 리듀서
const GET_EVENTS = "GET_EVENTS";
const GET_EVENTS_SUCCESS = "GET_EVENTS_SUCCESS";
const GET_EVENTS_ERROR = "GET_EVENTS_ERROR";

const initialState = {
    data: null,
    loading: false,
    error: null
}

// 액션 생성함수
// thunk 함수 사용
export const getEvents = () => async dispatch => {
    dispatch({ type: GET_EVENTS }) // 요청시작
    try {
        const response = await axios.get(`${API_URL}/event`)
        const eventdata = response.data;
        dispatch({ type: GET_EVENTS_SUCCESS, payload: eventdata })
    }
    catch(e) {
        dispatch({ type: GET_EVENTS_ERROR, payload: e})
    }
}

export default function event(state=initialState, action) {
    switch(action.type) {
        case GET_EVENTS:
            return {
                loading: true,
                data: null,
                error: null
            }
        case GET_EVENTS_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: null 
            }
        case GET_EVENTS_ERROR:
            return {
                loading: false,
                data: null,
                error: action.payload
            }
        default:
            return state
    }
}