import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../../config/constant';
import useAsync from '../../customHook/useAsync';
import { getCookie } from '../../util/cookie';

const EditProfile = () => {
    const navigate = useNavigate(); // 리다이렉션
    const { userId } = useParams();
    userId = getCookie('userId');
    const [ formData, setFormData ] = useState({
        userId: userId,
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
    async function getProfile(userId){
        const response = await axios.get(`${API_URL}/member/${userId}`);
        return response.data;
    }  
    const [ state ] = useAsync(()=>getProfile(userId),[userId]);
    const { loading, data:inform, error } = state;
    useEffect(()=>{
        setFormData({
            userId: inform? userId : "",
            userPass: "",
            userPassCk: "",
            userName: inform? inform.userName: "",
            userPost: inform? inform.userPost: "",
            userAdd: inform? inform.userAdd: "",
            userAdd2: inform? inform.userAdd2: "",
            userTel: inform? inform.userTel: "",
            userPhone: inform? inform.userPhone: "",
            userMail: inform? inform.userMail: "",
            userYear: inform? inform.userYear: "",
            userMonth: inform? inform.userMonth: "",
            userDay: inform? inform.userDay: "",
        })
    },[inform])
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const onSubmit = (e) => {
        if(window.confirm("수정하시겠습니까?")){
            // form에 원래 연결된 이벤트를 제거
            e.preventDefault();
            // input에 값이 있는지 체크하고
            // 입력이 다되어있으면 post전송
            if(formData.userName !== "" && formData.userPass !== "" &&
            formData.userPass !== "" && formData.cityDesc !== "" &&
            formData.cityDesc2 !== "" && formData.cityDesc3 !== "" && 
            formData.cityMapImg !== ""){
                updateTrip();
            }
            else {
                alert('모든 기입란에 기입해주세요');
            }
        } else{
            alert("수정이 취소되었습니다");
        }   
    }
    function updateTrip(){
        axios.put(`${API_URL}/editProfile/${userId}`,formData)
        .then((result)=>{
            console.log(result);
            navigate(-1); // 리다이렉션 추가
        })
        .catch(e=>{
            console.log(e);
        })
    }
    if(loading) return <div>로딩중</div>
    if(error) return <div>페이지를 나타낼 수 없습니다.</div>
    if(!inform) return null;
    return (
        <div>
            
        </div>
    );
};

export default EditProfile;