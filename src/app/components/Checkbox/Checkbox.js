"use client"

import { useState } from "react";
import { IoCheckbox } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

export const Checkbox = ({defaultValue}) => {
    const [active, setActive] = useState(defaultValue);
    
    return (
        <>
            <button className="text-[#4502C7] cursor-pointer text-[20px]" onClick={() => {setActive(!active)}}>{active ? <IoCheckbox /> : <MdCheckBoxOutlineBlank />}</button>
        </>
    );
}