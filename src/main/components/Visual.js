import React from 'react';
import './Visual.css'

const Visual = ( {visual} ) => {
    return (
        <li className='Visual'>
            <img className='visual_img' src={visual.cityImg} alt='cityImg' />
            <div className='pic_title'>
                <div>{visual.cityShortD}</div>
                <div>{visual.cityShortD2}</div>
                <div>{visual.cityNational}</div>
                <div>{visual.cityName}</div>
            </div>
            <span className='arrow'><img src='/icon/arrow.png' alt='arrow'/></span>
        </li>
    );
};

export default Visual;