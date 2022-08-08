import React, { useEffect } from 'react';
import './EventUI.css'
import "../aos.css";
import AOS from 'aos';

const EventUI = () => {
    useEffect(()=> {
        AOS.init({
            duration : 2200
        });
    })
    return (
        <div className='EventUI'>
            <div className='Eventbg'>
                <img src='/people.png' alt='people'/>
                <div className='Event_title'>
                    <div className='middle_title'>BEST IN TRAVEL</div>
                    <div className='large_title' data-aos="zoom-in">2022</div>
                </div>
            </div>
        </div>
    );
};

export default EventUI;