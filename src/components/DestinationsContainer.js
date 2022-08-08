import React, { useEffect } from 'react';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { getTrips } from '../modules/trips';
import DestinationsUI from './DestinationsUI';

const DestinationsContainer = () => {
    const { data, loading, error } = useSelector(state => state.trips.trips);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getTrips());
    }, [dispatch])
    if(loading) return <div>로딩중입니다..</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>null</div>
    return (
        <div>
            <Header />
            <DestinationsUI trips={data}/>
        </div>
    );
};

export default DestinationsContainer;