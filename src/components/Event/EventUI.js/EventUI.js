import React, { useEffect } from 'react';
import './EventUI.css'
import "../../../aos.css";
import AOS from 'aos';
import Event from '../component/Event'

const EventUI = ( {events} ) => {
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
                    <div>여러분의 멋있는 여행사진을 보여주세요. 추천을 가장 많이 받은 우승자에게는 특별한 선물이 주어집니다. 참가하신 모든 분들을 대상으로 추첨을 통해 경품을 드리고 있으니 많이 참가해주세요.</div>
                </div>
            </div>
            <div className='good'>* 추천순입니다.</div>
            <ul>
                {events.map(event=> (
                    <Event key = {event.no} event={event} />
                ))}   
            </ul>
        </div>
    );
};

export default EventUI;