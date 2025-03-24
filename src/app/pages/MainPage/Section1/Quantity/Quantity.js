"use client"

import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

export const Quantity = () => {
    const [quantityOpen, setQuantityOpen] = useState(false);
    const [adultNumber, setAdultNumber] = useState(0);
    const [kidNumber, setKidNumber] = useState(0);
    const [babyNumber, setBabyNumber] = useState(0);
    const [dataQuanity, setDataQuantity] = useState("Số lượng");


    useEffect(() => {
        setDataQuantity(`NL: ${adultNumber}; TE: ${kidNumber}; EB: ${babyNumber}`)
    }, [adultNumber, kidNumber, babyNumber]);

    return (
        <>
            <div className="bg-white flex gap-[14px] items-center py-[21px] rounded-[10px] px-[12px] relative">
                <FaRegUser className="text-[#4502C7] text-[30px]" />
                <input type="text" placeholder={dataQuanity} className="border-none outline-none w-full text-[14px] text-[#A6A6A6] font-[400] quantity-input" onFocus={() => { setQuantityOpen(true) }} onBlur={() => { setQuantityOpen(false) }} />
                <RiArrowDropDownLine className="text-[30px]" />
                {quantityOpen && (
                    <div className="absolute w-full top-[75px] left-0 py-[10px] px-[19px] bg-white rounded-[10px]" onMouseDown={(e) => { e.preventDefault() }}>
                        <div className="flex justify-between items-center border-b-[1px] border-b-[#ECECEC] py-[10px]">
                            <div className="font-[400px] text-[12px] text-[#A6A6A6]">Người lớn</div>
                            <div className="flex gap-[10px] items-center">
                                <button className="border-[0.5px] border-[#C0C0C0] px-[8px] rounded-[5px] cursor-pointer hover:bg-[#cac8c8]" onClick={() => {
                                    if (adultNumber > 0) setAdultNumber(adultNumber - 1);

                                }}>-</button>
                                <div className="font-[400] text-[12px] text-[#4502C7]">{adultNumber}</div>
                                <button className="border-[0.5px] border-[#C0C0C0] px-[8px] rounded-[5px] cursor-pointer hover:bg-[#cac8c8]" onClick={() => {
                                    setAdultNumber(adultNumber + 1);
                                }}>+</button>
                            </div>
                        </div>
                        <div className="flex justify-between items-center border-b-[1px] border-b-[#ECECEC] py-[10px]">
                            <div className="font-[400px] text-[12px] text-[#A6A6A6]">Trẻ em</div>
                            <div className="flex gap-[10px] items-center">
                                <button className="border-[0.5px] border-[#C0C0C0] px-[8px] rounded-[5px] cursor-pointer hover:bg-[#cac8c8]" onClick={() => {
                                    if (kidNumber > 0) setKidNumber(kidNumber - 1);

                                }}>-</button>
                                <div className="font-[400] text-[12px] text-[#4502C7]">{kidNumber}</div>
                                <button className="border-[0.5px] border-[#C0C0C0] px-[8px] rounded-[5px] cursor-pointer hover:bg-[#cac8c8]" onClick={() => {
                                    setKidNumber(kidNumber + 1);
                                }}>+</button>
                            </div>
                        </div>
                        <div className="flex justify-between items-center py-[10px]">
                            <div className="font-[400px] text-[12px] text-[#A6A6A6]">Em bé</div>
                            <div className="flex gap-[10px] items-center">
                                <button className="border-[0.5px] border-[#C0C0C0] px-[8px] rounded-[5px] cursor-pointer hover:bg-[#cac8c8]" onClick={() => {
                                    if (babyNumber > 0) setBabyNumber(babyNumber - 1);

                                }}>-</button>
                                <div className="font-[400] text-[12px] text-[#4502C7]">{babyNumber}</div>
                                <button className="border-[0.5px] border-[#C0C0C0] px-[8px] rounded-[5px] cursor-pointer hover:bg-[#cac8c8]" onClick={() => {
                                    setBabyNumber(babyNumber + 1);
                                }}>+</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}