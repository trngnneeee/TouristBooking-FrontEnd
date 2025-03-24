import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

export const FooterMenu = () => {
    return (
        <>
            <div className="mx-[90px] mt-[43px] border-b-[1px] border-b-[#CCD1D2] pb-[40px]">
                <div className="flex justify-between">
                    <ul className="flex gap-[40px]">
                        <li className="text-[14px] font-[500] text-[#25282B]">
                            <Link href="#">Trang Chủ</Link>
                        </li>
                        <li className="text-[14px] font-[500] text-[#25282B]">
                            <Link href="#">Tour Trong Nước</Link>
                        </li>
                        <li className="text-[14px] font-[500] text-[#25282B]">
                            <Link href="#">Tour Nước Ngoài</Link>
                        </li>
                        <li className="text-[14px] font-[500] text-[#25282B]">
                            <Link href="#">Tin Tức</Link>
                        </li>
                        <li className="text-[14px] font-[500] text-[#25282B]">
                            <Link href="#">Liên Hệ</Link>
                        </li>
                    </ul>
                    <ul className="flex gap-[40px]">
                        <li className="text-[25px]">
                            <Link href="#">
                                <FaFacebook />
                            </Link>
                        </li>
                        <li className="text-[25px]">
                            <Link href="#">
                                <FaTwitter />
                            </Link>
                        </li>
                        <li className="text-[25px]">
                            <Link href="#">
                                <FaInstagram />
                            </Link>
                        </li>
                        <li className="text-[25px]">
                            <Link href="#">
                                <FaYoutube />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}