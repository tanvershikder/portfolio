import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineFilePdf } from "@react-icons/all-files/ai/AiOutlineFilePdf";
import { GrProjects } from "@react-icons/all-files/gr/GrProjects";
import resume from '../assets/final resume.pdf'
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';

const Home = () => {
    return (
        <div>
            <section className='h-96 bg-indigo-900 items-center'>
                <div className='py-24'>
                    <h1 className='flex justify-center items-center text-3xl text-white'>HI, I'M Tanver</h1><br />
                    <p className='flex justify-center items-center text-2xl text-gray-300'>I am a freelance web developer and a UI designer specializing in Frontend. </p>
                    <p className='flex justify-center items-center text-1xl text-gray-300'>Checkout my work below and feel free to get in touch</p>
                    <div className='flex justify-center items-center mt-5'>

                        <a className='btn mr-5 bg-blue-600 rounded-none w-48'> <GrProjects className='mr-2 text-1xl border-0' /> Projects</a>

                        <a className='btn bg-blue-700 w-48 rounded-none border-0' href='https://drive.google.com/file/d/1vBaLfro6UlT-kT5ktlSijLc1MsH3qxyJ/view?usp=sharing' target="_blank" download><AiOutlineFilePdf className='mr-2 text-2xl' /> Resume</a>

                    </div>
                    {/* <div>
                        <a href="#" class="down_arrow">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <polyline points="7 13 12 18 17 13"></polyline>
                            <polyline points="7 6 12 11 17 6"></polyline>
                        </svg>
                        </a>
                    </div> */}
                </div>
            </section>

                    <Projects></Projects>
                    <Contact></Contact>

        </div>
    );
};

export default Home;