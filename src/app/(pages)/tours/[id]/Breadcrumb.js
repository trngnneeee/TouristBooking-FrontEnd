import Link from "next/link";

export const Breadcrumb = () => {
    return (
        <>
            <div className="relative">
                <img src="/banner-7.jpg" className="w-full" />
                <div className="absolute bottom-0 left-0 mx-[90px] mb-[20px]">
                    <div className="text-[32px] font-[500] text-white">Tour Hà Nội - Ninh Bình - Hạ Long - Yên Tử - Sapa | 6N5D</div>
                    <ul className="flex gap-[15px] text-white">
                        <li className="tour-path hover:text-[#4502C7]">
                            <Link href="#" className="">Trang Chủ</Link>
                        </li>
                        <li className="tour-path hover:text-[#4502C7]">
                            <Link href="#">Tour Trong Nước</Link>
                        </li>
                        <li className="tour-path hover:text-[#4502C7]">
                            <Link href="#">Tour Miền Bắc</Link>
                        </li>
                        <li className="tour-path hover:text-[#4502C7]">
                            <Link href="#">Tour Hà Nội - Ninh Bình - Hạ Long - Yên Tử - Sapa | 6N5D</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}