import { Copyright } from "./Copyright/Copyright";
import { EmailForm } from "./EmailForm/EmailForm";
import { FooterMenu } from "./FooterMenu/FooterMenu";

export const Footer = () => {
    return (
        <>
            <div className="bg-[#ECECEC] rounded-t-[40px] pt-[60px]">
                <EmailForm/>
                <FooterMenu/>
                <Copyright/>
            </div>
        </>
    );
}