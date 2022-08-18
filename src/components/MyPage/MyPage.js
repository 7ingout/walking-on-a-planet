import React from 'react';
import { getCookie } from '../../util/cookie';
import Header from '../Header';
import CartContainer from './container/CartContainer';
import './MyPage.css'

const MyPage = () => {
    const userId = getCookie('userId');
    return (
        <div className='MyPage'>
            <Header />
            <div className='myHeader'>
                <img src = '/cartbg.jpg' alt='cartbg'/>
                <div className='myH'>
                    <h1>{userId}님의 마이페이지</h1>
                    <div>Welcome Waling On a Planet</div>
                </div>
            </div>
            <CartContainer />
        </div>
    );
};

export default MyPage;