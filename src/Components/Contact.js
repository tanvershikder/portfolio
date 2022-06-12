import React, { useRef } from 'react';
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm('service_a38fp4q', 'template_0pryvg6', form.current, 'htlOKkr1CmsRUDQQQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div className='lg:py-12 lg:px-12' id='contact'>
            <div className="hero min-h-screen bg-indigo-900">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=" lg:text-left">
                        <div>
                            <h1 className="text-4xl font-bold text-white">Get In Touch</h1>
                            <p className="text-gray-300 text-1xl">Have a project or question? Send me a message. I will reply within 12 hour</p>
                        </div>
                        <div className='lg:py-16 py-8 pl-0'>
                            <div className='flex items-center'>
                                <MdEmail className='mr-5 text-white' />
                                <h1 className='text-gray-300'> tanvershikder96@gmail.com</h1>
                            </div>
                            <div className='flex items-center'>
                                <FaPhoneAlt className='mr-5 text-white' />
                                <h2 className='text-gray-300'>+08801746258879</h2>
                            </div>

                        </div>
                        <div className=' py-8 pl-0'>
                            <div className='flex'>
                                <a href='https://github.com/tanvershikder/' target="_blank" className=''><AiOutlineGithub className='text-3xl mr-3 lg:mr-5 text-white hover:bg-yellow-500 rounded-full'/></a>
                                <a href='https://www.linkedin.com/in/tanver-sikdar-82369b240/' target="_blank"><AiFillLinkedin className='text-3xl mr-3 lg:mr-5 text-white hover:bg-blue-500'/></a>
                                <a href='https://www.facebook.com/tanver.shikder.7/' target="_blank"><FaFacebook className='text-3xl mr-3 text-white hover:bg-blue-700 rounded-full lg:mr-5'/></a>

                            </div>

                        </div>
                    </div>

                    <form ref={form} onSubmit={sendEmail} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" data-aos="fade-left" data-aos-anchor="#example-anchor"
                    data-aos-duration="2000">

                        <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input input-bordered" name="to_name"/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" className="input input-bordered" name="from_name"/>

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea type="text" placeholder="Write Your Message" className="input input-bordered" name="message"/>

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Send</button>
                                </div>
                            </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;