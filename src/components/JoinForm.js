import React, {useState} from 'react';
import Header2 from './Header2';
import { Link, useNavigate } from 'react-router-dom';
import './JoinForm.css'
import PopupDom from "./PopupDom"
import PopupPostCode from "./PopupPostCode"

const JoinForm = () => {
    const navigate = useNavigate(); // 리다이렉션
    const [ formData, setFormData ] = useState({
        userId: "",
        userPass: "",
        userName: "",
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
            c_add: data.address
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
    
    return (
        <div>
            <Header2 />
            <div className='join'>
                <form className='joinform'>
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
                                    value={formData.userId}
                                    onChange={onChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>비밀번호<span>*</span></th>
                                <td>
                                    <input name="userPass" type="password"
                                    value={formData.userPass}
                                    onChange={onChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>비밀번호 확인<span>*</span></th>
                                <td>
                                    <input name="userPassCk" type="password"
                                    value={formData.userPassCk}
                                    onChange={onChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>이름<span>*</span></th>
                                <td>
                                    <input name="userName" type="text"
                                    value={formData.userName}
                                    onChange={onChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>주소</th>
                                <td> 
                                    <input name="userAdd" type="text"
                                    value={formData.userAdd}
                                    onChange={onChange}
                                    />
                                    <input name="userAdd2"type="text"
                                    value={formData.userAdd2}
                                    onChange={onChange}
                                    />  
                                    <button type="button" onClick={openPostCode}>우편번호 검색</button>
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
                                </td>
                            </tr>
                            <tr>
                                <th>휴대전화<span>*</span></th>
                                <td>
                                    <input name="userPhone" type="text" 
                                     value={formData.userPhone}
                                     onChange={onChange}
                                    />
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