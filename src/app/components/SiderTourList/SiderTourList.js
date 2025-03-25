import { FaFilter } from "react-icons/fa";

export const SiderTourList = () => {
    return (
        <>
            <div className="w-[279px] p-[15px] rounded-[10px] shadow-2xl sticky top-0 left-0 mb-[145px]">
                <div className="flex justify-between mb-[15px]">
                    <div className="text-[#4502C7] text-[18px] font-[600]">Bộ Lọc</div>
                    <div className="text-[#4502C7] text-[20px]"><FaFilter /></div>
                </div>
                <div className="flex flex-col gap-[15px]">
                    <div>
                        <label id="start" className="text-[14px] font-[400] text-[#898B8D] mb-[5px]">Điểm đi</label>
                        <select htmlFor="start" className="w-full border-[1px] border-[#898B8D] rounded-[5px] py-[11px] px-[14px] text-[#898B8D] outline-none">
                            <option>--Chọn điểm đi--</option>
                            <option value="hanoi">Hà Nội</option>
                            <option value="danang">Đà Nẵng</option>
                            <option value="nhatrang">Nha Trang</option>
                        </select>
                    </div>

                    <div>
                        <label id="destination" className="text-[14px] font-[400] text-[#898B8D] mb-[5px]">Điểm đến</label>
                        <select htmlFor="destination" className="w-full border-[1px] border-[#898B8D] rounded-[5px] py-[11px] px-[14px] text-[#898B8D] outline-none">
                            <option>--Chọn điểm đến--</option>
                            <option value="hanoi">Hà Nội</option>
                            <option value="danang">Đà Nẵng</option>
                            <option value="nhatrang">Nha Trang</option>
                        </select>
                    </div>

                    <div>
                        <label id="date" className="text-[14px] font-[400] text-[#898B8D] mb-[5px]">Ngày khởi hành</label>
                        <input type="date" htmlFor="date" className="w-full border-[1px] border-[#898B8D] rounded-[5px] py-[11px] px-[14px] text-[#898B8D] outline-none" />
                    </div>
                </div>

                <div className="mt-[17px]">
                    <div className="text-[14px] font-[500] text-[#898B8D] mt-[5px]">Số lượng hành khách</div>
                    <div className="flex flex-col gap-[5px]">
                        <div className="px-[16px] py-[10px] border-[1px] border-[#898B8D] rounded-[5px] flex justify-between items-center">
                            <label id="adult" className="text-[14px] font-[400] text-[#898B8D]">Người lớn</label>
                            <input type="number" htmlFor="adult" className="w-[50px] outline-none border-none text-[14px] font-[400] text-[#898B8D]" />
                        </div>
                        <div className="px-[16px] py-[10px] border-[1px] border-[#898B8D] rounded-[5px] flex justify-between items-center">
                            <label id="kid" className="text-[14px] font-[400] text-[#898B8D]">Trẻ em</label>
                            <input type="number" htmlFor="kid" className="w-[50px] outline-none border-none text-[14px] font-[400] text-[#898B8D]" />
                        </div>
                        <div className="px-[16px] py-[10px] border-[1px] border-[#898B8D] rounded-[5px] flex justify-between items-center">
                            <label id="baby" className="text-[14px] font-[400] text-[#898B8D]">Em bé</label>
                            <input type="number" htmlFor="baby" className="w-[50px] outline-none border-none text-[14px] font-[400] text-[#898B8D]" />
                        </div>
                    </div>
                </div>

                <div className="mt-[15px]">
                    <label id="destination" className="text-[14px] font-[400] text-[#898B8D] mb-[5px]">Mức giá</label>
                    <select htmlFor="destination" className="w-full border-[1px] border-[#898B8D] rounded-[5px] py-[11px] px-[14px] text-[#898B8D] outline-none">
                        <option>--Chọn khoảng giá--</option>
                        <option value="1mDown">Dưới 1tr</option>
                        <option value="1to3m">Từ 1tr đến 3tr</option>
                        <option value="3to6m">Từ 3tr đến 6tr</option>
                        <option value="6to10m">Từ 6tr đến 10tr</option>
                        <option value="10mUp">Trên 10tr</option>
                    </select>
                </div>
            </div>
        </>
    );
}