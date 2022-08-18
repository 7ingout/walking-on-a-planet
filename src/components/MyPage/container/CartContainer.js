import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarts } from '../../../modules/cart';
import CartUI from '../ui/CartUI';

const CartContainer = () => {
    const { data, loading, error } = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCarts());
    }, [dispatch])
    if(loading) return <div className='spinner_bg'><div className="spinner"><div className="double-bounce1"></div><div className="double-bounce2"></div></div></div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return null
    console.log(data);
    // console.log(data.length);
    const length = data.length
    return (
        <div>
            <CartUI carts={data} len={length}/>
        </div>
    );
};

export default CartContainer;