import React from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../config/constant.js';
import './UsedTrade.css'

const UsedTrade2 = ( {good} ) => {
    return (
        <li className='trade_li'>
            <Link to={`/usedtrade/${good.no}`} >
                <div className='goodsimg'>
                    <img src = {`${API_URL}/upload/${good.productImg}`} alt="goods" />
                </div>
                <div className='small_char'>{good.productSeller}</div>
                <div className='big_char'>{good.productName}</div>
                <div className='how_many'>{good.reserve}명<span>예약중</span></div>
            </Link> 
        </li>
    );
};

export default UsedTrade2;