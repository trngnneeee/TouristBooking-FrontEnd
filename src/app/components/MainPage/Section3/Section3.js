"use client"


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Autoplay, Pagination  } from 'swiper/modules';
import { Title } from '@/app/components/Title/Title';

export const Section3 = () => {
    const data = [
        "/image 126.png",
        "/image 127.png",
        "/image 128.png",
        "/image 126.png",
        "/image 127.png",
        "/image 128.png"
    ];
    
    return (
        <>
            <Title title={"Khuyến Mại Bùng Nổ - Đánh Tan Nóng Bức"}/>
            <div className="mt-[30px] mx-[90px]">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    loop={true}
                    modules={[Autoplay, Pagination]}
                    autoplay={{
                        delay: 2000, 
                        disableOnInteraction: false, 
                    }}
                    pagination={{
                        clickable: true,
                        el: ".swiper-pagination",
                        renderBullet: (index, className) => {
                            return `<span class="${className}"></span>`;
                        },
                    }}
                    className="swiper-section3"
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div>
                                <img src={item} className="w-full"/>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}