export const Button = ({title}) => {
    return (
        <>
            <button className="text-[16px] font-[600] text-white bg-[#4502C7] w-full rounded-[10px] py-[12px] mt-[30px] cursor-pointer">
                {title}
            </button>
        </>
    );
}