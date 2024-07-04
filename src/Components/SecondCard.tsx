import { TCardProps } from "./FirstCard";


const SecondCard = ({img, text, title}: TCardProps) => {
    return (
        <div className="bg-base-100 shadow-xl p-5 max-w-52 border rounded-2xl">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p>{text}</p>
            <img src={img} alt="" />
        </div>
    );
};

export default SecondCard;