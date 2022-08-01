import React from 'react';
import Recommand from './components/Recommand';
import Visual from './components/Visual';
import Event from './components/Event';
import Tip from './components/Tip';

const Index = () => {
    return (
        <>
            <Visual />
            <Recommand />
            <Event/>
            <Tip/>
        </>
    );
};

export default Index;