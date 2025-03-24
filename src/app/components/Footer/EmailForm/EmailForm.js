export const EmailForm = () => {
    return (
        <>
            <div className="mx-[90px] bg-[#4502C7] p-[32px] rounded-[16px]">
                <div className="flex items-center">
                    <div className="text-[20px] font-[700] text-white w-[389px] capitalize">Đăng ký ngay để không bỏ lỡ các chương trình của chúng tôi</div>
                    <div className="bg-white p-[12px] flex justify-between rounded-[14px] gap-[12px] flex-1">
                        <input type="email" placeholder="Nhập email của bạn..." className="outline-none border-[1px] border-[#99A2A5] flex-1 rounded-[8px] px-[28px]" />
                        <button className="px-[23.5px] py-[12px] bg-[#4502C7] rounded-[8px] text-[16px] font-[500] text-white">Đăng ký ngay</button>
                    </div>
                </div>
            </div>
        </>
    );
}