import { IoMdArrowDropdown } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { FaMessage } from "react-icons/fa6";

export const Header = () => {
    return (
        <>
            <div>
                <div className="mx-[90px]">
                    <div className="flex items-center justify-between my-[12px] bg-[#FFFFFF]">
                        <div>
                            <img src="/Logo.svg" />
                        </div>
                        <div>
                            <ul className="flex gap-[40px] text-[#25282B]">
                                <li className="text-[16px] font-[500]">
                                    Trang Chủ
                                </li>
                                <li className="text-[16px] font-[500] flex gap-[6px] items-center group relative">
                                    <div>Tour Trong Nước</div>
                                    <button>
                                        <IoMdArrowDropdown />
                                    </button>
                                    <div className="w-[280px] h-[176px] bg-[#FFFFFF] py-[8px] rounded-b-[10px] hidden group-hover:block absolute top-[25px]">
                                        <ul>
                                            <li className="text-[16px] font-[400] hover:bg-[#4502C7] hover:text-[#FFFFFF] py-[8px] pl-[22px]">Tour Miền Bắc</li>
                                            <li className="text-[16px] font-[400] hover:bg-[#4502C7] hover:text-[#FFFFFF] py-[8px] pl-[22px]">Tour Miền Trung</li>
                                            <li className="text-[16px] font-[400] hover:bg-[#4502C7] hover:text-[#FFFFFF] py-[8px] pl-[22px]">Tour Miền Nam</li>
                                            <li className="text-[16px] font-[400] hover:bg-[#4502C7] hover:text-[#FFFFFF] py-[8px] pl-[22px]">Tour Xuyên Việt</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="text-[16px] font-[500] flex gap-[6px] items-center group relative">
                                    <div>Tour Nước Ngoài</div>
                                    <button>
                                        <IoMdArrowDropdown />
                                    </button>
                                    <div className="w-[280px] h-[176px] bg-[#FFFFFF] py-[8px] rounded-b-[10px] hidden group-hover:block absolute top-[25px]">
                                        <ul>
                                            <li className="text-[16px] font-[400] hover:bg-[#4502C7] hover:text-[#FFFFFF] py-[8px] pl-[22px]">Tour Châu Á</li>
                                            <li className="text-[16px] font-[400] hover:bg-[#4502C7] hover:text-[#FFFFFF] py-[8px] pl-[22px]">Tour Châu Âu</li>
                                            <li className="text-[16px] font-[400] hover:bg-[#4502C7] hover:text-[#FFFFFF] py-[8px] pl-[22px]">Tour Châu Mỹ</li>
                                            <li className="text-[16px] font-[400] hover:bg-[#4502C7] hover:text-[#FFFFFF] py-[8px] pl-[22px]">Tour Châu Úc</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="text-[16px] font-[500]">
                                    Tin Tức
                                </li>
                                <li className="text-[16px] font-[500]">
                                    Liên Hệ
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center">
                            <div className="text-[25px] text-[#4502C7] p-0">
                                <BsCart2/>
                            </div>
                            <div className="text-[#FF3904] text-[15px] relative p-0">
                                <FaMessage />
                                <div className="text-white text-[10px] font-[400] absolute top-0 left-[4px]">1</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}