import React, { useState } from 'react';
import Header from '../Header';
import './AddGoods.css'
import axios from "axios";
import { API_URL } from '../../config/constant';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../util/cookie';

const AddGoods = () => {
    const userId = getCookie('userId');
    const navigate = useNavigate();
    var today = new Date(); 
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var dateString = year + '-' + month  + '-' + day;
    const [ formData, setformData ] = useState({
        productImg:"",
        productName:"",
        productSeller: userId,
        productPrice:"",
        productDesc:"",
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
        axios.post(`${API_URL}/upload3`, imgFormData, {
            Headers: {'content-type':'multipart/form-data'},
        }).then (response=>{
            // setUploadImg(response.data.imageUrl);
            setformData({
                ...formData,
                productImg: response.data.productImg,
            })
        }).catch(e=>{
            console.log(e)
        })
    }
    const onSubmit = (e) => {
        if(window.confirm("등록하시겠습니까?")) {
            e.preventDefault();
            if(isNaN(formData.productPrice)){
                alert("가격은 숫자만 입력해주세요");
                setformData({
                    ...formData,
                    productPrice: "",
                })
            } else if(formData.productImg !== "" && formData.productName !== "" &&
            formData.productPrice !== "" && formData.productDesc) {
                addGoods();
            } else {
                alert("모든 기입란에 기입해주세요.")
            }
        } else {
            alert("등록이 취소되었습니다.")
        }
    }
    function addGoods() {
        axios.post(`${API_URL}/addGoods`, formData)
        .then(res=> {
            alert('등록되었습니다.');
            navigate(-1);
        }).catch(e=> {
            console.log(e);
        })
    }
    return (
        <div className='AddGoods'>
        <Header />
        <div className='trade_bg'><img src='/bg.jpg' alt='trade' /></div>
            <div className='trade_header'>
                <h1>상품 등록하기</h1>
                <div>Used Trade</div>
        </div>
        <form onSubmit={onSubmit} className='addform'>
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
                        <th>상품사진</th>
                        <td>
                        <div className='imgDiv'>
                                <div className='imgBox'>
                                    <div className='addimg'>
                                        <img src='/addimg.png' alt='addimg'/>
                                    </div>
                                </div>
                                <input type="file" className='imgInput' name="productImg" onChange={onChangeImg}/>
                                    {
                                        formData.productImg && <img src={`${API_URL}/upload/${formData.productImg}`} alt="" className='imgview'/>
                                }
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <th>상품이름</th>
                        <td>
                            <input name="productName" type="text" 
                            value={formData.productName}
                            onChange={onChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>판매자</th>
                        <td>
                            <input name="productSeller" type="text"
                            value={userId}
                            onChange={onChange}
                            readOnly
                            id='noInput'
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>상품가격</th>
                        <td>
                        <input name="productPrice" type="text"
                            value={formData.productPrice}
                            onChange={onChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>상품설명</th>
                        <td>
                            <textarea  name="productDesc" type="text" 
                            value={formData.productDesc}
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

export default AddGoods;