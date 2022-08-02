import React from 'react';
import Recommand from './components/Recommand';
import Visual from './components/Visual';
import Event from './components/Event';
import Tips from './components/Tips';
import Shop from './components/Shop';
import Pics from './components/Pics';

const Index = () => {
    return (
        <>
            <Visual />
            <Recommand />
            <Event/>
            <Tips/>
            <Shop />
            <Pics/>
        </>
    );
};

export default Index;