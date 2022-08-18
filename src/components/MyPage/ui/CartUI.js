import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAsync from '../../../customHook/useAsync';
import { getCookie } from '../../../util/cookie';
import Cart from '../components/Cart';
import './CartUI.css'
import axios from 'axios';
import { API_URL } from '../../../config/constant';

async function getTotal(userId) {
    const response = await axios.get(`${API_URL}/total/${userId}`);
    return response.data;
}

const CartUI = ( {carts, len} ) => {
    var userId = useParams();
    userId = getCookie('userId');

    const style = {
        paddingBottom: "120px"
    }

    const [ totalData, setTotalData ] = useState({
        total: "",
    })
    const [state] = useAsync(()=>getTotal(userId), [userId]);
    const { loading, data, error} = state;
    console.log(data)
    useEffect(()=>{
        setTotalData({
            total: data? data.total : "",
        })
          //eslint-disable-next-line
    },[data])
    // console.log(totalData);
    // const [ total ] = data[0];
    // console.log(total)
    if(loading) return <div className='spinner_bg'><div className="spinner"><div className="double-bounce1"></div><div className="double-bounce2"></div></div></div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return null;

    return (
        <div className='cartUI'>
            <h1>장바구니</h1>
                <table className='cart_table'>
                    <tbody>
                        { len > 0 ? 
                            <>
                                <tr>
                                    <th>상품사진</th>
                                    <th>품명</th>
                                    <th>판매자</th>
                                    <th>가격</th>
                                </tr>
                                {carts.map(cart => (
                                <Cart key= {cart.no} cart={cart} />
                                ))}
                                <tr className='total'>
                                    {/* <td>전체 가격</td> */}
                                    <td colSpan={5}><span>전체 가격</span>{totalData.total}원</td>
                                </tr>
                                <tr className='buy_tr'>
                                    <td colSpan={5}><div className='buy'>결제하기</div></td>
                                </tr>
                            </>
                            :
                            <tr>
                                <td colSpan={5}  style={style}>
                                    장바구니에 담겨있는 상품이 없습니다.
                                </td>
                            </tr>
                        }
                        </tbody>
                </table>
        </div>
    );
};

export default CartUI;