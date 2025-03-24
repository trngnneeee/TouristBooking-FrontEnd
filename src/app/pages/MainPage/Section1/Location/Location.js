"use client"

import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaMapLocation } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";

export const Location = () => {
    const [menuListOpen, setMenuListOpen] = useState(false);

    const data = [
        {
            name: "Nhật Bản",
            link: "/Rectangle 1307.png"
        },
        {
            name: "Singapore",
            link: "/Rectangle 1308.png"
        },
        {
            name: "Thái Lan",
            link: "/Rectangle 1309.png"
        },
        {
            name: "Bali",
            link: "/Rectangle 1310.png"
        },
        {
            name: "Phú Quốc",
            link: "/Rectangle 1311.png"
        },
        {
            name: "Hà Nội",
            link: "/Rectangle 1312.png"
        },
        {
            name: "Sapa",
            link: "/Rectangle 1313.png"
        },
        {
            name: "Nha Trang",
            link: "/Rectangle 1314.png"
        }
    ];

    return (
        <>
            <div className="bg-white flex gap-[14px] items-center py-[21px] rounded-[10px] px-[12px] relative">
                <FaMapLocation className="text-[#4502C7] text-[30px]" />
                <input
                    type="text"
                    placeholder="Bạn muốn đi đâu?"
                    className="location-search border-none outline-none w-full text-[14px] text-[#A6A6A6] font-[400]"
                    onFocus={() => {
                        setMenuListOpen(true);
                    }}
                    onBlur={() => { setMenuListOpen(false) }}
                />
                <RiArrowDropDownLine className="text-[30px]" />
                {menuListOpen && (
                    <div className="absolute top-[75px] left-0 w-[100%] bg-white px-[29px] rounded-[10px] z-[10]">
                        <div className="flex gap-[9px] items-center text-[#4502C7] my-[16px]">
                            <CiLocationOn className="text-[30px]" />
                            <div className="font-[500] text-[14px]">Địa Điểm Hot</div>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-2 gap-[13px] mb-[13px]" onMouseDown={(e) => e.preventDefault()}>
                            {
                                data.map((item, index) => (
                                    <button className="flex gap-[17px] items-center" key={index} onClick={() => {
                                        const locationSearchElement = document.querySelector(".location-search");
                                        locationSearchElement.value = item.name;
                                        setMenuListOpen(false);
                                    }}>
                                        <img src={item.link} />
                                        <div>
                                            <div className="text-[14px] font-[600] text-[#4502C7]">{item.name}</div>
                                            <div className="text-[12px] font-[500] text-[#A6A6A6]">50 Tours</div>
                                        </div>
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}