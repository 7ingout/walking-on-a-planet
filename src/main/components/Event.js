import React, { useEffect } from 'react';
import AOS from 'aos';
import "../../aos.css";
import './Event.css'
import { Link } from 'react-router-dom';

const Event = () => {
    useEffect(()=> {
        AOS.init({
            duration : 2200
        });
    })
    return (
        <div className='Event'>
            <div className='Event_img'>
                <img src='/people.png' alt='backpacking'/>
                <div className='Event_title'>
                    <div className='small_title'>Walking on a planet</div>
                    <div className='middle_title'>BEST IN TRAVEL</div>
                    <div className='large_title' data-aos="zoom-in">2022</div>
                </div>
                <ul>
                    <li>여러분의 멋있는 여행사진을 보여주세요. 추천을 가장 많이 받은 우승자에게는 특별한 선물이 주어집니다. 참가하신 모든 분들을 대상으로 추첨을 통해 경품을 드리고 있으니 많이 참가해주세요.</li>
                    <li><Link to='/event'>보러가기</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Event;