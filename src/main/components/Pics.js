import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";
import './Pics.css'

const Pics = () => {
    return (
        <div className='gallery'>
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
                autoplay={{delay: 5000}}
            >
                <SwiperSlide>
                        <img className='im1' src='/pics/1.jpg' alt='1' />
                        <div className='ti'>이탈리아의 산맥, 돌로마이트</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='im2' src='/pics/2.jpg' alt='2'/>
                    <div className='ti'>오스트리아의 마을, 할슈타트</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='im3' src='/pics/3.jpg' alt='3'/>
                    <div className='ti'>체코의 수도, 프라하</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='im4' src='/pics/4.jpg' alt='4'/>
                    <div className='ti'>브라질의 도시, 리우데자네이루</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='im5' src='/pics/5.jpg' alt='5'/>
                    <div className='ti'>아시아의 사막, 고비 사막</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='im6' src='/pics/6.jpg' alt='6'/>
                    <div className='ti'>독일의 도시, 함부르크</div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Pics;