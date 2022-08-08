import React from 'react';
import Destinations from './Destinations';
import './DestinationsUI.css'

const DestinationsUI = ( {trips} ) => {
    
    return (
        <div className='destination'>
            <div className='des_bg'><img src='/destinations/desbg.jpg' alt='destination' /></div>
            <div className='des_header'>
                <h1>어디로 떠나고 싶으신가요?</h1>
                <div>Explore places on Walking On a Planet</div>
            </div>
            <div className='des_box'>
                <div className='des_search'>
                    <input placeholder='Search places'/>
                    <img src='/destinations/search3.png' alt='serach'/>
                </div>   
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