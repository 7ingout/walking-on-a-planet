import React from 'react';
import './Tip.css'

const Tip = () => {
    return (
        <div className='Tip'>
            <div className='Tip_h'>
                <div className='small_char'>TRAVEL TIPS</div>
                <div className='big_char'>Watch Me!</div>
                <div>view all Tips</div>
            </div>
            <ul>
                <li><img src='/luggage.jpg' alt='luggage'/></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
};

export default Tip;