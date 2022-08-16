import React from 'react';
import { Link } from 'react-router-dom';
import './Destinations.css';
import { API_URL } from '../../config/constant.js';

const Destinations = ( {trip} ) => {
    // console.log(trip.cityImg)
    return (
        <li className='des_li'>
            <Link to={`/trips/${trip.cityNational}`} >
                <img src = {`${API_URL}/upload/${trip.cityImg}`} alt="img" />
                <div className='small_char'>{trip.cityContinent}</div>
                <div className='big_char'>{trip.cityNational}</div>
            </Link> 
        </li>
  
    );
};

export default Destinations;