import FirstCard from "../Components/FirstCard";
import SecondCard from "../Components/SecondCard";
import circle from "../assets/circle.png"
import video from '../assets/video.png'
import first from '../assets/1st.png'
import second from '../assets/2nd.png'
import third from '../assets/3rd.png'



const SecondSection = () => {
    return (
        <div className="text-[#020043] flex flex-col lg:flex-row gap-5 justify-between items-end my-20">
            <FirstCard
                img={circle}
                title="90%"
                text="Patient satisfaction rate, reflecting our commitment." />
            <div className="flex flex-col justify-center items-center">
                <h2 className="max-w-[400px] text-4xl font-bold text-center mb-5">Comprehensive Care for Every Patient</h2>
                <div className="flex gap-5 justify-between items-end">
                    <SecondCard 
                    img={first}
                    title="500+"
                    text="Board-certified doctors"
                    />
                    <SecondCard 
                    img={second}
                    title="4.8⭐"
                    text="Over 20,000 Patient"
                    />
                    <SecondCard 
                    img={third}
                    title="$5000"
                    text="Money spend for poor patient"
                    />
                </div>
            </div>
            <FirstCard
                img={video}
                title="50+"
                text="Free lesson video for patient"/>
        </div>
    );
};

export default SecondSection;