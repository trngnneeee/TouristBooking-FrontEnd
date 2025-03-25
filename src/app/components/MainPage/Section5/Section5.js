import { OutlineButton } from "@/app/components/Button/OutlineButton";
import { CardItem } from "@/app/components/CardItem/CardItem";
import { Title } from "@/app/components/Title/Title";


export const Section5 = () => {
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
    ];

    return (
        <>
            <Title
                title="Tour Nước Ngoài"
                className="mt-[60px] mb-[30px]"
            />
            <div className="mx-[90px]">
                <div className="grid grid-cols-4 grid-rows-2 gap-[20px]">
                    {data.map((item, index) => (
                        <CardItem
                            key={index}
                            item={item}
                        />
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-[30px]">
                <OutlineButton
                    data="Xem tất cả"
                />
            </div>
            <div className="mx-[90px] mt-[60px]">
                <img src="/Banner2.png" className="w-full"/>
            </div>
        </>
    );
}