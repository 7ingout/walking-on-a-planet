import React from 'react';
import './Tips.css'

const Tips = () => {
    return (
        <div className='Tip'>
            <div className='Tip_h'>
                <div className='small_char'>TRAVEL TIPS</div>
                <div className='big_char'>Watch Me!</div>
                <div>view all Tips</div>
            </div>
            <ul>
                <li><img src='/luggage.jpg' alt='luggage'/></li>
                <li><img src='/luggage.jpg' alt='luggage'/></li>
                <li><img src='/luggage.jpg' alt='luggage'/></li>
            </ul>
        </div>
    );
};

export default Tips;