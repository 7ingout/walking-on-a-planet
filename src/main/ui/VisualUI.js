import React from 'react';
import Visual from '../components/Visual';
import './VisualUI.css'

const VisualUI = ( {visuals} ) => {
    return (
        <div className='visualUI'>
            <ul>
                {visuals.map(visual=> (
                    <Visual key = {visual.no} visual={visual} />
                ))}    
            </ul>
            <div id='slogan'>
                <div>세상의 끝이라 해도 나는 믿겠다</div>
                <div>누군가 그린 그림 속이라 해도 나는 믿겠다</div>
            </div>
        </div>
    );
};

export default VisualUI;