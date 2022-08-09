import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../config/constant';
import Header from './Header';
import './AddTrip.css'
import { useParams, useNavigate } from 'react-router-dom';
import useAsync from '../customHook/useAsync';

const EditTrip = () => {
    const navigate = useNavigate(); // 리다이렉션
    const { cityNational } = useParams();
    const [ formData, setFormData ] = useState({
        cityImg:"",
        cityContinent:"",
        cityNational:"",
        cityDesc:"",
        cityDesc2:"",
        cityDesc3:"",
        cityMapImg:""
    })
    async function getTrips(cityNational){
        const response = await axios.get(`${API_URL}/destinations/${cityNational}`);
        return response.data;
    }  
    const [ state ] = useAsync(()=>getTrips(cityNational),[cityNational]);
    const { loading, data:trip, error } = state;
    useEffect(()=>{
        setFormData({
            cityImg: trip? trip.cityImg : "",
            cityContinent: trip? trip.cityContinent : "",
            cityNational: trip? trip.cityNational: "",
            cityDesc: trip? trip.cityDesc : "",
            cityDesc2: trip? trip.cityDesc2 : "",
            cityDesc3: trip? trip.cityDesc3 : "",
            cityMapImg: trip? trip.cityMapImg : "",
        })
    },[trip])
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    // const onChangeImg = (e) => {
    //     const file = e.target.files[0];
    //     const imgsrc = "image/"+file.name;
    //     setFormData({
    //         ...formData,
    //         c_imgsrc: imgsrc
    //     })
    // }
    const onSubmit = (e) => {
        if(window.confirm("수정하시겠습니까?")){
            // form에 원래 연결된 이벤트를 제거
            e.preventDefault();
            // input에 값이 있는지 체크하고
            // 입력이 다되어있으면 post전송
            if(formData.cityImg !== "" && formData.cityContinent !== "" &&
            formData.cityNational !== "" && formData.cityDesc !== "" &&
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
        axios.put(`${API_URL}/editTrip/${cityNational}`,formData)
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
    if(!trip) return null;
    return (
        <div className='AddTrip'>
        <Header />
        <div className='add_bg'><img src='/addbg.jpg' alt='destination' /></div>
        <div id='edit_header' className='add_header'>
            <h1>국가 정보 수정하기</h1>
            <div>Modifying Country Information</div>
        </div>
        <form onSubmit={onSubmit}className='addform'>
            <table className='add_table'>
                <tbody>
                    <tr>
                        <th>메인사진</th>
                        <td>
                        <div className='imgDiv'>
                                <div className='imgBox'>
                                    <div className='addimg'>
                                       
                                    </div>
                                </div>
                                <input type="file" id='editInput' className='imgInput' name="cityImg" />
                                    {
                                        formData.cityImg && <img src={`${API_URL}/upload/${formData.cityImg}`} alt="" className='imgview'/>
                                }
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <th>대륙</th>
                        <td>
                            <input name="cityContinent" type="text" 
                            value={formData.cityContinent}
                            onChange={onChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>국가</th>
                        <td>
                            <input name="cityNational" type="text"
                            value={formData.cityNational}
                            readOnly
                            id='noInput'
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>국가설명</th>
                        <td>
                            <textarea name="cityDesc" type="text" 
                            value={formData.cityDesc}
                            onChange={onChange}></textarea>
                        </td>
                    </tr>
                    <tr>
                        <th>관광정보</th>
                        <td>
                            <textarea  name="cityDesc2" type="text" 
                            value={formData.cityDesc2}
                            onChange={onChange}></textarea>
                        </td>
                    </tr>
                    <tr>
                        <th>교통정보</th>
                        <td>
                            <textarea name="cityDesc3" type="text" 
                            value={formData.cityDesc3}
                            onChange={onChange}></textarea>
                        </td>
                    </tr>
                    <tr>
                    <th>지도</th>
                            <td>
                            <div className='imgDiv'>
                                    <div className='imgBox'>
                                        <div className='addimg'>
                                            
                                        </div>
                                    </div>
                                    <input type="file" id='editInput' className='imgInput' name="cityMapImg" />
                                    {
                                        formData.cityMapImg && <img src={`${API_URL}/upload2/${formData.cityMapImg}`} alt="" className='imgview'/>
                                    }
                            </div>
                            </td>
                    </tr>
                </tbody>
            </table>
            <div className='btn_div'>
                    <button className='form_btn' type="submit">수정하기</button>
            </div>
        </form>
        </div>
    );
};

export default EditTrip;