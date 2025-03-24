import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaBuilding } from "react-icons/fa6";

export const HeadMenu = () => {
    return (
        <>
            <div className="bg-[#4502C7]">
                <div className="mx-[90px] py-[10px]">
                     <div className="text-white flex gap-[40px] justify-end font-[400px] text-[14px]">
                        <div className="flex items-center gap-[8px]">
                            <FaPhoneAlt className="text-[20px]"/>
                            <div>0123.456.789</div>
                        </div>
                        <div className="flex items-center gap-[8px]">
                            <IoMdMail className="text-[20px]"/>
                            <div>contact@28travel.com</div>
                        </div>
                        <div className="flex items-center gap-[8px]">
                            <FaBuilding className="text-[20px]"/>
                            <div>Số 123, đường ABC, thành phố XYZ</div>
                        </div>
                     </div>
                </div>
            </div>
        </>
    );
}