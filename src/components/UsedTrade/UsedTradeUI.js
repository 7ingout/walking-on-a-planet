import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './UsedTradeUI.css'
import UsedTrade from './UsedTrade';
import { getCookie } from '../../util/cookie';

const UsedTradeUI = ( {goods} ) => {
    const userId = getCookie('userId');
    const navigate = useNavigate();
    const isLogin = useSelector(state=>state.logincheck.isLogin);
    const goPage = () => {
        if(isLogin) {
            navigate('/addGoods');
        }
       else {
            alert("로그인 후 이용가능합니다.")
       }
    }
    const goMy = () => {
        navigate(`/my/${userId}`)
    }
    return (
        <div className='usedTrade'>
            <div className='trade_bg'><img src='/bg.jpg' alt='trade' /></div>
            <div className='trade_header'>
                <h1>중고물품 거래</h1>
                <div>Used Trade</div>
            </div>
            <div className='trade_box'>
                { userId ? <div onClick={goMy} className='addGoods'>내가 내놓은 상품보기</div> : "" }
                <div onClick={goPage} className='addGoods'>상품 판매하기</div>
            </div>
            <ul>
                {goods.map(good=> (
                    <UsedTrade key = {good.no} good={good} />
                ))}   
            </ul>
        </div>
    );
};

export default UsedTradeUI;