import React, {useState} from 'react';
import Header2 from './Header2';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './JoinForm.css'
import { API_URL } from '../config/constant';
import PopupDom from "./PopupDom"
import PopupPostCode from "./PopupPostCode"

const JoinForm = () => {
    const navigate = useNavigate(); // 리다이렉션
    const [ formData, setFormData ] = useState({
        userId: "",
        userPass: "",
        userPassCk:"",
        userName: "",
        userPost: "",
        userAdd: "",
        userAdd2: "",
        userTel: "",
        userPhone:"",
        userMail:"",
        userYear:"",
        userMonth:"",
        userDay:""
    })
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    // 우편번호 관리하기
    const onAddData = (data) => {
        console.log(data);
        setFormData({
            ...formData,
            userAdd: data.address,
            userPost: data.zonecode
        })
    }
    // 팝업창 상태 관리
    const [ isPopupOpen, setIsPopupOpen ] = useState(false);
    // 팝업창 상태 true로 변경
    const openPostCode = ()=> {
        setIsPopupOpen(true);
    }
    // 팝업창 상태 false로 변경
    const closePostCode = () => {
        setIsPopupOpen(false);
    }
    const OnPwCh = () => {
        const userPw = document.querySelector('#pass');
        const userPwCh = document.querySelector('#passCk');
        const passInform = document.querySelector('#passCkMessage');
        passInform.style.color = 'crimson';
        userPwCh.addEventListener('keyup', function(){
            if(userPw.value !== userPwCh.value) {
                passInform.innerHTML = '비밀번호가 일치하지 않습니다.';
            } else {
                passInform.innerHTML = ''
            }
        })
    }
    const OnIdCh = async (e) => {
        let userId = document.querySelector('#userId');
        const response = await axios.get(`${API_URL}/idCh`);
        const Iddb = response.data;
        let sameNum = 0;
        Iddb.forEach( id => {
            if(userId.value === id.userId){
                sameNum++;
            }
        });
        if(sameNum !== 0) {
            setFormData({
                ...formData,
                userId: "",
            })
            alert('중복아이디입니다.');
        } else {
            alert('사용가능한 아이디입니다.');
        }
    }
     // 폼 submit 이벤트
     const onSubmit = (e) => {
        if(window.confirm("가입하시겠습니까?")){
            e.preventDefault();
            if(isNaN(formData.userPhone)){
                alert("전화번호는 숫자만 입력해주세요");
                setFormData({
                    ...formData,
                    userPhone: ""
                })
            }
            else if(formData.userId !== "" && formData.userPass !== "" &&
            formData.userName !== "" && formData.userPhone !== "" &&
            formData.userMail !== ""){
                joinMember();
            }
            else {
                alert("모든 기입란에 기입해주세요");
            }
        } else{
            alert("가입이 취소되었습니다");
        }
    }
    function joinMember(){
        axios.post(`${API_URL}/join`,formData)
        .then((result)=>{
            console.log(result);
            navigate('/');  // 리다이렉션
        })
        .catch(e=>{
            console.log(e);
        })
    }
    return (
        <div>
            <Header2 />
            <div className='join'>
                <form onSubmit={onSubmit} className='joinform'>
                    <div className='small_menu'><span><Link to = "/">홈</Link></span><span>{'>'}</span><span>회원가입</span></div>
                    <h1>회원 가입</h1>
                    <table className='join_table'>
                        <tbody>
                            <tr>
                                <th>회원구분<span>*</span></th>
                                <td><input type="radio" checked readOnly/>개인회원</td>
                            </tr>
                        </tbody>
                    </table>
                    <h1>기본정보</h1>
                    <table className='join_table'>
                        <tbody>
                            <tr>
                                <th>아이디<span>*</span></th>
                                <td>
                                    <input name="userId" type="text" 
                                    id="userId"
                                    value={formData.userId}
                                    onChange={onChange}
                                    />
                                    <span type='text' id='doubleCk' className='white_btn' onClick={(e)=>{OnIdCh(e);}}>중복확인</span>
                                    <span className='small_span'>(영문소문자/숫자, 4~16자)</span>
                                </td>
                            </tr>
                            <tr>
                                <th>비밀번호<span>*</span></th>
                                <td>
                                    <input id='pass' name="userPass" type="password"
                                    value={formData.userPass}
                                    onChange={onChange}
                                    />
                                    <span className='small_span'>(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)</span>
                                </td>
                            </tr>
                            <tr>
                                <th>비밀번호 확인<span>*</span></th>
                                <td>
                                    <input id='passCk' name="userPassCk" type="password"
                                    value={formData.userPassCk}
                                    onChange={(e)=>{onChange(e); OnPwCh(e);}}
                                    />
                                    <span id='passCkMessage' className='small_span'></span>
                                </td>
                            </tr>
                            <tr>
                                <th>이름<span>*</span></th>
                                <td>
                                    <input name="userName" type="text"
                                    value={formData.userName || ''}
                                    onChange={onChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>주소</th>
                                <td className='search_Add'> 
                                    <input name="userPost" type="text"
                                    value={formData.userPost}
                                    placeholder="우편번호"
                                    onChange={onChange}
                                    />
                                    <button className='white_btn' type="button" onClick={openPostCode}>주소검색</button>
                                    <input name="userAdd" type="text"
                                    value={formData.userAdd}
                                    placeholder="기본주소"
                                    onChange={onChange}
                                    />
                                    <input name="userAdd2"type="text"
                                    value={formData.userAdd2}
                                    placeholder="나머지 주소(선택입력가능)"
                                    onChange={onChange}
                                    />  
                                    <div id="popupDom">
                                    {isPopupOpen && (
                                        <PopupDom>
                                            <PopupPostCode onClose={closePostCode}
                                            onAddData={onAddData}
                                            />
                                        </PopupDom>
                                    )}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>일반전화</th>
                                <td>
                                    <input name="userTel" type="text" 
                                    value={formData.userTel}
                                    onChange={onChange}
                                    />
                                    <span className='small_span'>(공백/기호없이 입력, 10자~12자)</span>
                                </td>
                            </tr>
                            <tr>
                                <th>휴대전화<span>*</span></th>
                                <td>
                                    <input name="userPhone" type="text" 
                                     value={formData.userPhone}
                                     onChange={onChange}
                                    />
                                    <span className='small_span'>(공백/기호없이 입력, 10자~12자)</span>
                                </td>
                            </tr>
                            <tr>
                                <th>이메일<span>*</span></th>
                                <td>
                                    <input name="userMail" type="text" 
                                     value={formData.userMail}
                                     onChange={onChange}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h1>추가정보</h1>
                    <table className='join_table'>
                        <tbody>
                            <tr>
                                <th>생년월일</th>
                                <td>
                                    <input name="userYear" type="text" value={formData.userYear} onChange={onChange}/>년
                                    <input name="userMonth" type="text" value={formData.userMonth} onChange={onChange}/>월
                                    <input name="userDay" type="text" value={formData.userDay} onChange={onChange}/>일
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='btn_div'>
                        <button className='form_btn' type="submit">회원가입</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JoinForm;