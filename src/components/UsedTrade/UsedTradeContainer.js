import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGoods } from '../../modules/usedtrade';
import Header from '../Header';
import UsedTradeUI from './UsedTradeUI';

const UsedTradeContainer = () => {
    const { data, error, loading } = useSelector(state=>state.goods);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getGoods(dispatch))
    },[dispatch])
    if(loading) return <div className='spinner_bg'><div className="spinner"><div className="double-bounce1"></div><div className="double-bounce2"></div></div></div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return null
    return (
        <div>
            <Header />
            <UsedTradeUI goods={data}/>
        </div>
    );
};

export default UsedTradeContainer;