import React from 'react';
import CartPost from '../ui/CartPost';
import MyPostUI from '../ui/MyPostUI';

const MyPostContainer = () => {
    return (
        <div>
            <MyPostUI />
            <h2>중고거래</h2>
            <CartPost />
        </div>
    );
};

export default MyPostContainer;