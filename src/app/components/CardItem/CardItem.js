import { FaStar } from "react-icons/fa6";
import { MdElectricBolt } from "react-icons/md";

export const CardItem = ({ item }) => {
    return (
        <>
            <div className="bg-white rounded-[10px] flex flex-col h-full border-[0.5px] border-[#fff] shadow-lg">
                <div className="w-full rounded-[10px] relative">
                    <img src={item.img} className="w-full h-[200px] object-cover rounded-t-[10px]" />
                    <div className="flex gap-[6px] bg-[#DA0808] py-[4px] rounded-r-[32px] w-[100px] absolute bottom-[-10px]">
                        <MdElectricBolt className="text-[#F2C94C]" />
                        <div className="text-[11px] font-[700] text-white">GIẢM -30%</div>
                    </div>
                </div>

                <div className="flex flex-col flex-grow p-[17px]">
                    <div className="font-[700] text-[14px] text-[#25282B] min-h-[40px]">
                        {item.title}
                    </div>
                    <div className="mt-[8px] flex gap-[11px]">
                        <div className="line-through text-[15px] font-[600] text-[#52575C]">13.650.000đ</div>
                        <div className="text-[#DA0808] text-[15px] font-[700]">2.590.000 đ</div>
                    </div>
                    <div className="mt-[10px] text-[11px] text-[#8C8C8C]">
                        <div>Mã Tour: <span className="font-[700]">123456789</span></div>
                        <div>Thời Gian: <span className="font-[700]">10 Ngày 9 Đêm</span></div>
                        <div>Ngày Khởi Hành: <span className="font-[700]">22/07/2024</span></div>
                    </div>

                    <div className="flex justify-between items-center mt-auto">
                        <div className="flex gap-[2px] text-[#FFD600] items-center">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            <div className="text-[11px] font-[400] text-[#8C8C8C]">(5)</div>
                        </div>
                        <div className="flex items-center gap-[7px]">
                            <div className="text-[11px] font-[700] text-[#25282B]">Số chỗ còn:</div>
                            <div className="w-[34px] p-[8px] bg-[#DA0808] rounded-[6px] text-white font-[700] text-[14px]">10</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}