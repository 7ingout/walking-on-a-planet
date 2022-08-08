import React from 'react';
import './Destinations.css';

const Destinations = ( {trip} ) => {
    return (
        <li className='des_li'>
            <img src={trip.cityImg} alt='cityImg'/>
            <div className='small_char'>{trip.cityContinent}</div>
            <div className='big_char'>{trip.cityNational}</div>
        </li>
    );
};

export default Destinations;