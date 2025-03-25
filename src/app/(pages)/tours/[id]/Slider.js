"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css";

export const Slider = () => {
    const [imgPath, setImgPath] = useState("/banner-1113.png");
    const imageContainerRef = useRef(null);
    const viewerRef = useRef(null);

    useEffect(() => {
        if (imageContainerRef.current) {
            viewerRef.current = new Viewer(imageContainerRef.current, {
                inline: false, 
                title: true,
                navbar: true,
                toolbar: true,
                movable: true,
                zoomable: true,
                scalable: true,
                transition: true,
            });
        }
        return () => viewerRef.current?.destroy();
    }, []);

    const images = [
        "/banner-1111.png",
        "/banner-1112.png",
        "/banner-1113.png",
        "/banner-1114.png",
    ];

    return (
        <>
            <div>
                <div className="w-full mb-[30px]" onClick={() => {
                    viewerRef.current?.show(); 
                }}>
                    <img src={imgPath} className="w-full h-auto object-cover" />
                </div>
                <div ref={imageContainerRef} className="hidden">
                    {images.map((src, index) => (
                        <img key={index} src={src} alt={`Preview ${index + 1}`} />
                    ))}
                </div>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={4}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    loop={false}
                    className='detail-tour-slider'
                >
                    <SwiperSlide>
                        <button onClick={() => { setImgPath("/banner-1111.png") }}>
                            <img src='/Rectangle 1111.png' />
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button onClick={() => { setImgPath("/banner-1112.png") }}>
                            <img src='/Rectangle 1112.png' />
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button onClick={() => { setImgPath("/banner-1113.png") }}>
                            <img src='/Rectangle 1113.png' />
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button onClick={() => { setImgPath("/banner-1114.png") }}>
                            <img src='/Rectangle 1114.png' />
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button onClick={() => { setImgPath("/banner-1114.png") }}>
                            <img src='/Rectangle 1114.png' />
                        </button>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}