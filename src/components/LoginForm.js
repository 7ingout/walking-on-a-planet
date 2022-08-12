import React, { useState } from 'react';
import Header2 from './Header2';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../config/constant';
import { setCookie } from '../util/cookie';
import { setLogin } from '../modules/logincheck';
import { useDispatch } from 'react-redux';

import './LoginForm.css'

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ loginData, setLoginData ] = useState({
        userId: "",
        userPass: "",
    })
    const onChange = (e) => {
        const { name, value } = e.target;
        setLoginData ({
            ...loginData,
            [name]: value
        })
    }
    const Login = async () => {
        let userId = document.querySelector('#userId');
        const response = await axios.get(`${API_URL}/getId/${userId.value}`);
        const getId = response.data;
        console.log(getId);
        if(getId.length <= 0) {
            alert("등록된 아이디가 없습니다.");
        } 
    }
    const onSubmit = (e) => {
        e.preventDefault();
        // input에 입력했는지 체크
        if(loginData.userId === '' || loginData.userPass === '') {
            alert('아이디와 비밀번호를 입력해주세요');
        } else {
            axios.post (`${API_URL}/login`, loginData)
            // 로그인이 되었을 때
            .then(result => {  
                let { userId, userName } = result.data;
                console.log(result);
                // usermail에 값이 있을 때
                if(userId !== null && userId !== '' && userId !== undefined) {
                    alert('로그인되었습니다.');
                    // 현재시간 객체를 생성
                    let expires = new Date();
                    // 60분 더한 값으로 변경
                    expires.setMinutes(expires.getMinutes()+60)
                    setCookie('userId', `${userId}`, {path: '/', expires});
                    setCookie('userName', `${userName}`, {path: '/', expires});
                    dispatch(setLogin());
                    // dispatch(goToHome(navigate));
                    navigate('/');
                } else {
                    alert('아이디와 비밀번호를 확인해주세요');
                }
            })
            .catch(e => {
                console.log(e);
                alert('아이디와 비밀번호를 확인해주세요');
            })
        }
    }
    return (
        <div>
            <Header2 />
            <div className='login'>
                <form onSubmit={onSubmit} className='loginform'>
                    <div className='small_menu'><span><Link to = "/">홈</Link></span><span>{'>'}</span><span>로그인</span></div>
                    <h1>로그인</h1>
                    <div className='center_table'>
                        <table className='login_table'>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                </tr>
                                <tr>
                                    <td>
                                        <input name="userId" type="text" 
                                        id="userId"
                                        value={loginData.userId } onChange={onChange}
                                        placeholder='아이디'
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>PASSWORD</th>
                                </tr>
                                <tr>
                                    <td>
                                    <input id='pass' name="userPass" type="password"
                                       placeholder='비밀번호'
                                       value={loginData.userPass} onChange={onChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button className='form_btn' onClick = {Login} type='submit'>로그인</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    아직 회원이 아니신가요?<br/>
                                    회원가입을 하시면 다양하고 특별한 혜택이 준비되어 있습니다.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <span id='join_btn' className='form_btn'><Link to = "/join">회원가입</Link></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;