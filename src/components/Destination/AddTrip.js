import React, { useState } from 'react';
import Header from '../Header';
import './AddTrip.css'
import axios from "axios";
import { API_URL } from '../../config/constant';
import { useNavigate } from 'react-router-dom';

const AddTrip = () => {
    const navigate = useNavigate()
    const [ formData, setformData ] = useState({
        cityImg:"",
        cityContinent:"",
        cityNational:"",
        cityDesc:"",
        cityDesc2:"",
        cityDesc3:"",
        cityMapImg:""
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
        axios.post(`${API_URL}/upload`, imgFormData, {
            Headers: {'content-type':'multipart/form-data'},
        }).then (response=>{
            // setUploadImg(response.data.imageUrl);
            setformData({
                ...formData,
                cityImg: response.data.cityImg,
            })
        }).catch(e=>{
            console.log(e)
        })
    }
    const onChangeImg2 = (e) => {
        const { name } = e.target;
        const imgFormData = new FormData();
        imgFormData.append(name, e.target.files[0]);
        axios.post(`${API_URL}/upload2`, imgFormData, {
            Headers: {'content-type':'multipart/form-data'},
        }).then (response=>{
            // setUploadImg(response.data.imageUrl);
            setformData({
                ...formData,
                cityMapImg: response.data.cityMapImg
            })
        }).catch(e=>{
            console.log(e)
        })
    }
    const onSubmit = (e) => {
        if(window.confirm("등록하시겠습니까?")) {
            e.preventDefault();
            if(formData.cityContinent !== "" && formData.cityNational !=="" &&
            formData.cityImg !=="" && formData.cityDesc !=="" &&
            formData.cityDesc2 !=="" && formData.cityDesc3 !== "" &&
            formData.cityMapImg !== "")
             {
                addTrip();
             } else {
                alert("모든 기입란에 기입해주세요.")
             }
        } else {
            alert("등록이 취소되었습니다.")
        }
        function addTrip() {
            axios.post(`${API_URL}/addTrip`, formData)
            .then(res=> {
                alert('등록되었습니다.');
                navigate(-1);
            }).catch(e=> {
                console.log(e);
            })
        }
    }
    return (
        <div className='AddTrip'>
            <Header />
            <div className='add_bg'><img src='/addbg.jpg' alt='destination' /></div>
            <div className='add_header'>
                <h1>국가 등록하기</h1>
                <div>National Registration</div>
            </div>
            <form onSubmit={onSubmit} className='addform'>
                <table className='add_table'>
                    <tbody>
                        <tr>
                            <th>메인사진</th>
                            <td>
                            <div className='imgDiv'>
                                    <div className='imgBox'>
                                        <div className='addimg'>
                                            <img src='/addimg.png' alt='addimg'/>
                                        </div>
                                    </div>
                                    <input type="file" className='imgInput' name="cityImg" onChange={onChangeImg}/>
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
                                onChange={onChange}
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
                            <td className='flextd'>
                            <div className='imgDiv'>
                                    <div className='imgBox'>
                                        <div className='addimg'>
                                            <img src='/addimg.png' alt='addimg'/>
                                        </div>
                                    </div>
                                    <input type="file" className='imgInput' name="cityMapImg" onChange={onChangeImg2}/>
                                    {
                                        formData.cityMapImg && <img src={`${API_URL}/upload2/${formData.cityMapImg}`} alt="" className='imgview'/>
                                    }
                            </div>
                            <div>
                                <a href='https://www.amcharts.com/visited_countries/' target="_blank" rel='noreferrer'><div className='createMap'>지도 구하러가기</div></a>
                                <div className='exp'>* 바다색은 #DEF2FD 국가색은 #0057d9 사용</div>
                            </div>
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

export default AddTrip;