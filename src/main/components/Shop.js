import React from 'react';
import { Link } from 'react-router-dom';
import './Shop.css'

const Shop = () => {
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
                        <li>회원가입하고 20% 할인 쿠폰 받기</li>
                        <li>여행자에게 영감을 줄 새로운 여행지를 찾아보세요. 또한 중고상점에서 20% 할인을 받으실 수 있습니다. 매주 전문가의 조언, 팁, 독점 제공 등을 받으실 수 있습니다.</li>
                    </ul>
                </li>  
                <li className='btn'>
                    <Link to='/join'>Sign Up</Link>
                </li> 
            </ul>
        </div>
    );
};

export default Shop;