import { Subtitle } from "@/app/components/Subtitle/Subtitle";
import { Breadcrumb } from "./Breadcrumb";
import { InforCard } from "./InforCard";
import { Slider } from "./Slider";
import { OutlineButton } from "@/app/components/Button/OutlineButton";
import { TourTracking } from "./TourTracking";

export default function detailTour() {
    const data = [
        {
            title: "NGÀY 1 | TP.HCM – THỦ ĐÔ HÀ NỘI",
            desc: `
                Sáng: HDV TOPTEN TRAVEL® Đón Quý Khách tại sân bay Tân Sơn Nhất làm thủ tục check in cho đoàn đi Hà Nội (Quý Khách vui lòng có mặt ở sân bay trước 2 tiếng so với giờ bay. Đến sân bay Hà Nội – Xe và HDV đón Đoàn đưa về Khách sạn nghỉ ngơi. Đoàn dùng bữa trưa tại Nhà Hàng.
                Chiều: Tham quan Viếng Chùa Trấn Quốc – Ngôi chùa Trấn Bắc cổ kính nhất Việt Nam với 1.500 năm tuổi nằm trên bán đảo cồn Quy linh thiêng, với truyền thuyết và huyền thoại về Hồ Tây, hồ Trúc Bạch. Đền Ngọc Sơn, Cầu Thê Húc, hồ Hoàn Kiếm - Trực tiếp chứng kiến cụ Rùa dài 2,1m, ngang 1,2m được trưng bày tại đền Ngọc Sơn. Văn Miếu Quốc Tử Giám – Nơi đựoc xem như Trường Đại học đầu tiên của Việt Nam với 82 tấm bia Tiến sỹ còn lưu danh sử sách.
                Tối: Đoàn dùng cơm tối tại nhà hàng. Đoàn tự do nghỉ ngơi hoặc dạo chơi thăm phố cổ Hà Nội, dạo Hồ Gươm, mua sắm tại Chợ đêm Hà Nội sầm uất...
            `,
            img: "/Rectangle 1296.png"
        },
        {
            title: "NGÀY 2 | TP.HCM – THỦ ĐÔ HÀ NỘI",
            desc: `
                Sáng: HDV TOPTEN TRAVEL® Đón Quý Khách tại sân bay Tân Sơn Nhất làm thủ tục check in cho đoàn đi Hà Nội (Quý Khách vui lòng có mặt ở sân bay trước 2 tiếng so với giờ bay. Đến sân bay Hà Nội – Xe và HDV đón Đoàn đưa về Khách sạn nghỉ ngơi. Đoàn dùng bữa trưa tại Nhà Hàng.
                Chiều: Tham quan Viếng Chùa Trấn Quốc – Ngôi chùa Trấn Bắc cổ kính nhất Việt Nam với 1.500 năm tuổi nằm trên bán đảo cồn Quy linh thiêng, với truyền thuyết và huyền thoại về Hồ Tây, hồ Trúc Bạch. Đền Ngọc Sơn, Cầu Thê Húc, hồ Hoàn Kiếm - Trực tiếp chứng kiến cụ Rùa dài 2,1m, ngang 1,2m được trưng bày tại đền Ngọc Sơn. Văn Miếu Quốc Tử Giám – Nơi đựoc xem như Trường Đại học đầu tiên của Việt Nam với 82 tấm bia Tiến sỹ còn lưu danh sử sách.
                Tối: Đoàn dùng cơm tối tại nhà hàng. Đoàn tự do nghỉ ngơi hoặc dạo chơi thăm phố cổ Hà Nội, dạo Hồ Gươm, mua sắm tại Chợ đêm Hà Nội sầm uất...
            `,
            img: "/Rectangle 1296.png"
        },
        {
            title: "NGÀY 3 | TP.HCM – THỦ ĐÔ HÀ NỘI",
            desc: `
                Sáng: HDV TOPTEN TRAVEL® Đón Quý Khách tại sân bay Tân Sơn Nhất làm thủ tục check in cho đoàn đi Hà Nội (Quý Khách vui lòng có mặt ở sân bay trước 2 tiếng so với giờ bay. Đến sân bay Hà Nội – Xe và HDV đón Đoàn đưa về Khách sạn nghỉ ngơi. Đoàn dùng bữa trưa tại Nhà Hàng.
                Chiều: Tham quan Viếng Chùa Trấn Quốc – Ngôi chùa Trấn Bắc cổ kính nhất Việt Nam với 1.500 năm tuổi nằm trên bán đảo cồn Quy linh thiêng, với truyền thuyết và huyền thoại về Hồ Tây, hồ Trúc Bạch. Đền Ngọc Sơn, Cầu Thê Húc, hồ Hoàn Kiếm - Trực tiếp chứng kiến cụ Rùa dài 2,1m, ngang 1,2m được trưng bày tại đền Ngọc Sơn. Văn Miếu Quốc Tử Giám – Nơi đựoc xem như Trường Đại học đầu tiên của Việt Nam với 82 tấm bia Tiến sỹ còn lưu danh sử sách.
                Tối: Đoàn dùng cơm tối tại nhà hàng. Đoàn tự do nghỉ ngơi hoặc dạo chơi thăm phố cổ Hà Nội, dạo Hồ Gươm, mua sắm tại Chợ đêm Hà Nội sầm uất...
            `,
            img: "/Rectangle 1296.png"
        },
        {
            title: "NGÀY 4 | TP.HCM – THỦ ĐÔ HÀ NỘI",
            desc: `
                Sáng: HDV TOPTEN TRAVEL® Đón Quý Khách tại sân bay Tân Sơn Nhất làm thủ tục check in cho đoàn đi Hà Nội (Quý Khách vui lòng có mặt ở sân bay trước 2 tiếng so với giờ bay. Đến sân bay Hà Nội – Xe và HDV đón Đoàn đưa về Khách sạn nghỉ ngơi. Đoàn dùng bữa trưa tại Nhà Hàng.
                Chiều: Tham quan Viếng Chùa Trấn Quốc – Ngôi chùa Trấn Bắc cổ kính nhất Việt Nam với 1.500 năm tuổi nằm trên bán đảo cồn Quy linh thiêng, với truyền thuyết và huyền thoại về Hồ Tây, hồ Trúc Bạch. Đền Ngọc Sơn, Cầu Thê Húc, hồ Hoàn Kiếm - Trực tiếp chứng kiến cụ Rùa dài 2,1m, ngang 1,2m được trưng bày tại đền Ngọc Sơn. Văn Miếu Quốc Tử Giám – Nơi đựoc xem như Trường Đại học đầu tiên của Việt Nam với 82 tấm bia Tiến sỹ còn lưu danh sử sách.
                Tối: Đoàn dùng cơm tối tại nhà hàng. Đoàn tự do nghỉ ngơi hoặc dạo chơi thăm phố cổ Hà Nội, dạo Hồ Gươm, mua sắm tại Chợ đêm Hà Nội sầm uất...
            `,
            img: "/Rectangle 1296.png"
        },
    ]
    
    return (
        <>
            <Breadcrumb />
            <div className="flex justify-between gap-[20px] mx-[90px] mt-[60px]">
                <div>
                    <Slider />
                    <div className="rounded-[10px] shadow-2xl p-[20px] mt-[30px]">
                        <Subtitle
                            title="Thông Tin Tour"
                        />
                        <div className="text-[14px] font-[300] text-[#080A12] mt-[15px]">
                            Nói về dịch vụ, chắc chắn rồi, với một tiêu chí của một khách sạn 5 sao đẳng cấp, mình tin rằng Indochine Palace đủ để cho bạn đánh giá 6 sao. Từ nhà hàng, cà phê, đến trung tâm thể dục thể thao hiện đại đến Spa, xông hơi… tất tần tật các dịch vụ mà bạn mong muốn đều có ở đây.. Từ nhà hàng, cà phê, đến trung tâm thể dục thể thao hiện đại đến Spa, xông hơi… tất tần tật các dịch vụ mà bạn mong muốn đều có ở đây. . Từ nhà hàng, cà phê, đến trung tâm thể dục thể thao hiện đại đến Spa, xông hơi…
                        </div>
                        <div className="mt-[10px]">
                            <img src="/Rectangle 1165.png" className="w-full" />
                        </div>
                        <div className="flex justify-center my-[20px]">
                            <OutlineButton
                                data="Xem Tất Cả"
                            />
                        </div>
                    </div>
                    <div className="mt-[30px]">
                        <Subtitle
                            title="Lịch Trình Tour"
                        />
                        <ul className="border-l-[1px] border-l-[#4502C7] pl-[17px] mb-[67px]">
                            {data.map((item, index) => (
                                <li key={index} className="list-item">
                                    <TourTracking                                        
                                        data={item}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="relative">
                    <InforCard />
                </div>
            </div>
        </>
    );
}