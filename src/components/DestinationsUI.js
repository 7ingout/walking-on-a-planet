import React from 'react';
import { Link } from 'react-router-dom';
import { getCookie } from '../util/cookie';
import Destinations from './Destinations';
import './DestinationsUI.css'

const DestinationsUI = ( {trips} ) => {
    const userId = getCookie('userId');
    return (
        <div className='destination'>
            <div className='des_bg'><img src='/destinations/desbg2.jpg' alt='destination' /></div>
            <div className='des_header'>
                <h1>어디로 떠나고 싶으신가요?</h1>
                <div>Explore places on Walking On a Planet</div>
            </div>
            <div className='des_box'>
                <div className='des_search'>
                    <input placeholder='Search places'/>
                    <img src='/destinations/search3.png' alt='serach'/>
                </div>
                { userId === 'admin' ? <Link to='/addTrip'><div className='addTrip'>국가 추가하기</div></Link> : ''}
            </div>
            <ul>
                {trips.map(trip=> (
                    <Destinations key = {trip.no} trip={trip} />
                ))}   
            </ul>
        </div>
    );
};

export default DestinationsUI;