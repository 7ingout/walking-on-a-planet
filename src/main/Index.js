import React from 'react';
import Recommand from './components/Recommand';
import Visual from './components/Visual';
import Event from './components/Event';
import Tips from './components/Tips';
import Shop from './components/Shop';
import Pics from './components/Pics';

const Index = () => {
    const style = {
        position: 'absolute',
        bottom:"0",
        left:'0',
        width: '450px',
        height: '200px',
        background: 'pink',
        zIndex:'2'
    }
    const li_style = {
        fontSize: '50px'
    }
    const visual = () => window.scrollTo({top:0, left:0, behavior:'auto'});
    const recommand = () => window.scrollTo({top:805, left:0, behavior:'auto'});
    const event = () => window.scrollTo({top:1550, left:0, behavior:'auto'});
    return (
        <>
            <ul style={style}>
                <li style={li_style} onClick={visual}>dddd</li>
                <li style={li_style} onClick={recommand}>fff</li>
                <li style={li_style} onClick={event}>fff</li>
            </ul>
            <Visual />
            <Recommand />
            <Event />
            <Tips />
            <Shop />
            <Pics/>
        </>
    );
};

export default Index;