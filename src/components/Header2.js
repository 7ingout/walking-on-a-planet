import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLogout } from '../modules/logincheck';
import { getCookie, removeCookie } from '../util/cookie';
import './Header2.css'

const Header2 = () => {
    const userId = getCookie('userId');
    const isLogin = useSelector(state=>state.logincheck.isLogin);
    const dispatch = useDispatch();
    const logoutClick = () => {
        removeCookie('userName');
        removeCookie('userId');
        dispatch(setLogout());
        window.location.reload();
        alert('로그아웃되었습니다.')
    }
    useEffect(()=>{
        // setLogin(true);
    },[isLogin]);

    const openSearch = () => {
        const search = document.querySelector('.search_div');
        search.style.display = 'flex';
    }
    const closeSearch = () => {
        const search = document.querySelector('.search_div');
        search.style.display = 'none';
    }
    return (
        <div className='header2'>
            <ul onClick={openSearch} className='search_box'>
                <li><img src='/icon/search2.png' alt='search'/></li>
                <li>Search</li>
            </ul>
            <div className='search_div'>
                <div>
                    <div className='small_search_div'>
                        <input className='small_search' />
                    </div>
                    <span onClick={closeSearch} className='close_btn'>×</span>
                    <div className='search_ul'>
                        <h3>Where to Next?</h3>
                        <ul>
                            <li><span></span>뉴질랜드</li>
                            <li><span></span>니카라과</li>
                            <li><span></span>카리브제도</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h1>
                <Link to = "/">Walking <span><img src='/icon/Earth2.png' alt='earth'/></span>n a Planet</Link>
            </h1>
            <ul className='menu_box'>
                <li><Link to ='/event'>event</Link></li>
                <li><Link to='/destinations'>destinations</Link></li>
                <li>shop</li>
                { isLogin &&
                    <>
                        <li>{userId}</li>
                        <li onClick={logoutClick}>logout</li>
                        {/* <li><Link to="/">회원정보수정</Link></li> */}
                    </>
                }
                { isLogin ||
                    <>
                        <li><Link to="/login">login</Link></li>
                        <li><Link to = "/join">join</Link></li>
                    </>
                }
            </ul>
        </div>
    );
};

export default Header2;