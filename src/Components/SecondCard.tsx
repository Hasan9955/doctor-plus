type TProps = {
    img: string,
    text: string,
    title: string
}

const SecondCard = ({img, text, title}: TProps) => {
    return (
        <div className="bg-base-100 shadow-xl p-5 max-w-52 border rounded-2xl">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p>{text}</p>
            <img src={img} alt="" />
        </div>
    );
};

export default SecondCard;