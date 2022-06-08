import React from 'react';
import { Link } from 'react-router-dom';
import project1 from '../assets/1.jpg'
import project2 from '../assets/2.jpg'
import project3 from '../assets/3.jpg'
import { BsBoxArrowInUpRight } from "@react-icons/all-files/bs/BsBoxArrowInUpRight";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

const Projects = () => {
    return (
        <div className='lg:px-12 lg:mt-8'>
            <h1 className="text-2xl">Projects</h1>
            <hr className='w-12 bg-blue-600 h-1 rounded' />


            <div className=''>
                <div class="hero bg-base-200 p-12 shadow my-10">
                    <div class="hero-content flex-col lg:flex-row-reverse  ">
                        <img src={project1} className='w-96 border-solid border-2 border-indigo-600' />
                        <div>
                            <h1 class="text-3xl font-bold">Ts-Car-Tools</h1>
                            <p class="py-6">This is Full stack Project with React js , Node js , Tailwind css and Mongodb <br />
                            User and Admin Control Deshbord</p>
                            <a href={'https://ts-car-tools.web.app/?fbclid=IwAR1kCzz3jek7uDMiCrmlRgS99hTyUAcdVmSituTD_41paEXYO8hQkQm0OtU'} class="btn bg-cyan-900 px-10 mr-5 mb-5" target="_blank">Live <BsBoxArrowInUpRight className='ml-2 text-2xl'/></a>
                            <a href={'https://github.com/tanvershikder/ts-car-tools-client'} class="btn bg-blue-900 px-10 mr-5" target="_blank">Github <FaGithub className='ml-2 text-2xl'/></a>
                        </div>
                    </div>
                </div>
                <div class="hero bg-base-200 p-12 shadow my-10">
                    <div class="hero-content flex-col lg:flex-row-reverse  ">
                        <img src={project2} className='w-96 border-solid border-2 border-indigo-600' />
                        <div>
                            <h1 class="text-3xl font-bold">Ts-Mackbook-Storage</h1>
                            <p class="py-6">This is Full stack Mackbook Storage project with react js ,node js and Mongodb <br />
                            User can post her/his Products and give delivary</p>

                            <a href={'https://ts-mackbook.web.app/?fbclid=IwAR2lp8O9azavkT7Xy45Q_wFQezeg6sU7XVKf7bvLOtYMc_N1mBY8Ury60xI'} class="btn bg-cyan-900 px-10 mr-5 mb-5" target="_blank">Live <BsBoxArrowInUpRight className='ml-2 text-2xl'/></a>
                            <a href={'https://github.com/tanvershikder/ts-macbook-client'} class="btn bg-blue-900 px-10 mr-5" target="_blank">Github <FaGithub className='ml-2 text-2xl'/></a>
                        </div>
                    </div>
                </div>
                <div class="hero bg-base-200 p-12 shadow my-10">
                    <div class="hero-content flex-col lg:flex-row-reverse  ">
                        <img src={project3} className='w-96 border-solid border-2 border-indigo-600' />
                        <div>
                            <h1 class="text-3xl font-bold">Dr. NewYash Appointment</h1>
                            <p class="py-6">This is Front end project with react js , Boostrap , React Router and Firebase</p>

                            <a href={'https://dr-newyas-appointment-servoce.web.app/?fbclid=IwAR2l5i2KJAa_s-7aDrSD_eUouG5Mawx4DOTF3q2HGAIF0J7Abxjhm7QGvPM'} class="btn bg-cyan-900 px-10 mr-5 mb-5" target="_blank">Live <BsBoxArrowInUpRight className='ml-2 text-2xl'/></a>
                            <a href={'https://github.com/tanvershikder/dr-newyas-appointment'} class="btn bg-blue-900 px-10 mr-5" target="_blank">Github <FaGithub className='ml-2 text-2xl'/></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;