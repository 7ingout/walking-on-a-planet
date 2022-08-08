import React, { useEffect } from 'react';
import AOS from 'aos';
import "../../aos.css";
import './Recommand.css'

const Recommand = ( {recommand} ) => {
    useEffect(()=> {
        AOS.init({
            duration : 2000
        });
    })
    return (
        <li className='Recommand'>
            <ul data-aos="fade-up">
                <li><img className='recommand_img' src={recommand.cityImg} alt='cityImg' /></li>
                <li className='li_un'>{recommand.cityNational}</li>    
            </ul>
        </li>
    );
};

export default Recommand;