import React, { useEffect, useState } from 'react';
import Header from '../Header';
import { useLocation, useParams } from 'react-router-dom';
import DestinationsUI2 from './DestinationsUI2';
import { API_URL } from '../../config/constant';
import axios from 'axios';
import useAsync from '../../customHook/useAsync';

async function getSearch(search) {
    const response = await axios.get(`${API_URL}/search/${search}`);
    return response.data;
}


const SearchDestinaions = () => {
    const location = useLocation();
    var { search } = useParams();
    search = location.state.search;
    const [ searchData, setSearchData ] = useState({
        cityImg:"",
        cityContinent:"",
        cityNational:"",
        cityDesc:"",
        cityDesc2:"",
        cityDesc3:"",
        cityMapImg:"",
        cityName: ""
    })
    console.log(searchData);
    const [state] = useAsync(()=>getSearch(search), [search]);
    const { loading, data: trips, error} = state;
    useEffect(()=>{
        setSearchData({
            cityImg: trips? trips.cityImg : "",
            cityContinent: trips? trips.cityContinent : "",
            cityNational: trips? trips.citynational : "",
            cityDesc: trips? trips.cityDesc : "",
            cityDesc2: trips? trips.cityDesc2 : "",
            cityDesc3: trips? trips.cityDesc3 : "",
            cityMapImg: trips? trips.cityMapImg : "",
            cityName: trips? trips.cityName : "",
        })
          //eslint-disable-next-line
    },[trips])
    console.log(trips);
    if(loading) return <div>로딩중입니다...</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!trips) return null;
    return (
        <div>
            <Header />
            <DestinationsUI2 trips={trips} />
        </div>
    );
};

export default SearchDestinaions;