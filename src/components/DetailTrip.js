import React from 'react';
import Header from './Header';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import useAsync from '../customHook/useAsync';
import { API_URL } from '../config/constant';
import './DetailTrip.css'
import { getCookie } from '../util/cookie';

async function getDetail(cityNational) {
    const response = await axios.get(`${API_URL}/destinations/${cityNational}`);
    return response.data;
}

const DetailTrip = () => {
    const userId = getCookie('userId');
    const { cityNational } = useParams();
    const [state] = useAsync(()=>getDetail(cityNational), [cityNational]);
    const { loading, data: trip, error} = state;
    const navigate = useNavigate();
    console.log(cityNational);

    const onDelete = () => {
        if(window.confirm("삭제하시겠습니까?")){
            axios.delete(`${API_URL}/deleteTrip/${cityNational}`)
            .then(result=>{
                console.log("삭제되었습니다.");
                navigate('/destinations'); // 리다이렉션 추가
            })
            .catch(e=>{
                console.log(e);
            })
        } else{
            alert("삭제가 취소되었습니다");
        }
    }
    if(loading) return <div>로딩중입니다...</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!trip) return null;
    return (
        <div className='detialTrip'>
            <Header />
            <div className='detailBg'>
                <img src = {`${API_URL}/upload/${trip.cityImg}`} alt="img" />
            </div>
            <div className='detail_box'>
                <div className='detail_h'>
                    <div>
                        <div>{trip.cityContinent}</div>
                        <h1>{trip.cityNational}</h1>
                    </div>
                    <div className='editdelete'>
                        { userId === 'admin' ? <Link to={`/editTrip/${trip.cityNational}`}><div className='tripDiv'>수정하기</div></Link> : ''}
                        { userId === 'admin' ? <div onClick={onDelete} className='tripDiv'>삭제하기</div> : ''}
                    </div>
                </div>
                <div className='detail_d'>
                    <div className='cityDesc'>{trip.cityDesc}</div>
                    <h3>관광</h3>
                    <div>{trip.cityDesc2}</div>
                    <h3>교통</h3>
                    <div>{trip.cityDesc3}</div>
                    <div className='cityMap'>
                    <img src = {`${API_URL}/upload/${trip.cityMapImg}`} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailTrip;