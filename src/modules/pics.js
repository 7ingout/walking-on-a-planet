import axios from 'axios'
import { API_URL } from '../config/constant'

// 리덕스 액션타입, 초기값, 액션 생성함수, 리듀서
const GET_PICS = "GET_PICS";
const GET_PICS_ERROR = "GET_PICS_ERROR";
const GET_PICS_SUCCESS = "GET_PICS_SUCCESS";

// 초기값 설정
const initialState = {
    pics: {
        loading: false,
        data: null,
        error: null
    },
}

// 홈으로 이동 함수
export const goHome = (navigate) => () => {
    navigate('/');
}

// thunk 함수를 사용해서 액션객체 디스패치하기
export const getPics = () => async dispatch => {
    dispatch({ type: GET_PICS }) // 요청시작
    try{
        const response = await axios.get(`${API_URL}/pics`)
        const pics = response.data;
        dispatch({ type: GET_PICS_SUCCESS, pics })
    }
    catch(e) {
        dispatch({ type: GET_PICS_ERROR, error: e})
    }
}

// 리듀서 만들기
export default function pics(state = initialState, action) {
    switch(action.type) {
        case GET_PICS:
            return {
                ...state,
                pics: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case GET_PICS_SUCCESS:
            return {
                ...state,
                pics: {
                    loading: false,
                    data: action.pics,
                    error: null
                }
            }
        case GET_PICS_ERROR:
            return {
                ...state,
                pics: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            }
        default:
            return state;
    }
}