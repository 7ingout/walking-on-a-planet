import React from 'react';
import './PicUI.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Link } from 'react-router-dom';

const PicUI = ( {pics} ) => {
    return (
        <div className='PicUI'>
            <ul className='gallery_h'>
                <li><h1>#나를 찾아 떠나는 여행</h1></li>
                <li>Walking On a Planet</li>
            </ul>
            <Swiper
             slidesPerView={3}
             spaceBetween={30}
             slidesPerGroup={3}
             loop={true}
             loopFillGroupWithBlank={true}
             pagination={{
             clickable: true,
             }}
             navigation={true}
             modules={[Pagination, Navigation, Autoplay]}
             className="mySwiper"
             autoplay={{delay: 5000}}>
                {pics.map(pic=> (
                    <SwiperSlide key = {pic.no}>
                        <Link to={`/trips/${pic.cityNational}`}>
                            <img className='pic_img' src={pic.cityImg} alt='cityImg' />
                            <div className='ti'>{pic.cityDesc}</div>
                        </Link>
                    </SwiperSlide>
                ))}    

            </Swiper>
        </div>
    );
};

export default PicUI;