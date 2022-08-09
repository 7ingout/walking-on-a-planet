import React, { useEffect } from 'react';
import Header from './Header';
import DestinationsUI from './DestinationsUI';
import { useSelector, useDispatch } from 'react-redux';
import { getTrip } from '../modules/trip';

const DestinationsContainer = () => {
    const { data, error, loading } = useSelector(state=>state.trip);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getTrip(dispatch))
    },[dispatch])
    if(loading) return <div>로딩중입니다.</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return null
    return (
        <div>
            <Header />
            <DestinationsUI trips={data}/>
        </div>
    );
};

export default DestinationsContainer;