import React from 'react';
import { Link } from 'react-router-dom';
import './Header2.css'

const Header2 = () => {
    return (
        <div className='header2'>
            <ul className='search_box'>
                <li><img src='/search2.png' alt='search'/></li>
                <li>Search</li>
            </ul>
            <h1>
                <Link to = "/">Walking <span><img src='/Earth2.png' alt='earth'/></span>n a Planet</Link>
            </h1>
            <ul className='menu_box'>
                <li>story</li>
                <li>shop</li>
                <li>login</li>
                <li><Link to = "/join">join</Link></li>
            </ul>
        </div>
    );
};

export default Header2;