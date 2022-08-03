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
                        <div>For Explorers Everywhere</div>
                        <div>FOLLOW US</div>
                        <ul className='sns_menu'>
                            <li><img src='/facebook.png' alt='facebook'/></li>
                            <li><img src='/instagram.png' alt='instagram'/></li>
                            <li><img src='/twiter.png' alt='twiter'/></li>
                            <li><img src='/youtube.png' alt='youtube'/></li>
                            <li><img src='/line.png' alt='line'/></li>
                        </ul>
                        <div>SUBSCRIBE</div>
                        <div>20% 할인 쿠폰 받기</div>
                        <div><Link to='/join'>Sign Up</Link></div>
                        <div>Subscribe to Walking On a Planet newsletters and promotions. Read our Privacy Policy.</div>
                    </div>
                </li>
                <li>
                    <ul>
                        <li className='bold'>TOP DESTINATIONS</li>
                        <li>New York City</li>
                        <li>Paris</li>
                        <li>Italy</li>
                        <li>Japan</li>
                        <li>Chicago</li>
                        <li>Amsterdan</li>
                        <li>England</li>
                        <li>Germany</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li className='bold'>TRAVEL STORY</li>
                        <li>our story</li>
                        <li>landscape photography</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li className='bold'>SHOP</li>
                        <li>used trade</li>
                        <li id='la_li' className='bold'>ABOUT US</li>
                        <li className='lala_li'>About Walking On a Planet</li>
                    </ul>
                </li>
            </ul>
            <div className='inner_container'>
                <div className='Footer_bottom'>© 2022 Walking on a planet. All rights reserved. No part of this site may be reproduced without our written permission.</div>
            </div>
        </div>
    );
};

export default Footer;