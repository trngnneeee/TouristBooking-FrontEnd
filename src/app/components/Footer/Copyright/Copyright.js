import Link from "next/link";

export const Copyright = () => {
    return (
        <>
            <div className="mt-[40px] mx-[90px] flex justify-between items-center pb-[40px]">
                <div className="text-[13px] font-[500] text-[#667479]">© 2024 28Tech. All rights reserved.</div>
                <div>
                    <img src="/Logo.svg" />
                </div>
                <div className="text-[13px] font-[500] text-[#667479] flex gap-[30px]">
                    <Link href="#">Điều khoản dịch vụ</Link>
                    <Link href="#">Chính sách bảo mật</Link>
                </div>
            </div>
        </>
    );
}