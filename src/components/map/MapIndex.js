import React, { useState } from 'react';
import MapChart from './MapChart';
import ReactTooltip from "react-tooltip";
import './Map.css'
const MapIndex = () => {
    const [content, setContent] = useState("");
    return (
        <div className="bluebg">
            <h1>World Map</h1>
            <div className='exp'>지도 위에 마우스를 올리면 국가 이름을 보실 수 있습니다.</div>
            <div className="map">
                <MapChart setTooltipContent={setContent} />
                <ReactTooltip>{content}</ReactTooltip>
            </div>
            <div className='ivorybg'></div>
            <div className='graybg'></div>
        </div>
    );
};

export default MapIndex;