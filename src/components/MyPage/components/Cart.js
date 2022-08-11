import React from 'react';
import { API_URL } from '../../../config/constant';
import './Cart.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Cart = ( {cart} ) => {
    var { no } = useParams();
    no = cart.no;
    var { name } = useParams();
    name = cart.productName;
    const onDelete = () => {
        console.log(no)
        if(window.confirm("삭제하시겠습니까?")){
            axios.delete(`${API_URL}/deleteCarts/${no}`)
            .then(result=>{
                console.log("삭제되었습니다.");
                window.location.reload();
            })
            .catch(e=>{
                console.log(e);
            })
            axios.put(`${API_URL}/minusCart/${name}`)
            .then((result)=>{
                console.log(result);
            })
            .catch(e=>{
                console.log(e);
            })
        } else{
            alert("삭제가 취소되었습니다");
        }
    }
    return (
        <tr className='cart_tr'>
            <td><div><img src = {`${API_URL}/upload/${cart.productImg}`} alt="img" /></div></td>
            <td>{cart.productName}</td>
            <td>{cart.productSeller}</td>
            <td>{cart.productPrice}</td>
            <td onClick={onDelete}>삭제</td>
        </tr>
    );
};

export default Cart;