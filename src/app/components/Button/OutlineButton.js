export const OutlineButton = ({data}) => {
    return (
        <>
            <button className="w-[110px] p-[14px] border-[2px] border-[#4502C7] rounded-[10px] text-[#4502C7] text-[16px] font-[500] hover:bg-[#4502C7] hover:text-white cursor-pointer">
                {data}
            </button>
        </>
    );
}