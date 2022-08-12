import React, { useState } from 'react';
import Header2 from '../Header2';
import axios from "axios";
import '../UsedTrade/AddGoods.css'
import { API_URL } from '../../config/constant';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../util/cookie';

const AddEvent = () => {
    const userId = getCookie('userId');
    const navigate = useNavigate();
    var today = new Date(); 
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var dateString = year + '-' + month  + '-' + day;
    const [ formData, setformData ] = useState({
        userId: userId,
        eventImg:"",
        eventTitle:"",
        eventDesc: "",
        todayDate: dateString
    });
    const onChange = (e) => {
        const { name, value } = e.target;
        setformData({
            ...formData,
            [name]: value
        })
    }
    const onChangeImg = (e) => {
        const { name } = e.target;
        const imgFormData = new FormData();
        imgFormData.append(name, e.target.files[0]);
        axios.post(`${API_URL}/upload4`, imgFormData, {
            Headers: {'content-type':'multipart/form-data'},
        }).then (response=>{
            // setUploadImg(response.data.imageUrl);
            setformData({
                ...formData,
                eventImg: response.data.eventImg,
            })
        }).catch(e=>{
            console.log(e)
        })
    }
    const onSubmit = (e) => {
        if(window.confirm("등록하시겠습니까?")) {
            e.preventDefault();
            if(formData.eventImg !== "" && formData.eventTitle !== "" &&
            formData.eventDesc !== "" ) {
                addEvents();
            } else {
                alert("모든 기입란에 기입해주세요.")
            }
        } else {
            alert("등록이 취소되었습니다.")
        }
    }
    function addEvents() {
        axios.post(`${API_URL}/addEvent`, formData)
        .then(res=> {
            alert('등록되었습니다.');
            navigate(-1);
        }).catch(e=> {
            console.log(e);
        })
    }
    return (
        <div id='AddEvent' className='AddGoods'>
            <Header2 />
            <h1 id='EventH'>이미지 등록</h1>
            <form onSubmit={onSubmit} id="eventform" className='addform'>
                <table className='add_table'>
                    <tbody>
                        <tr>
                            <th>등록일</th>
                            <td>
                                <input name="todayDate" type="text" 
                                value={formData.todayDate}
                                onChange={onChange}
                                readOnly
                                id='noInput'
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>사진</th>
                            <td>
                            <div className='imgDiv'>
                                    <div className='imgBox'>
                                        <div className='addimg'>
                                            <img src='/addimg.png' alt='addimg'/>
                                        </div>
                                    </div>
                                    <input type="file" className='imgInput' name="eventImg" onChange={onChangeImg}/>
                                        {
                                            formData.eventImg && <img src={`${API_URL}/upload/${formData.eventImg}`} alt="" className='imgview'/>
                                    }
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <th>제목</th>
                            <td>
                                <input name="eventTitle" type="text" 
                                value={formData.eventTitle}
                                onChange={onChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>올린이</th>
                            <td>
                                <input name="userId" type="text"
                                value={userId}
                                onChange={onChange}
                                readOnly
                                id='noInput'
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>사진설명</th>
                            <td>
                                <textarea  name="eventDesc" type="text" 
                                value={formData.eventDesc}
                                onChange={onChange}></textarea>
                            </td>
                        </tr>
        
                    </tbody>
                </table>
                <div className='btn_div'>
                        <button className='form_btn' type="submit">등록하기</button>
                </div>
            </form>
        </div>
    );
};

export default AddEvent;