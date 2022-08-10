import React from 'react';
import { Link } from 'react-router-dom';
import './UsedTradeUI.css'
import UsedTrade from './UsedTrade';

const UsedTradeUI = ( {goods} ) => {
    return (
        <div className='usedTrade'>
            <div className='trade_bg'><img src='/bg.jpg' alt='trade' /></div>
            <div className='trade_header'>
                <h1>중고물품 거래</h1>
                <div>Used Trade</div>
            </div>
            <div className='trade_box'>
                <Link to='/addGoods'><div className='addGoods'>상품 판매하기</div></Link>
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