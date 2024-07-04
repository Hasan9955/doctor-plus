export type TCardProps = {
    img: string,
    text: string,
    title: string
}

const FirstCard = ({img, text, title}: TCardProps) => {
    return (
        <div className="bg-base-100 shadow-xl p-5 max-w-56 border rounded-2xl">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p>{text}</p>
            <img className="mt-5" src={img} alt="" />
        </div>
    );
};

export default FirstCard;