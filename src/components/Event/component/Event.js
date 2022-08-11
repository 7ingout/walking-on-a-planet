import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Event.css'
import AOS from 'aos';
import { API_URL } from '../../../config/constant.js';

const Event = ( {event} ) => {
    useEffect(()=> {
        AOS.init({
            duration : 1200
        });
    })
    return (
        <li data-aos="fade-up" className='event_li'>
        <Link to={`/events/${event.userId}`} >
            <div className='li_img'>
                <img src = {`${API_URL}/upload/${event.eventImg}`} alt="img" />
                <div className='goBig'>보러가기</div>
                <ul id='pic_ul'>
                    <li>{event.eventTitle}</li>
                    <li>|<span>{event.userId}</span></li>
                </ul>
            </div>
          
          
        </Link> 
    </li>
    );
};

export default Event;