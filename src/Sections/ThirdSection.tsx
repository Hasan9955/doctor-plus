import thirdSectionImage from '../assets/Rectangle 24.png'
import { MdArrowOutward } from "react-icons/md";


const ThirdSection = () => {
    return (
        <div className="text-[#020043] flex justify-between items-end mb-10">
           <div className='max-w-md'>
                <button className="btn btn-outline rounded-full">Who we are</button>
                <h2 className="text-3xl font-bold my-5"> We Help To Get Solutions </h2>
                <p>
                We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                </p>
                <button className="btn bg-[#FFC637] mt-5">Learn more<MdArrowOutward /></button>
           </div>
           <div className='relative'>
                <img src={thirdSectionImage} alt="" />
                <div className='bg-[#020043] text-white p-5 rounded-xl max-w-[400px] absolute -bottom-10 -left-16'>
                    <h2 className='text-2xl mb-5'>Our mission is simple</h2>
                    <p>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                </div>
            </div> 
        </div>
    );
};

export default ThirdSection;