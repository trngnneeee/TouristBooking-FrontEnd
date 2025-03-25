import { CardItem } from "@/app/components/CardItem/CardItem";
import { SiderTourList } from "@/app/components/SiderTourList/SiderTourList";
import { Title } from "@/app/components/Title/Title";
import { BsArrowDownRightSquareFill, BsArrowUpRightSquareFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function Tours() {
    const data = [
        {
            img: "/Rectangle 1025.png",
            title: "Hà Nội – Lào Cai – SaPa 4N3Đ",
        },
        {
            img: "/Rectangle 1026.png",
            title: "Tour 2024 Phú Quốc – Thiên Đường Đảo Ngọc (3N2D)",
        },
        {
            img: "/Rectangle 1027.png",
            title: "Combo Đà Nẵng 2024: ĐÀ NẴNG – HỘI AN – BÀ NÀ HILL",
        },
        {
            img: "/Rectangle 1025.png",
            title: "Hà Nội – Lào Cai – SaPa 4N3Đ",
        },
        {
            img: "/Rectangle 1026.png",
            title: "Tour 2024 Phú Quốc – Thiên Đường Đảo Ngọc (3N2D)",
        },
        {
            img: "/Rectangle 1027.png",
            title: "Combo Đà Nẵng 2024: ĐÀ NẴNG – HỘI AN – BÀ NÀ HILL",
        },
        {
            img: "/Rectangle 1026.png",
            title: "Tour 2024 Phú Quốc – Thiên Đường Đảo Ngọc (3N2D)",
        },
        {
            img: "/Rectangle 1027.png",
            title: "Combo Đà Nẵng 2024: ĐÀ NẴNG – HỘI AN – BÀ NÀ HILL",
        },
        {
            img: "/Rectangle 1026.png",
            title: "Tour 2024 Phú Quốc – Thiên Đường Đảo Ngọc (3N2D)",
        },
        {
            img: "/Rectangle 1027.png",
            title: "Combo Đà Nẵng 2024: ĐÀ NẴNG – HỘI AN – BÀ NÀ HILL",
        },
        {
            img: "/Rectangle 1026.png",
            title: "Tour 2024 Phú Quốc – Thiên Đường Đảo Ngọc (3N2D)",
        },
        {
            img: "/Rectangle 1027.png",
            title: "Combo Đà Nẵng 2024: ĐÀ NẴNG – HỘI AN – BÀ NÀ HILL",
        },
    ];

    return (
        <>
            {/* Breadcrumb */}
            <div >
                <img src="Breadcrumb.png" className="w-full" />
            </div>
            <div className="mx-[90px] mt-[60px] flex gap-[23px]">
                <div className="relative">
                    <SiderTourList />
                </div>
                <div className="">
                    <div>
                        <Title
                            title="Tour Nước Ngoài"
                            className="text-left"
                        />
                        <div className="text-[14px] font-[400] text-[#747578] mt-[10px]">Du lịch Châu Á: là châu lục lớn và đông dân nhất thế giới. Châu Á cũng có nhiều danh lam thắng cảnh đẹp tại một số quốc gia như Hàn Quốc, Nhật Bản, Trung Quốc, Việt Nam,... và VK Travel là nhà tổ chức du lịch chuyên nghiệp hàng đầu Châu Á, đã 5 lần liên tiếp nhận giải TTG Travel Awards. Hãy cùng 28.Travel du lịch Châu Á để tận hưởng những dịch vụ tốt nhất.</div>
                        <div className="flex justify-between mt-[10px] items-center">
                            <div className="flex gap-[16px] items-center">
                                <div className="text-[14px] font-[600] text-[#747578]">Sắp xếp: </div>
                                <div className="flex gap-[5px] items-center text-[12px] font-[400] text-[#747578] hover:text-[#F9313D] cursor-pointer">Giá tăng dần: <BsArrowUpRightSquareFill /></div>
                                <div className="flex gap-[5px] items-center text-[12px] font-[400] text-[#747578] hover:text-[#F9313D] cursor-pointer">Giá giảm dần: <BsArrowDownRightSquareFill /></div>
                                <div className="text-[12px] font-[400] text-[#F9313D] hover:text-[#F9313D] cursor-pointer">Khuyến Mãi Hot</div>
                                <div className="flex gap-[5px] items-center text-[12px] font-[400] text-[#747578] hover:text-[#F9313D] cursor-pointer">Xem nhiều <IoEyeSharp /></div>
                            </div>
                            <div className="text-[16px] font-[400] text-[#747578] flex items-center gap-[7px]">Tất cả: <div className="font-[700] text-[14px]">101 Tour</div></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 grid-rows-4 gap-[20px] mt-[30px]">
                        {data.map((item, index) => (
                            <CardItem
                                key={index}
                                item={item}
                            />
                        ))}
                    </div>
                    <div className="mt-[31px] mb-[60px] flex justify-end">
                        <button className="w-[50px] p-[16px] border-[1px] border-[#4502C7] rounded-l-[5px] hover:bg-[#4502C7] hover:text-white text-[14px] font-[400]">
                            {"<<"}
                        </button>
                        <button className="w-[50px] p-[16px] border-[1px] border-[#4502C7] bg-[#4502C7] text-white text-[14px] font-[400]">1</button>
                        <button className="w-[50px] p-[16px] border-[1px] border-[#4502C7] hover:bg-[#4502C7] hover:text-white text-[14px] font-[400]">2</button>
                        <button className="w-[50px] p-[16px] border-[1px] border-[#4502C7] hover:bg-[#4502C7] hover:text-white text-[14px] font-[400]">3</button>
                        <button className="w-[50px] p-[16px] border-[1px] border-[#4502C7] hover:bg-[#4502C7] hover:text-white text-[14px] font-[400]">4</button>
                        <button className="w-[50px] p-[16px] border-[1px] border-[#4502C7] rounded-r-[5px] hover:bg-[#4502C7] hover:text-white text-[14px] font-[400]">
                            {">>"}
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}