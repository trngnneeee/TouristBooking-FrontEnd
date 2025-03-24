export const Title = ({title, className}) => {
    return (
        <>
            <div className={"text-center font-[700] text-[36px] text-[#4502C7] " + className}>
                {title}
            </div>
        </>
    );
}