import React, { useEffect } from 'react';
import AOS from 'aos';
import "../aos.css";
import './Recommand.css'

const Recommand = () => {
    useEffect(()=> {
        AOS.init({
            duration : 2000
        });
    })
    return (
        <div className='recommand'>
            <div className='recommand_h'>
                <div className='small_char'>PLAN YOUR TRIP</div>
                <div className='big_char'>Where to next?</div>
                <div>view all destinations</div>
            </div>
            <div className='pics'>
                <ul>
                    <li className='mo_li'>
                        <ul data-aos="fade-up">
                            <li><img src='/뉴질랜드_onetreehill.jpg' alt='뉴질랜드'/></li>
                            <li className='li_un'>뉴질랜드</li>    
                        </ul>
                    </li>
                    <li className='mo_li'>
                        <ul data-aos="fade-up">
                            <li><img src='/니카라과.jpg' alt='니카라과'/></li>
                            <li className='li_un'>니카라과</li>
                        </ul>
                    </li>
                    <li className='mo_li'>
                        <ul data-aos="fade-up">
                            <li><img src='/카리브제도_Playa Flamenco.jpg' alt='카리브제도'/></li>
                            <li className='li_un'>카리브제도</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Recommand;