import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './EventUI.css'
import "../../../aos.css";
import AOS from 'aos';
import Event from '../component/Event'
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../../util/cookie';


const EventUI = ( {events} ) => {
    const userId = getCookie('userId');
    console.log(userId);
    const navigate = useNavigate();
    const isLogin = useSelector(state=>state.logincheck.isLogin);
    console.log(events);
    const nameArr = [];
    events.map(event=> (
        nameArr.push(event.userId)
    ))
    var double = false;
    double = nameArr.includes(userId) === true ? true : false ;
    console.log(double)
    useEffect(()=>{
        AOS.init({
            duration : 2200
        });
    })
    const goPage = () => {
        if(isLogin && double === false) {
            navigate('/addEvent');
        }
        else if(double) {
            alert("이미 참여한 아이디입니다.")
        }
       else {
            alert("로그인 후 이용가능합니다.")
       }
    }
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
            <div className='goodd'>
                
                <div className='good'>* 한 아이디당 참여는 한번만 가능합니다.</div>
                <div>
                    <div onClick={goPage} className='addPics'>이벤트 참여하기</div>
                </div>
            </div>
            <div className='inform'>
                <div>* 게시물 삭제는 가능하나 수정이 불가하니 신중히 올려주세요.</div>
                <div>* 추천순입니다.</div>
            </div>
            <ul>
                {events.map(event=> (
                    <Event key = {event.no} event={event} />
                ))}   
            </ul>
        </div>
    );
};

export default EventUI;