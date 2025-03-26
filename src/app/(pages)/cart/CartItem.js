import { Checkbox } from "@/app/components/Checkbox/Checkbox";
import { IoIosClose } from "react-icons/io";

export const CardItem = ({item}) => {
    return (
        <>
            <div className="flex gap-[20px] border-b-[0.5px] border-b-[#ddd] pb-[30px]">
                <div className="flex flex-col gap-[43px]">
                    <button className="cursor-pointer text-[20px]"><IoIosClose /></button>
                    <Checkbox
                        defaultValue={true}
                    />
                </div>
                <div>
                    <img src={item.img} className="w-full"/>
                </div>
                <div className="flex-1">
                    <div className="text-[16px] font-[500] text-[#25282B] mb-[12px]">{item.title}</div>
                    <div>
                        <div className="text-[14px] font-[400] text-[#8C8C8C] flex gap-[3px]">Mã Tour: <div className="font-bold">{item.tourID}</div></div>
                        <div className="text-[14px] font-[400] text-[#8C8C8C] flex gap-[3px]">Ngày Khởi Hành: <div className="font-bold">{item.startDate}</div></div>
                        <div className="text-[14px] font-[400] text-[#8C8C8C] flex gap-[3px]">Khởi Hành Tại: <div className="font-bold">{item.startPlace}</div></div>
                    </div>
                </div>
                <div className="flex flex-col gap-[8px]">
                    <label className="text-[14px] font-[400] text-[#898B8D] text-right">Số Lượng Hành Khách</label>
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
        </>
    );
}