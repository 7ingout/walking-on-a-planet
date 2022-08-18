import React from 'react';
import './Tips.css'

const Tips = () => {
    return (
        <div className='Tip'>
            <div className='Tip_h'>
                <div className='small_char'>TRAVEL TIPS</div>
                <div className='big_char'>Watch Me!</div>
                <div>view all Tips</div>
            </div>
            <ul className='Tip_ul'>
                <li className='first_tip'>
                    <img src='/Tip/luggage.jpg' alt='luggage'/>
                    <div>작성자</div>
                    <div>여행 짐싸기 꿀팁 : 해외여행 준비물 리스트</div>
                    <div>2022-08-02</div>
                    <div>짐 싸기에 서툰 여행자라면, <br/>꼼꼼히 챙겼다 싶어도 두고 가는 물건이 한두개쯤 생긴다.</div>
                </li>
                <li className='second_tip'>
                    <img src='/Tip/plane.jpg' alt='luggage'/>
                    <div>작성자</div>
                    <div>해외 여행 잘하는 법</div>
                    <div>2022-08-02</div>
                    <div>저가항공과 호텔 예약만으로 떠나는 경우, 제대로 준비하지 않으면 도착 순간 길 잃은 양이 되기 쉽다.</div>
                </li>
                <li className='third_tip'>
                    <img src='/Tip/budget.jpg' alt='luggage'/>
                    <div>작성자</div>
                    <div>여행경비 어떻게 아끼지..?</div>
                    <div>2022-08-02</div>
                    <div>알아두면 무조건 '이득'되는 해외여행 시 경비 아끼는 팁</div>
                </li>
            </ul>
        </div>
    );
};

export default Tips;