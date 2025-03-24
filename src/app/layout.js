import { HeadMenu } from "./components/HeadMenu/HeadMenu";
import { Header } from "./components/Header/Header.js";
import { SiderContactMenu } from "./components/SiderContactMenu/SiderContactMenu";
import "./globals.css";

export const metadata = {
  title: "Trang chủ",
  description: "Đặt tour du lịch",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <HeadMenu/>
        <Header/>
        {children}
        <SiderContactMenu/>
      </body>
    </html>
  );
}
