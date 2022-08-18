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
    if(loading) return <div className='spinner_bg'><div className="spinner"><div className="double-bounce1"></div><div className="double-bounce2"></div></div></div>
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