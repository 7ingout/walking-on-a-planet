import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Shop.css'

const Shop = () => {
    const isLogin = useSelector(state=>state.logincheck.isLogin);
    const Navigate = useNavigate();
    const goJoin = () => {
        if(isLogin) {
            alert("이미 로그인이 되어있습니다.")
        } else {
            Navigate('/join');
        }
    }
    return (
        <div className='shop'>
            <div className='shop_p'>
                <div className='small_p'>USED TRADE</div>
                <div className='large_p'>좋은 사람들의 성숙한 중고거래</div>
                <div className='small_p'>저마다의 취향이라는 세계 속에서<br/>
                모두가 행복해질 수 있도록,<br/>
                오늘도 Walking on a planet는 더 쉽고 안전한<br/>
                개인간 거래를 만들어갑니다.</div>
                <div><Link to ='/usedtrade'>view all goods</Link></div>
            </div>
            <ul className='join_box'>
                <li>
                    <ul className='inner_ul'>
                        <li>회원가입하고 중고거래 참여하기</li>
                        <li>여행자에게 영감을 줄 새로운 여행지를 찾아보세요. 또한 중고상점에서 질 좋은 상품들을 얻으실 수 있습니다. 매주 전문가의 조언, 팁, 독점 제공 등을 받으실 수 있습니다.</li>
                    </ul>
                </li>  
                <li className='btn'>
                    <div onClick={goJoin}>Sign Up</div>
                </li> 
            </ul>
        </div>
    );
};

export default Shop;