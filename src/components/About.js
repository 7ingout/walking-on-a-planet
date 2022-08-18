import React from 'react';
import Header2 from './Header2';
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <Header2 />
            <div className='about_div'>
                <div className='bg'>
                    <h1>ABOUT</h1>
                    <ul>
                        <li>
                        <span>Walking On a Planet</span><br/>
                        우리는 모든 경험을<br/> 연결하여 여행을<br/> 혁신합니다.
                        </li>
                        <li>
                            당신이 어려워하는 그 일은
                            우리가 가장<br/> 잘할 수 있는 일이기도 합니다.<br/>
                            Walking On a Planet은 여행을 떠나기 위해<br/> 필요한 모든 것을 한 곳에서
                            검색하고 각종<br/>여행물품을 중고거래 할 수 있는 국내 최고의<br/> Travel Website 입니다.
                            모든 여행 경험을<br/> 연결하여 새로운 여행 방식을 만들어갑니다.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;