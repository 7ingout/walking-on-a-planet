import React, { useEffect, useState } from 'react';
import Header from '../Header';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import useAsync from '../../customHook/useAsync';
import { API_URL } from '../../config/constant';
import './DetailGoods.css'
import { getCookie } from '../../util/cookie';

async function getDetail(no) {
    const response = await axios.get(`${API_URL}/usedtrade/${no}`);
    return response.data;
}

const DetailGoods = () => {
    const userId = getCookie('userId');
    const { no } = useParams();

    const navigate = useNavigate();
    const [ cartData, setCartData ] = useState({
        userId: userId,
        productName: "",
        productImg: "",
        productPrice: "",
        productSeller: ""
    })
    const [state] = useAsync(()=>getDetail(no), [no]);
    const { loading, data: good, error} = state;
    useEffect(()=>{
        setCartData({
            userId: good? userId : "",
            productName: good? good.productName : "",
            productImg: good? good.productImg : "",
            productPrice: good? good.productPrice : "",
            productSeller: good? good.productSeller : ""
        })
          //eslint-disable-next-line
    },[good])
    const onDelete = () => {
        if(window.confirm("삭제하시겠습니까?")){
            axios.delete(`${API_URL}/deleteGoods/${no}`)
            .then(result=>{
                console.log("삭제되었습니다.");
                navigate('/usedtrade'); // 리다이렉션 추가
            })
            .catch(e=>{
                console.log(e);
            })
        } else{
            alert("삭제가 취소되었습니다");
        }
    }
    function buyGoods(){
        if(window.confirm("장바구니에 담으시겠습니까?") && userId){
            axios.post(`${API_URL}/cart`, cartData)
            .then((result)=>{
                console.log(result);
            })
            .catch(e=>{
                console.log(e);
            })
            // if(window.confirm ("장바구니에 담겼습니다. 마이페이지로 이동하시겠습니까?")) {
            //     navigate(`/myPage/${userId}`);
            // }
        } 
         else {
            if(userId) alert("취소되었습니다.");
            else alert('로그인 후 이용바랍니다.')
        }
    }
    console.log(good);
    if(loading) return <div>로딩중입니다...</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!good) return null;
    return (
        <div className='DetailGoods'>
            <Header />
            <div className='trade_bg'><img src='/bg.jpg' alt='trade' /></div>
            <div className='trade_header'>
                <h1>상품 자세히보기</h1>
                <div>Detail Goods</div>
            </div>
            <div className='detail_box'>
                <div className='detail_left_box'>
                    <div className='detail_h'>
                        <h1>{good.productName}</h1>
                        <div><span>🌏</span>{good.productSeller}</div>
                        <div>작성일: {good.todayDate}</div>
                    </div>
                    <div className='detail_d'>
                        <div className='imgbox'>
                            <img src = {`${API_URL}/upload/${good.productImg}`} alt="img" />
                        </div>
                        <div>{good.productPrice}원</div>
                        <div className='goodsDesc'>{good.productDesc}</div>
                    </div>
                </div>
                <div className='detail_right_box'>
                        { userId !== `${good.productSeller}` || userId === 'admin' ? <div onClick={buyGoods} className='goodsbtn'>장바구니 담기</div> : ''}
                    <div>
                        { userId === `${good.productSeller}` || userId === 'admin' ?  <Link to={`/editGoods/${good.no}`}><div id='edit_goods' className='goodsbtn'>수정</div></Link> : ''}
                        { userId === `${good.productSeller}` || userId === 'admin' ? <div onClick={onDelete} className='goodsbtn'>삭제</div> : ''}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailGoods;