import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";

export const SiderContactMenu = () => {
    return (
        <>
            <div className="bg-[#4502C7] w-[39px] rounded-[10px] fixed right-[20px] bottom-[10px]">
                <ul className="flex flex-col gap-[20px] text-white justify-center items-center p-[10px]">
                    <li className="text-[25px]">
                        <Link href="#">
                            <FaFacebookF />
                        </Link>
                    </li>
                    <li className="text-[25px]">
                        <Link href="#">
                            <FaInstagram  />
                        </Link>
                    </li>
                    <li className="text-[25px]">
                        <Link href="#">
                            <IoLogoWhatsapp />
                        </Link>
                    </li>
                    <li className="text-[25px]">
                        <Link href="#">
                            <AiOutlineYoutube   />
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}