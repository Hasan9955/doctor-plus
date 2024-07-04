import { MdArrowOutward } from "react-icons/md";
import ServiceCard from "../Components/ServiceCard";
import heart from '../assets/Rectangle 27-2.png'
import doctor from '../assets/Rectangle 27-1.png'
import women from '../assets/Rectangle 27.png'



const Services = () => {
    return (
        <div className="mb-20 mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto ">
            <div className="max-w-md">
            <button className="btn btn-outline rounded-full">Service</button>
            <h1 className="text-3xl font-bold my-5">Empowering Health, Enriching Lives</h1>
            <p>We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.</p>
            <button className="btn bg-[#FFC637] mt-5">Appointment<MdArrowOutward /></button>
            </div>
            <ServiceCard 
            img={heart}
            title="Advanced Technology"
            text="Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"
            />
            <ServiceCard 
            img={doctor}
            title="Online Doctor Meet"
            text="Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"
            />
            <ServiceCard 
            img={women}
            title="Consultancy your health"
            text="Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"
            />
        </div>
    );
};

export default Services;