import { Title } from "@/app/components/Title/Title";


export const Section6 = () => {
    return (
        <>
            <Title
                title="Tin Tức Mới"
                className="mt-[60px] mb-[30px]"
            />
            <div className="mb-[60px]">
                <div className="flex gap-[20px] justify-center">
                    <div className="flex flex-col gap-[24px]">
                        <button className="shadow-lg rounded-[10px] cursor-pointer">
                            <img
                                src="/Tin nhỏ.png"
                                className="w-full overflow-hidden"
                            />
                        </button>
                        <button className="shadow-lg rounded-[10px] cursor-pointer">
                            <img
                                src="/Tin nhỏ (1).png"
                                className="w-full overflow-hidden"
                            />
                        </button>
                    </div>
                    <button className="shadow-lg rounded-[10px] cursor-pointer">
                        <img
                            src="/Tin lớn.png"
                            className="w-full overflow-hidden"
                        />
                    </button>
                    <div className="flex flex-col gap-[24px]">
                        <button className="shadow-lg rounded-[10px] cursor-pointer">
                            <img
                                src="/Tin nhỏ (2).png"
                                className="w-full overflow-hidden"
                            />
                        </button>
                        <button className="shadow-lg rounded-[10px] cursor-pointer">
                            <img
                                src="/Tin nhỏ (3).png"
                                className="w-full overflow-hidden"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}