import axios from 'axios'
import { API_URL } from '../config/constant'

// 리덕스 액션타입, 초기값, 액션 생성함수, 리듀서
const GET_SEARCHS = "GET_SEARCHS";
const GET_SEARCHS_ERROR = "GET_SEARCHS_ERROR";
const GET_SEARCHS_SUCCESS = "GET_SEARCHS_SUCCESS";

// 초기값 설정
const initialState = {
    searchs: {
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
export const getSearchs = () => async dispatch => {
    dispatch({ type: GET_SEARCHS }) // 요청시작
    try{
        const response = await axios.get(`${API_URL}/search`)
        const searchs = response.data;
        dispatch({ type: GET_SEARCHS_SUCCESS, searchs })
    }
    catch(e) {
        dispatch({ type: GET_SEARCHS_ERROR, error: e})
    }
}

// 리듀서 만들기
export default function searchs(state = initialState, action) {
    switch(action.type) {
        case GET_SEARCHS:
            return {
                ...state,
                searchs: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case GET_SEARCHS_SUCCESS:
            return {
                ...state,
                searchs: {
                    loading: false,
                    data: action.searchs,
                    error: null
                }
            }
        case GET_SEARCHS_ERROR:
            return {
                ...state,
                searchs: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            }
        default:
            return state;
    }
}