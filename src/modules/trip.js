import { API_URL } from "../config/constant";
import axios from "axios";

// 액션타입, 액션 생성함수, 초기값, 리듀서
const GET_TRIPS = "GET_TRIPS";
const GET_TRIPS_SUCCESS = "GET_TRIPS_SUCCESS";
const GET_TRIPS_ERROR = "GET_TRIPS_ERROR";

const initialState = {
    data: null,
    loading: false,
    error: null
}

// 액션 생성함수
// thunk 함수 사용
export const getTrip = () => async dispatch => {
    dispatch({ type: GET_TRIPS }) // 요청시작
    try {
        const response = await axios.get(`${API_URL}/trip`)
        const tripdata = response.data;
        dispatch({ type: GET_TRIPS_SUCCESS, payload: tripdata })
    }
    catch(e) {
        dispatch({ type: GET_TRIPS_ERROR, payload: e})
    }
}

export default function trip(state=initialState, action) {
    switch(action.type) {
        case GET_TRIPS:
            return {
                loading: true,
                data: null,
                error: null
            }
        case GET_TRIPS_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: null 
            }
        case GET_TRIPS_ERROR:
            return {
                loading: false,
                data: null,
                error: action.payload
            }
        default:
            return state
    }
}