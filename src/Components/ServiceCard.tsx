import { TCardProps } from "./FirstCard";

import { MdArrowOutward } from "react-icons/md";



const ServiceCard = ({ img, title, text }: TCardProps) => {
    return (
        <div className=" relative">
            <img className="rounded-xl " src={img} alt="" />
            <div className="absolute bg-[#020043] bg-opacity-70 rounded-xl text-white bottom-5 left-5  max-w-[330px] p-2">
                <div>
                    <h1 className="text-xl">{title}</h1>
                    <p className="mt-3">{text}</p>
                </div>
                <div className="card-actions justify-end">
                <button className="text-white btn rounded-full bg-[#FFC637] font-bold"><MdArrowOutward /></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;