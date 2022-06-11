import React from 'react';
import boostrap from '../assets/bootstrap.svg'
import tailwind from '../assets/tailwind.svg'
import react from '../assets/react.svg'
import github from "../assets/github2.svg"
import mongodb from "../assets/mongodb-logo.svg"
import router from "../assets/react-router-logo-AB5BFB638F-seeklogo.com.png"
import firebase from "../assets/firebase-1-logo.png"
import nodejs from "../assets/nodejs.png"
import './Skill.css'

const Skills = () => {
    return (
        <div className='lg:px-12 lg:mt-8'>
             <div>
                <h1 className="text-2xl">Skills</h1>
                <hr className='w-12 bg-blue-600 h-1 rounded' />
            </div>
            <div className=' lg:px-12 px-5 py-10 allskillimages'>
                <img className='h-12 w-12 lg:mr-0 mr-5' src={react} alt="" />
                <img className='h-12 w-12 lg:mr-0 mr-5' src={nodejs} alt="" />
                <img className='h-12 w-12 lg:mr-0 mr-5' src={mongodb} alt="" />
                <img className='h-12 w-12 lg:mr-0 mr-5' src={boostrap} alt="" />
                <img className='h-12 w-12 lg:mr-0 mr-5' src={tailwind} alt="" />
                <img className='h-12 w-12 lg:mr-0 mr-5' src={github} alt="" />
                <img className='h-12 w-12 lg:mr-0 mr-5' src={router} alt="" />
                <img className='h-12 w-12 lg:mr-0 mr-5' src={firebase} alt="" />
            </div>
        </div>
    );
};

export default Skills;