import React from 'react';
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { FaSchool } from "@react-icons/all-files/fa/FaSchool";

const About = () => {
    return (
        <div className='bg-indigo-900'>
            <div className="hero h-96">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/277171106_1712157049197866_5998410030193692133_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHvYqmOxTHALXbBX-AFmfS_b6RjnMngZdNvpGOcyeBl0_lC7lCL4tKWZXRRR_i93FY9U1ECyB4Ov_Tf5NG6G9_5&_nc_ohc=ToPYtWR6LIwAX_9E_Du&_nc_ht=scontent.fdac7-1.fna&oh=00_AT94u31M0NTB-5bLpKOj0ns68n7I0E5VwjCpwfWwSPuwLA&oe=62A6D769" className="w-48 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold text-white font-mono">Tanver Sikdar</h1>
                        <p className="pt-3 text-gray-300 ">I am a Full stack Developer with React js , Node js and Express and Frontend specalist .</p>
                        <p className='text-gray-300 pt-3'>I am currently working in online marketplace and looking forward to work remotely with a company.</p>

                        <div className='py-5'>
                            <p className='text-gray-500 font-bold'>Email me at</p>
                            <div className='flex items-center'>
                                <MdEmail className='mr-2 text-white' />
                                <h1 className='text-gray-300'>tanvershikder96@gmail.com</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-3'>
                <div className='flex items-center'>
                    <FaSchool className='mr-2 text-white text-2xl' />
                    <h1 className="text-2xl text-white"> Education</h1>
                </div>
                
                <hr className='w-16 bg-orange-600 h-1 rounded border-0' />
            </div>
            <div className='px-12 py-5'>
                <p className='text-2xl text-white'>Diploma in Computer Engineering</p>
                <p className='text-gray-400 text-sm'>2018 - Current</p>
                <p className='text-blue-200 text-base'>Chattogram Polytechnic Institute</p>
            </div>
            <div className='px-12 py-5'>
                <p className='text-2xl text-white'>Secondary School Certificate</p>
                <p className='text-gray-400 text-sm'>2012 - 2018</p>
                <p className='text-blue-200 text-base'>Kodalia S.I High School, Pakundia , Kishoregonj</p>
            </div>
        </div>
    );
};

export default About;