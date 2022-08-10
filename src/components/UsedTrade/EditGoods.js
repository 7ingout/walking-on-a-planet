import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config/constant';
import Header from '../Header';
import './EditGoods.css'
import { useParams, useNavigate } from 'react-router-dom';
import useAsync from '../../customHook/useAsync';
import { getCookie } from '../../util/cookie';

const EditGoods = () => {
    const userId = getCookie('userId');
    const { no } = useParams();
    const navigate = useNavigate();
    var today = new Date(); 
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var dateString = year + '-' + month  + '-' + day;
    const [ formData, setFormData ] = useState({
        productImg:"",
        productName:"",
        productSeller: userId,
        productPrice:"",
        productDesc:"",
        todayDate: dateString
    });
    console.log(formData.todayDate)
    async function getGoods(no){
        const response = await axios.get(`${API_URL}/usedtrade/${no}`);
        return response.data;
    }  
    const [ state ] = useAsync(()=>getGoods(no),[no]);
    const { loading, data:product, error } = state;
    useEffect(()=>{
        setFormData({
            productImg: product? product.productImg : "",
            productName: product? product.productName : "",
            productSeller: product? userId : "",
            productPrice: product? product.productPrice : "",
            productDesc: product? product.productDesc : "",
            todayDate: product? dateString : ""
        })
    //eslint-disable-next-line
    },[product])
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
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
        }).then(response=>{
            // setUploadImg(response.data.imageUrl);
            setFormData({
                ...formData,
                productImg: response.data.productImg
            })
        })
        .catch(e=>{
            console.log(e)
        })
    }

    const onSubmit = (e) => {
        if(window.confirm("수정하시겠습니까?")){
            // form에 원래 연결된 이벤트를 제거
            e.preventDefault();
            // input에 값이 있는지 체크하고
            // 입력이 다되어있으면 post전송
            if(formData.productImg !== "" && formData.productName !== "" &&
            formData.productPrice !== "" && formData.productDesc !== "" ){
                updateGoods();
            }
            else {
                alert('모든 기입란에 기입해주세요');
            }
        } else{
            alert("수정이 취소되었습니다");
        }   
    }
    function updateGoods(){
        axios.put(`${API_URL}/editGoods/${no}`,formData)
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
    if(!product) return null;
    return (
<div className='EditGoods'>
        <Header />
        <div className='trade_bg'><img src='/bg.jpg' alt='trade' /></div>
            <div className='trade_header'>
                <h1>상품 수정하기</h1>
                <div>Used Trade</div>
        </div>
        <form onSubmit={onSubmit} className='addform'>
            <table className='add_table'>
                <tbody>
                    <tr>
                        <th>수정일</th>
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

export default EditGoods;