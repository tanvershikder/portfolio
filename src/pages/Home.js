import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineFilePdf } from "@react-icons/all-files/ai/AiOutlineFilePdf";
import { GrProjects } from "@react-icons/all-files/gr/GrProjects";
import resume from '../assets/final resume.pdf'
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import TypeAnimation from 'react-type-animation';
import Skills from '../Components/Skills';


const Home = () => {
    return (
        <div>
            <section className='h-96 bg-indigo-900 items-center mb-5'>
                <div className='py-24'>
                        <TypeAnimation
                        className='text-3xl text-white flex justify-center items-center mb-3'
                            cursor={true}
                            sequence={[
                                "Hi, I'M Tanver",
                                4000,
                                "Hi, I'M a Developer",
                                4000,
                            ]}
                            wrapper="h2"
                            repeat={Infinity}
                        />
                    <p className='flex justify-center text-justify lg:items-center text-2xl text-gray-300 mb-2 px-2 lg:px-0'>
                    I am a Full stack Developer with React js , Node js, Express and MongoDB and Frontend specalist
                    </p>
                    <p className='flex justify-center lg:items-center text-1xl text-gray-300'>Checkout my work below and feel free to get in touch</p>
                    <div className='flex justify-center items-center mt-2' data-aos="fade-up" data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="1000">

                        <Link to='/allproject' className='btn mr-5 bg-blue-600 rounded-none lg:w-48 w-40'> <GrProjects className='mr-2 text-1xl border-0' /> Projects</Link>

                        <a className='btn bg-blue-700 lg:w-48 w-40 rounded-none border-0' href='https://drive.google.com/file/d/1vBaLfro6UlT-kT5ktlSijLc1MsH3qxyJ/view?usp=sharing' target="_blank" download><AiOutlineFilePdf className='mr-2 text-2xl' /> Resume</a>

                    </div>
                </div>
            </section>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>

        </div>
    );
};

export default Home;