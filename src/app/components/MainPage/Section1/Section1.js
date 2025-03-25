import { FaSearch } from "react-icons/fa";
import { Location } from "./Location/Location";
import { Quantity } from "./Quantity/Quantity";
import { Calendar } from "./Calendar/Calendar";

export const Section1 = () => {
   
     return (
        <>
            <div className="section1">
                <div className="mx-[90px]">
                    <div className="flex flex-col items-center">
                        <div className="w-[768px] text-[36px] font-[700] text-[#4502C7] mt-[106px] mb-[20px] text-center">Du lịch Châu Á - Khám phá Mỹ, Úc, Âu
                            Đi nơi đâu bạn muốn</div>
                        <div className="w-[768px] text-[16px] font-[400] text-center mb-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                        <div className="w-[768px] bg-[#00000066] p-[40px] rounded-[10px] mb-[108px]">
                            <Location/>
                            <div className="flex justify-between mt-[23px]">
                                <Quantity/>
                                <Calendar/>
                                <button className="bg-[#4502C7] shadow-[#00000040] rounded-[10px] py-[19px] px-[17px] flex items-center gap-[11px] text-white hover:bg-[#251d34]">
                                    <FaSearch />
                                    <div className="font-[500] text-[14px]">Tìm Kiếm</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}