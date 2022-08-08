import React from 'react';
import Recommand from '../components/Recommand';
import './RecommandUI.css'
import { Link } from 'react-router-dom';

const RecommandUI = ( {recommands} ) => {
    return (
        <div className='RecoomandUI'>
            <div className='recommand_h'>
                <div className='small_char'>PLAN YOUR TRIP</div>
                <div className='big_char'>Where to next?</div>
                <div><Link to='/destinations'>view all destinations</Link></div>
            </div>
            <ul>
                {recommands.map(recommand=> (
                    <Recommand key = {recommand.no} recommand={recommand} />
                ))}    
            </ul>
        </div>
    );
};

export default RecommandUI;