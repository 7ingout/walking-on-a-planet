import React from 'react';
import './Visual.css'

const Visual = () => {
    return (
        <div className='visual'>
            <div className='visual_box'>
                <div id='first_pic'>
                    <img src='/Africa_말라위.jpg' alt='Africa'/>
                    <p className='pic_title'>
                        동아프리카 지구대 
                        <br/>최남단에 위치한 호수
                        <br/>말라위 호 (Lake Malawi)
                        <span className='arrow'><img src='/arrow.png' alt='arrow'/></span>
                    </p>
                </div>
                <div>
                    <img src='부다페스트_캐슬디스트릭트.jpg' alt='부다페스트'/>
                    <p className='pic_title'>
                        유네스코 세계문화유산으로 지정된
                        <br/>과거 국왕들의 거주지
                        <br/>헝가리
                        <br/>부다 성 (Castle District)
                        <span className='arrow'><img src='/arrow.png' alt='arrow'/></span>
                    </p>
                </div>
                <div>
                    <img src='/Bolivia_우유니사막.jpg' alt='Bolivia'/>
                    <p className='pic_title'>
                        세상에서 가장 큰 거울 
                        <br/>볼리비아
                        <br/>우유니 소금사막 (Salar de Uyuni)
                        <span className='arrow'><img src='/arrow.png' alt='arrow'/></span>
                    </p>
                </div>
            </div>
            <div id='slogan'>
                <div>세상의 끝이라 해도 나는 믿겠다</div>
                <div>누군가 그린 그림 속이라 해도 나는 믿겠다</div>
            </div>
        </div>
    );
};

export default Visual;