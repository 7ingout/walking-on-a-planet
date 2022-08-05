import axios from 'axios'
import { API_URL } from '../config/constant'

// 리덕스 액션타입, 초기값, 액션 생성함수, 리듀서
const GET_TRIPS = "GET_TRIPS";
const GET_TRIPS_ERROR = "GET_TRIPS_ERROR";
const GET_TRIPS_SUCCESS = "GET_TRIPS_SUCCESS";
// const SET_INPUT = "SET_INPUT";
// const SET_RESET = "SET_RESET";

// 초기값 설정
const initialState = {
    trips: {
        loading: false,
        data: null,
        error: null
    },
    // addTrip: {
        // c_name: "",
        // c_phone: "",
        // c_birth: "",
        // c_gender: "",
        // c_add: "",
        // c_adddetail: "",
    // }
}

// 액션 생성함수
// export const setInput = (e) => {
//     const { name, value } = e.target;
//     return {
//         type: SET_INPUT,
//         name,
//         value
//     }
// }

// 홈으로 이동 함수
export const goHome = (navigate) => () => {
    navigate('/');
}

// thunk 함수를 사용해서 액션객체 디스패치하기
export const getTrips = () => async dispatch => {
    dispatch({ type: GET_TRIPS }) // 요청시작
    try{
        const response = await axios.get(`${API_URL}/trips`)
        const trips = response.data;
        dispatch({ type: GET_TRIPS_SUCCESS, trips })
    }
    catch(e) {
        dispatch({ type: GET_TRIPS_ERROR, error: e})
    }
}

// export const setSubmit = () => async (dispatch, getState) => {
//     const formdata = getState().trips.addTrip;
//     try {
//         const response = await axios.post(`${API_URL}/addTrip`, formdata)
//         dispatch({ type: SET_RESET })
//     }
//     catch(e) {
//         dispatch({ type: SET_RESET })
//     }
// }

// 리듀서 만들기
export default function trips(state = initialState, action) {
    switch(action.type) {
        case GET_TRIPS:
            return {
                ...state,
                trips: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case GET_TRIPS_SUCCESS:
            return {
                ...state,
                trips: {
                    loading: false,
                    data: action.trips,
                    error: null
                }
            }
        case GET_TRIPS_ERROR:
            return {
                ...state,
                trips: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            }
        // case SET_INPUT:
        //     return {
        //         ...state,
        //         addTrip: {
        //             ...state.addTrip,
        //             [action.name]: action.value
        //         }
        //     }
        // case SET_RESET:
        //     return {
        //         ...state,
        //         addTrip: {
        //             ...state.addTrip,
        //             c_name: "",
        //             c_phone: "",
        //             c_birth: "",
        //             c_gender: "",
        //             c_add: "",
        //             c_adddetail: "",
        //         }
        //     }
        default:
            return state;
    }
}