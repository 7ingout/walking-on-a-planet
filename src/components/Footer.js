import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='Footer'>
            <ul className='big_ul'>
                <li>
                    <div className='Footer_box'>
                        <h1>Walking On a Planet</h1>
                        <div>나를 찾아 떠나는 여행</div>
                        <div>FOLLOW US</div>
                        <ul className='sns_menu'>
                            <li><img src='/icon/facebook.png' alt='facebook'/></li>
                            <li><img src='/icon/instagram.png' alt='instagram'/></li>
                            <li><img src='/icon/twiter.png' alt='twiter'/></li>
                            <li><img src='/icon/youtube.png' alt='youtube'/></li>
                            <li><img src='/icon/line.png' alt='line'/></li>
                        </ul>
                        <div>SUBSCRIBE</div>
                        <div>영감을 줄 여행지 찾아보기</div>
                        <div><Link to='/join'>Sign Up</Link></div>
                        <div>Subscribe to Walking On a Planet newsletters and promotions. Read our Privacy Policy.</div>
                    </div>
                </li>
                <li>
                    <ul>
                        <li className='bold'>TOP DESTINATIONS</li>
                        <li><Link to='/trips/말라위'>Malawi</Link></li>
                        <li><Link to='/trips/헝가리'>Hungary</Link></li>
                        <li><Link to='/trips/헝가리'>Bolivia</Link></li>
                        <li><Link to='/trips/이탈리아'>Italy</Link></li>
                        <li><Link to='/trips/오스트리아'>Austria</Link></li>
                        <li><Link to='/trips/독일'>Germany</Link></li>
                        <li><Link to='/trips/브라질'>Brazil</Link></li>
                        <li><Link to='/trips/몽골'>Mongolia</Link></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li className='bold'>TRAVEL STORY</li>
                        <li><Link to='/event'>event</Link></li>
                        {/* <li>tip</li> */}
                    </ul>
                </li>
                <li>
                    <ul>
                        <li className='bold'>SHOP</li>
                        <li><Link to='/usedtrade'>used trade</Link></li>
                        <li id='la_li' className='bold'>ABOUT US</li>
                        <li className='lala_li'><Link to='/about'>About Walking On a Planet</Link></li>
                    </ul>
                </li>
            </ul>
            <div className='inner_container'>
                <div className='Footer_bottom'>© 2022 Walking on a planet. All rights reserved. No part of this site may be reproduced without our written permission.</div>
                <div className='Footer_bottom2'>© 2022 Walking on a planet. All rights reserved.</div>
            </div>
        </div>
    );
};

export default Footer;