import axios from 'axios'
import { API_URL } from '../config/constant'
import { getCookie } from '../util/cookie';

// 리덕스 액션타입, 초기값, 액션 생성함수, 리듀서
const GET_MY = "GET_MY";
const GET_MY_ERROR = "GET_MY_ERROR";
const GET_MY_SUCCESS = "GET_MY_SUCCESS";

// 초기값 설정
const initialState = {
    my: {
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
export const getMy = () => async dispatch => {
    dispatch({ type: GET_MY }) // 요청시작
    try{
        const userId = getCookie('userId');
        const response = await axios.get(`${API_URL}/my/${userId}`)
        const my = response.data;
        dispatch({ type: GET_MY_SUCCESS, my })
    }
    catch(e) {
        dispatch({ type: GET_MY_ERROR, error: e})
    }
}

// 리듀서 만들기
export default function my(state = initialState, action) {
    switch(action.type) {
        case GET_MY:
            return {
                ...state,
                my: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case GET_MY_SUCCESS:
            return {
                ...state,
                my: {
                    loading: false,
                    data: action.my,
                    error: null
                }
            }
        case GET_MY_ERROR:
            return {
                ...state,
                my: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            }
        default:
            return state;
    }
}