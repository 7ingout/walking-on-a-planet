import React from 'react';
import Recommand from './components/Recommand';
import Visual from './components/Visual';
import Event from './components/Event';
import Tips from './components/Tips';

const Index = () => {
    return (
        <>
            <Visual />
            <Recommand />
            <Event/>
            <Tips/>
        </>
    );
};

export default Index;