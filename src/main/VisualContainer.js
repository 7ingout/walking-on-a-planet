import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTrips } from '../modules/trips';
import Index from './Index';

const IndexContainer = () => {
    const { data, loading, error } = useSelector(state => state.trips.trips);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getTrips());
    }, [dispatch])
    if(loading) return <div>로딩중입니다..</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return null
    return (
        <Index trips={data} />
    );
};

export default IndexContainer;