import { FaStar } from "react-icons/fa";
import { FaTicketSimple } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { Button } from "@/app/components/Button/Button";

export const InforCard = () => {
    return (
        <>
            <div className="w-[469px] p-[24px] rounded-[10px] shadow-2xl sticky top-0 right-0">
                <div className="text-[#4502C7] text-[20px] font-[600]">Chuyến Đi Của Bạn</div>

                <div className="flex justify-between gap-[12px] mt-[15px]">
                    <div>
                        <img src="/Rectangle 1212.png" />
                    </div>
                    <div>
                        <div className="text-[#4502C7] text-[16px] font-[400] mb-[8px]">Hà Nội - Ninh Bình - Hạ Long - Yên Tử - Sapa | 6N5D</div>
                        <div className="flex justify-between items-center">
                            <div className="text-[#FFD600] flex gap-[3px]">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </div>
                            <div className="text-[12px] font-[300]">
                                500 lượt đánh giá
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-[8px] mt-[15px]">
                    <div className="flex gap-[8px] items-center">
                        <FaTicketSimple />
                        <div className="text-[14px] font-[400] text-[#5D5E60]">Mã Tour: </div>
                        <div className="text-[14px] font-[400] text-[#4502C7]">28T00001</div>
                    </div>
                    <div className="flex gap-[8px] items-center">
                        <FaCalendarAlt />
                        <div className="text-[14px] font-[400] text-[#5D5E60]">Thời Gian: </div>
                        <div className="text-[14px] font-[400] text-[#4502C7]">6 Ngày 5 Đêm</div>
                    </div>
                    <div className="flex gap-[8px] items-center">
                        <FaCarAlt />
                        <div className="text-[14px] font-[400] text-[#5D5E60]">Phương Tiện: </div>
                        <div className="text-[14px] font-[400] text-[#4502C7]">Ô tô 45 chỗ</div>
                    </div>
                    <div className="flex gap-[8px] items-center">
                        <FaCalendarAlt />
                        <div className="text-[14px] font-[400] text-[#5D5E60]">Ngày Khởi Hành: </div>
                        <div className="text-[14px] font-[400] text-[#4502C7]">20/10/2024</div>
                    </div>
                </div>

                <div className="mt-[15px]">
                    <div>
                        <label id="destination" className="text-[14px] font-[400] text-[#898B8D] mb-[5px]">Khởi hành tại</label>
                        <select htmlFor="destination" className="w-full border-[1px] border-[#898B8D] rounded-[5px] py-[11px] px-[14px] text-[#898B8D] outline-none">
                            <option value="hanoi">Hà Nội</option>
                            <option value="danang">Đà Nẵng</option>
                            <option value="nhatrang">Thành phố Hồ Chí Minh</option>
                        </select>
                    </div>
                    <div className="mt-[15px] flex flex-col gap-[8px]">
                        <label className="text-[14px] font-[400] text-[#898B8D]">Số Lượng Hành Khách</label>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-[16px]">
                                <label className="text-[14px] font-[400] text-[#5D5E60] w-[100px]">Người Lớn</label>
                                <input type="number" min="0" defaultValue="1" className="w-[50px] text-[14px] font-[500] text-[#898B8D] outline-none border-none hover:shadow-sm rounded-[5px] px-[5px]" />
                            </div>
                            <div className="text-[16px] font-[400] text-[#5D5E60] flex gap-[5px]">
                                1 x <div className="text-[#4502C7]">10.000.000</div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-[16px]">
                                <label className="text-[14px] font-[400] text-[#5D5E60] w-[100px]">Trẻ Em</label>
                                <input type="number" min="0" defaultValue="0" className="w-[50px] text-[14px] font-[500] text-[#898B8D] outline-none border-none hover:shadow-sm rounded-[5px] px-[5px]" />
                            </div>
                            <div className="text-[16px] font-[400] text-[#5D5E60] flex gap-[5px]">
                                1 x <div className="text-[#4502C7]">7.990.000</div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-[16px]">
                                <label className="text-[14px] font-[400] text-[#5D5E60] w-[100px]">Em Bé</label>
                                <input type="number" min="0" defaultValue="0" className="w-[50px] text-[14px] font-[500] text-[#898B8D] outline-none border-none hover:shadow-sm rounded-[5px] px-[5px]" />
                            </div>
                            <div className="text-[16px] font-[400] text-[#5D5E60] flex gap-[5px]">
                                1 x <div className="text-[#4502C7]">5.990.000</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-[15px]">
                    <div className="text-[16px] font-[400] text-[#5D5E60]">Tổng Cộng</div>
                    <div className="text-[20px] font-[600] text-[#4502C7]">10.000.000 đ</div>
                </div>

                <div>
                    <Button/>
                </div>
            </div>
        </>
    );
}