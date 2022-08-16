import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setLogout } from '../modules/logincheck';
import { getCookie, removeCookie } from '../util/cookie';
import './Header.css'

const Header = () => {
    const Navigate = useNavigate();
    const userId = getCookie('userId');
    const isLogin = useSelector(state=>state.logincheck.isLogin);
    const dispatch = useDispatch();
    const logoutClick = () => {
        removeCookie('userName');
        removeCookie('userId');
        dispatch(setLogout());
        Navigate('/');
        alert('로그아웃되었습니다.')
    }
    console.log(isLogin);
    const openSearch = () => {
        const search = document.querySelector('.search_div');
        search.style.display = 'flex';
    }
    const closeSearch = () => {
        const search = document.querySelector('.search_div');
        search.style.display = 'none';
    }
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
        <div className='header'>
            <ul onClick={openSearch} className='search_box'>
                <li><img src='/icon/search.png' alt='search'/></li>
                <li>Search</li>
            </ul>
            <div className='search_div'>
                <div>
                    <form onSubmit={onSubmit} className='searchform'>
                        <div className='small_search_div'>
                            <input name="searchInput" type='text' value={formData.searchInput} onChange={onChange} className='small_search' />
                        </div>
                        <button type="submit"></button>
                        <span onClick={closeSearch} className='close_btn'>×</span>
                    </form>
                    <div className='search_ul'>
                        <h3>Where to Next?</h3>
                        <ul>
                            <li><Link to='/trips/뉴질랜드'><span></span>뉴질랜드</Link></li>
                            <li><Link to='/trips/이탈리아'><span></span>이탈리아</Link></li>
                            <li><Link to='/trips/카리브제도'><span></span>카리브제도</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <h1>
                <Link to = "/">Walking <span><img src='/icon/Earth.png' alt='earth'/></span>n a Planet</Link>
            </h1>
            <ul className='menu_box'>
                <li><Link to ='/event'>event</Link></li>
                <li><Link to = "/destinations">destinations</Link></li>
                <li><Link to = '/usedtrade'>shop</Link></li>
                { isLogin &&
                    <>
                        <li><Link to = {`/myPage/${userId}`}>{userId}</Link></li>
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

export default Header;