export const TourTracking = ({data}) => {
    const {title, desc, img} = data;
    
    return (
        <>
            <div className="text-white bg-[#4502C7] p-[8px] text-[14px] font-[500] w-[262px] rounded-[5px] text-center mt-[15px] title-tour-track">{title}</div>
            <div className="rounded-[10px] shadow-2xl p-[20px] mt-[10px] whitespace-pre-line">
                <div className="text-[14px] font-[300]">{desc}</div>
                <div className="">
                    <img src={img} className="w-full mt-[10px]" />
                </div>
            </div>
        </>
    );
}