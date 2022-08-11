import React, { useEffect } from 'react';
import Header from '../../Header';
import EventUI from '../EventUI.js/EventUI';
import { useSelector, useDispatch } from 'react-redux';
import { getEvents } from '../../../modules/event';

const EventContainer = () => {
    const { data, error, loading } = useSelector(state=>state.event);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getEvents(dispatch))
    },[dispatch])
    if(loading) return <div>로딩중입니다.</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return null
    return (
        <div>
            <Header />
            <EventUI events={data} />
        </div>
    );
};

export default EventContainer;