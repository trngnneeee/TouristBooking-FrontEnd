"use client"

import { CardItem } from "../../../components/CardItem/CardItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export const Section2 = () => {
    const data = [
        {
            img: "/Rectangle 1025.png",
            title: "Hà Nội – Lào Cai – SaPa 4N3Đ",
        },
        {
            img: "/Rectangle 1026.png",
            title: "Tour 2024 Phú Quốc – Thiên Đường Đảo Ngọc (3N2D)",
        },
        {
            img: "/Rectangle 1027.png",
            title: "Combo Đà Nẵng 2024: ĐÀ NẴNG – HỘI AN – BÀ NÀ HILL",
        },
        {
            img: "/Rectangle 1025.png",
            title: "Hà Nội – Lào Cai – SaPa 4N3Đ",
        },
        {
            img: "/Rectangle 1026.png",
            title: "Tour 2024 Phú Quốc – Thiên Đường Đảo Ngọc (3N2D)",
        },
        {
            img: "/Rectangle 1027.png",
            title: "Combo Đà Nẵng 2024: ĐÀ NẴNG – HỘI AN – BÀ NÀ HILL",
        },
    ];
    
    return (
        <>
            <div className="mb-[60px]">
                <div className="mx-[90px] mt-[60px] bg-[#4502C7] rounded-[10px] py-[32px]">
                    <div className="flex justify-between px-[23px]">
                        <div className="flex flex-col justify-center items-center">
                            <div className="text-white text-[28px] font-[700]">ƯU ĐÃI 2024</div>
                            <div className="text-white text-[28px] font-[700] mb-[10px]">TOUR GIỜ CHÓT</div>
                            <div className="text-white text-[12px] font-[400] mb-[36px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
                            <div className="text-white text-[21px] font-[700] mb-[17px]">Kết thúc sau</div> 
                            <div className="flex gap-[23px] mb-[47px]">
                                <div className="bg-white p-[10px] rounded-[15px] text-[30px] font-[700] text-[#4502C7]">12</div>
                                <div className="bg-white p-[10px] rounded-[15px] text-[30px] font-[700] text-[#4502C7]">20</div>
                                <div className="bg-white p-[10px] rounded-[15px] text-[30px] font-[700] text-[#4502C7]">30</div>
                            </div>
                            <div className="text-white text-[16px] font-[700]">GIẢM ĐẾN</div>
                            <div className="text-[#FFD63A] text-[40px] font-[700]">990.000<u>đ</u></div>
                        </div>
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={20}
                            slidesPerView={3}
                            autoplay={{
                                delay: 2000, 
                                disableOnInteraction: false, 
                            }}
                            loop={true}
                        >
                            {data.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <CardItem item={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}