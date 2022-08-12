import React, { useEffect, useState } from 'react';
import Header2 from '../Header2';
import { API_URL } from '../../config/constant';
import axios from 'axios';
import { getCookie } from '../../util/cookie';
import { useNavigate, useParams } from 'react-router-dom';
import useAsync from '../../customHook/useAsync';
import './DetailEvent.css'
import { useSelector } from 'react-redux';

async function getBigPic(userId) {
    const response = await axios.get(`${API_URL}/event/${userId}`);
    return response.data;
}

const DetailEvent = () => {
    const isLogin = useSelector(state=>state.logincheck.isLogin);
    const userId2 = getCookie('userId');
    console.log(userId2);
    var { userId } = useParams();
    const navigate = useNavigate();
    const [ eventData, setEventData ] = useState({
        userId: "",
        eventTitle: "",
        regdate: "",
        eventImg: "",
        eventDesc: "",
        good: ""
    })
    console.log(eventData);
    const [state] = useAsync(()=>getBigPic(userId), [userId]);
    const { loading, data: big, error} = state;
    useEffect(()=>{
        setEventData({
            userId: big? big.userId : "",
            eventTitle: big? big.eventTitle : "",
            regdate: big? big.regdate : "",
            eventImg: big? big.eventImg : "",
            eventDesc: big? big.eventDesc : "",
            good: big? big.good : ""
        })
          //eslint-disable-next-line
    },[big])
    const onDelete = () => {
        if(window.confirm("삭제하시겠습니까?")){
            axios.delete(`${API_URL}/deleteEvent/${userId2}`)
            .then(result=>{
                console.log("삭제되었습니다.");
                navigate('/event'); // 리다이렉션 추가
            })
            .catch(e=>{
                console.log(e);
            })
        } else{
            alert("삭제가 취소되었습니다");
        }
    }
    const goodClick = () => {
        if(isLogin && userId !== userId2) {
            axios.put(`${API_URL}/good/${userId}`)
            .then(result=>{
                window.location.reload();
            })
            .catch(e=>{
                console.log(e);
            })
        } else if(isLogin === false){
            alert("로그인 후 이용가능합니다.")
        }      
        else {
            alert("본인 게시물은 추천할 수 없습니다.")
        }

    }
   
    if(loading) return <div>로딩중입니다...</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!big) return null;
    return (
        <div className='DetailEvent'>
            <Header2 />
                <div className='detail_d'>
                    <div className='imgbox'>
                        <img src = {`${API_URL}/upload/${big.eventImg}`} alt="img" />
                    </div>
                    <div className='detailh'>
                        <div className='btns'>
                        {/* { userId !== `${big.userId}` || userId === 'admin' ? <div className='goodsbtn'>추천하기</div> : ''} */}
                            <div onClick={goodClick} className='imgd'><img src='/good.png' alt='good'/></div>
                            <div>추천수 <span>{big.good}</span></div>
                        </div>
                        <div className='goRight'>{ userId2 === `${big.userId}` || userId2 === 'admin' ? <div onClick={onDelete} className='btn'>삭제</div> : ''}</div>
                    </div>
                    <div className='detail_h'>
                        <h1>{big.eventTitle}</h1>
                        <div><span>🌏{big.userId}</span></div>
                        <div>등록일: {big.regdate}</div>
                    </div>
                    <h4>사진설명</h4>
                    <div className='Desc'>{big.eventDesc}</div>

                </div>
                {/* <div className='how_many'><span>장바구니에 담아놓은 사람 수</span>{good.reserve}명</div> */}
            </div>
    );
};

export default DetailEvent;