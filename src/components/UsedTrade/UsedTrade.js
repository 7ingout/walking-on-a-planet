import React from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../config/constant.js';
import './UsedTrade.css'

const UsedTrade = ( {good} ) => {
    return (
        <li className='trade_li'>
            <Link to={`/usedtrade/${good.no}`} >
                <div className='goodsimg'>
                    <img src = {`${API_URL}/upload/${good.productImg}`} alt="goods" />
                </div>
                <div className='small_char'>{good.productSeller}</div>
                <div className='big_char'>{good.productName}</div>
                <div className='how_many'><span>장바구니에 담아놓은 사람 수</span>{good.reserve}명</div>
            </Link> 
        </li>
    );
};

export default UsedTrade;