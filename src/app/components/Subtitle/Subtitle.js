export const Subtitle = ({title, className}) => {
    return (
        <>
            <div className={"font-[700] text-[20px] text-[#4502C7] " + className}>
                {title}
            </div>
        </>
    );
}