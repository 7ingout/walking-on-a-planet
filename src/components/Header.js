import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <ul className='search_box'>
                <li><img src='/search.png' alt='search'/></li>
                <li>Search</li>
            </ul>
            <h1>
                Walking <span><img src='/Earth.png' alt='earth'/></span>n a planet
            </h1>
            <ul className='menu_box'>
                {/* <li>Destinations</li> */}
                <li>shop</li>
                <li>login</li>
                <li>join</li>
            </ul>
        </div>
    );
};

export default Header;