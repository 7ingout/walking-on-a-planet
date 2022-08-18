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
    const [mailCk, setMailCk] = useState(false);
    const emailCk = (e) =>  {
        const text = document.querySelector('#email');
        const mailInform = document.querySelector('#mailCkMessage');
        //eslint-disable-next-line
        var regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        mailInform.style.color = 'crimson';
        if (regEmail.test(text.value) === true) {
            mailInform.innerHTML = '';
            setMailCk(true);
        }else {
            mailInform.innerHTML = '이메일 형식이 아닙니다.';
            setMailCk(false);
        }
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
    const [ idCk, setidCk ] = useState(false);
    const OnIdCh = async (e) => {
        let userId = document.querySelector('#userId');
        const response = await axios.get(`${API_URL}/idCh`);
        const Iddb = response.data;
        let sameNum = 0;
        var regId = /^[A-Za-z0-9]{8,12}$/;		
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
        } else if(userId.value === null || userId.value === '') {
            alert('아이디를 입력해주세요.');
        } else if(!regId.test(userId.value)) {
            alert('영문/숫자 8~12자 이내로 입력');	
        }
        else {
            alert('사용가능한 아이디입니다.');
            setidCk(true);
        }
    }
    function phoneNumber(e) {
        var { name, value } = e.target;
        // if (!value) {
        //   return "";
        // }
        value = value.replace(/[^0-9]/g, "");
        let result = [];
        let restNumber = "";

        // 지역번호와 나머지 번호로 나누기
        if (value.startsWith("02")) {
          // 서울 02 지역번호
          result.push(value.substr(0, 2));
          restNumber = value.substring(2);
        } else if (value.startsWith("1")) {
          // 지역 번호가 없는 경우
          // 1xxx-yyyy
          restNumber = value;
        } else {
          // 나머지 3자리 지역번호
          // 0xx-yyyy-zzzz
          result.push(value.substr(0, 3));
          restNumber = value.substring(3);
        }
     
        if (restNumber.length === 7) {
          // 7자리만 남았을 때는 xxx-yyyy
          result.push(restNumber.substring(0, 3));
          result.push(restNumber.substring(3));
        } else {
          result.push(restNumber.substring(0, 4));
          result.push(restNumber.substring(4));
        }
        value = result.filter((val) => val).join("-");
        setFormData({
            ...formData,
            [name]:value
        })
        return value;
      }
     // 폼 submit 이벤트
     const onSubmit = (e) => {

        if(window.confirm("가입하시겠습니까?")){
            e.preventDefault();
            // if(isNaN(formData.userPhone)){
            //     alert("전화번호는 숫자만 입력해주세요");
            //     setFormData({
            //         ...formData,
            //         userPhone: ""
            //     })
            // }
            if(formData.userId !== "" && formData.userPass !== "" &&
            formData.userName !== "" && formData.userPhone !== "" &&
            formData.userMail !== ""){
                if(idCk && mailCk){
                    joinMember();
                } else if(!idCk) {
                    alert('아이디 중복확인을 해주세요.')
                } else if(!mailCk) {
                    alert('이메일 형식을 확인해주세요')
                } 
                // else if( !result ) {
                //     alert("비밀번호 정규식 규칙 위반!!");
                // }
            }
            else {
                // alert("모든 기입란에 기입해주세요");
                alert("* 표시가 붙은 항목에 모두 기입주세요");
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
                                <td><input type="radio" id='right' checked readOnly/>개인회원</td>
                            </tr>
                        </tbody>
                    </table>
                    <h1>기본정보<br/><span>* 표시가 붙은 항목은 필수기입란입니다.</span></h1>
                    <table id='join_table2' className='join_table'>
                        <tbody>
                            <tr>
                                <th>아이디<span>*</span></th>
                                <td>
                                    <input name="userId" type="text" 
                                    id="userId"
                                    value={formData.userId}
                                    onChange={onChange}
                                    placeholder="영문/숫자 모두 포함, 8~12자 이내로 입력"
                                    />
                                    <span type='text' id='doubleCk' className='white_btn' onClick={(e)=>{OnIdCh(e);}}>중복확인</span>
                                    {/* <span className='small_span'>(영문소문자/숫자, 4~16자)</span> */}
                                </td>
                            </tr>
                            <tr>
                                <th>비밀번호<span>*</span></th>
                                <td>
                                    <input id='pass' name="userPass" type="password"
                                    value={formData.userPass}
                                    onChange={onChange}
                                    placeholder='최소 8자, 하나 이상의 문자와 숫자'
                                    />
                                    {/* <span className='small_span'>(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)</span> */}
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
                                    <button id='addbtn' className='white_btn' type="button" onClick={openPostCode}>주소검색</button>
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
                                    // onChange={onChange}
                                    onChange={phoneNumber}
                                    />
                                    <span className='small_span'>(숫자만 입력, 10자~12자)</span>
                                </td>
                            </tr>
                            <tr>
                                <th>휴대전화<span>*</span></th>
                                <td>
                                    <input name="userPhone" type="text" 
                                     value={formData.userPhone}
                                    //  onChange={onChange}
                                    onChange={phoneNumber}
                                    />
                                    <span className='small_span'>(숫자만 입력, 10자~12자)</span>
                                </td>
                            </tr>
                            <tr>
                                <th>이메일<span>*</span></th>
                                <td>
                                    <input name="userMail" type="text" 
                                     value={formData.userMail}
                                     onChange={(e)=>{onChange(e); emailCk(e);}}
                                     id="email"
                                     placeholder='aaa@email.com 형식으로 입력'
                                    />
                                     <span id='mailCkMessage' className='small_span'></span>
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