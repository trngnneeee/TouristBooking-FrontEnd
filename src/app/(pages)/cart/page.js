import { IoIosArrowForward } from "react-icons/io";
import { CardItem } from "./CartItem";
import { Subtitle } from "@/app/components/Subtitle/Subtitle";
import { Checkbox } from "@/app/components/Checkbox/Checkbox";
import { Button } from "@/app/components/Button/Button";

export default function Cart() {
    const data = [
        {
            title: "Tour Châu Âu Đón Noel | 11N10D | Pháp – Thụy Sĩ – Ý",
            tourID: "1234567890",
            startDate: "20/10/2024",
            startPlace: "Hà Nội",
            img: "/Image.png"
        },
        {
            title: "Tour Châu Âu Đón Noel | 11N10D | Pháp – Thụy Sĩ – Ý",
            tourID: "1234567890",
            startDate: "20/10/2024",
            startPlace: "Hà Nội",
            img: "/Image.png"
        },
    ]

    return (
        <>
            <div className="my-[60px]">
                <div className="mx-[90px] rounded-[18px] shadow-2xl py-[30px] px-[20px] mb-[30px]">
                    <div className="flex justify-between items-center">
                        <Subtitle
                            title="Giỏ Hàng"
                        />
                        <button className="text-[#52575C] cursor-pointer flex items-center gap-[5px]">
                            <div className="font-[400] text-[15px]">Quay Lại Mua Hàng</div>
                            <div><IoIosArrowForward /></div>
                        </button>
                    </div>

                    <div className="mt-[25px] flex flex-col gap-[15px]">
                        {data.map((item, index) => (
                            <CardItem
                                key={index}
                                item={item}
                            />
                        ))}
                    </div>

                    <div className="mt-[16px] flex justify-end">
                        <div className="w-[429px] border-[1px] border-[#9EA0A3] rounded-[5px] flex justify-between p-0">
                            <input type="text" className="outline-none border-none flex-1 flex items-center px-[12px] text-[14px] font-[400] text-[#333333]" defaultValue="TOURMUAHE2024" />
                            <button className="bg-[#4502C7] h-full py-[10px] px-[12px] rounded-r-[5px] text-[14px] font-[400] text-white">Dùng Mã</button>
                        </div>
                    </div>
                </div>

                <div className="mx-[90px] rounded-[18px] shadow-2xl py-[30px] px-[20px]">
                    <div>
                        <Subtitle
                            title="Thông Tin Khách Hàng"
                        />
                        <div className="mt-[25px]">
                            <div className="flex justify-between items-center gap-[20px]">
                                <input type="text" placeholder="Họ và tên" className="outline-none px-[21px] py-[15px] border-[1px] border-[#E0E0E0] rounded-[6.37px] text-[14px] font-[400] text-[#828282] w-full" />
                                <input type="text" placeholder="Số điện thoại" className="outline-none px-[21px] py-[15px] border-[1px] border-[#E0E0E0] rounded-[6.37px] text-[14px] font-[400] text-[#828282] w-full" />
                            </div>
                            <input type="text" placeholder="Ghi chú" className="outline-none px-[21px] py-[15px] border-[1px] border-[#E0E0E0] rounded-[6.37px] text-[14px] font-[400] text-[#828282] w-full h-[100px] mt-[15px]" />
                        </div>
                    </div>

                    <div className="mt-[30px]">
                        <Subtitle
                            title="Chọn phương thức thanh toán"
                        />
                        <div className="mt-[25px]">
                            <div className="flex gap-[10px]">
                                <Checkbox
                                    defaultValue={false}
                                />
                                <div>Thanh toán tiền mặt khi đi tour</div>
                            </div>
                            <div className="flex gap-[10px]">
                                <Checkbox
                                    defaultValue={false}
                                />
                                <div>Ví MoMo</div>
                            </div>
                            <div className="flex gap-[10px]">
                                <Checkbox
                                    defaultValue={true}
                                />
                                <div>Chuyển khoản ngân hàng</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#F3F3F3] rounded-[5px] p-[15px] mt-[20px]">
                        <Subtitle
                            title="Thông tin chuyển khoản"
                        />
                        <div className="mt-[10px] flex flex-col gap-[6px]">
                            <div className="text-[14px] font-[400] text-[#4F4F4F]">Ngân hàng : Vietcombank</div>
                            <div className="text-[14px] font-[400] text-[#4F4F4F]">Tên tài khoản: Le Van A</div>
                            <div className="text-[14px] font-[400] text-[#4F4F4F]">STK: 0123456789</div>
                        </div>
                    </div>

                    <Button
                        title="Đặt Tour"
                        className="w-full"
                    />
                </div>
            </div>
        </>
    );
}