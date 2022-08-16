import React from 'react';
import VisualContainer from './container/VisualContainer';
import RecommandContainer from './container/RecommandContainer';
import Event from './components/Event';
// import Tips from './components/Tips';
import Shop from './components/Shop';
import PicContainer from './container/PicContainer';
import Header from '../components/Header';
import MapIndex from '../components/map/MapIndex';

const Index = ( {trips} ) => {
    // Indi
    // Indi Style
    const style = {
        position: 'fixed',
        top: '50%',
        transform: 'translateY(-50%)',
        right:'30px',
        width: '50px',
        zIndex:'2'
    }
    const li_style = {
        width: '15px',
        height: '15px',
        background: 'transperent',
        border: '1px solid #aaa',
        margin: '15px 0',
        borderRadius: '25px',
        cursor: 'pointer'
    }
    // Indi Scroll
    const visual = () => window.scrollTo({top:0, left:0, behavior:'auto'});
    // const recommand = () => window.scrollTo({top:805, left:0, behavior:'auto'});
    const event = () => window.scrollTo({top:1530, left:0, behavior:'auto'});
    // const tips = () => window.scrollTo({top:2480, left:0, behavior:'auto'});
    // const shop = () => window.scrollTo({top:3500, left:0, behavior:'auto'})
    const shop = () => window.scrollTo({top:2480, left:0, behavior:'auto'})
    const map = () => window.scrollTo({top:3680, left:0, behavior:'auto'})
    const pics = () => window.scrollTo({top:4980, left:0, behavior:'auto'})
    // /Indi
    return (
        <div className='index'>
            <Header/>
            <VisualContainer />
            <RecommandContainer />
            <Event />
            {/* <Tips /> */}
            <Shop />
            <MapIndex />
            <PicContainer />
            <ul style={style} className='indi'>
                <li style={li_style} onClick={visual}></li>
                {/* <li style={li_style} onClick={recommand}></li> */}
                <li style={li_style} onClick={event}></li>
                {/* <li style={li_style} onClick={tips}></li> */}
                <li style={li_style} onClick={shop}></li>
                <li style={li_style} onClick={map}></li>
                <li style={li_style} onClick={pics}></li>
            </ul>
            
        </div>
    );
};

export default Index;