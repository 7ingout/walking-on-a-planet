import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCookie } from '../../util/cookie';
import Destinations2 from './Destinations2';
import './DestinationsUI.css'

const DestinationsUI = ( {trips} ) => {
    const userId = getCookie('userId');
    const Navigate = useNavigate();
    const [ formData, setformData ] = useState({
        searchInput:""
    });
    const onChange = (e) => {
        const { name, value } = e.target;
        setformData({
            ...formData,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(formData.searchInput === "") {
            alert("검색어를 입력해주세요.")
        } else {
            Navigate(`/search/${formData.searchInput}`, {
                state: {
                    search: `${formData.searchInput}`
                }
            })
        }
    }
    return (
        <div className='destination'>
            <div className='des_bg'><img src='/destinations/desbg2.jpg' alt='destination' /></div>
            <div className='des_header'>
                <h1>어디로 떠나고 싶으신가요?</h1>
                <div>Explore places on Walking On a Planet</div>
            </div>
            <div className='des_box'>
                <form onSubmit={onSubmit} className='searchform'>
                    <div className='des_search'>
                        <input name="searchInput" type='text' value={formData.searchInput} onChange={onChange} placeholder='Search places'/>
                        <button type="submit"><img src='/destinations/search3.png' alt='serach'/></button>
                    </div>
                </form>
                { userId === 'admin' ? <Link to='/addTrip'><div className='addTrip'>국가 추가하기</div></Link> : ''}
            </div>
            <Link to='/destinations'><div id='alldes'>전체 국가보기</div></Link>
            <ul>
                {trips.map(trip=> (
                    <Destinations2 key = {trip.no} trip={trip} />
                ))}   
            </ul>
        </div>
    );
};

export default DestinationsUI;