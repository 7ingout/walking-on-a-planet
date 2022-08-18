import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './UsedTradeUI.css'
import Header from '../Header';
import { getCookie } from '../../util/cookie';
import { getMy } from '../../modules/my';
import UsedTrade2 from './UsedTrade2';

const MyTrade = () => {
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
    const goAll = () => {
        navigate('/usedtrade')
    }
    const { data, error, loading } = useSelector(state=>state.my.my);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getMy(dispatch))
    },[dispatch])
    if(loading) return <div className='spinner_bg'><div className="spinner"><div className="double-bounce1"></div><div className="double-bounce2"></div></div></div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return null
    return (
        <div>
            <Header />
            <div className='usedTrade'>
            <div className='trade_bg'><img src='/bg.jpg' alt='trade' /></div>
            <div className='trade_header'>
                <h1>중고물품 거래</h1>
                <div>Used Trade</div>
            </div>
            <div className='trade_box'>
                { userId ? <div onClick={goAll} className='addGoods'>전체 상품보기</div> : "" }
                <div onClick={goPage} className='addGoods'>상품 판매하기</div>
            </div>
            <ul>
                {data.map(good=> (
                    <UsedTrade2 key = {good.no} good={good} />
                ))}   
            </ul>
        </div>
        </div>
    );
};

export default MyTrade;