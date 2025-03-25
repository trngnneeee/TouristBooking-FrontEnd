import { FaCalendarAlt } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

export const Calendar = () => {
    return (
        <>
            <div className="bg-white flex gap-[14px] items-center py-[21px] rounded-[10px] px-[12px]">
                <FaCalendarAlt className="text-[#4502C7] text-[20px]" />
                <input type="date" className="outline-none border-none"/>
            </div>
        </>
    );
}