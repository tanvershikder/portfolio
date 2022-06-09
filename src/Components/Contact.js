import React, { useRef } from 'react';
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import emailjs from '@emailjs/browser';

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
            <div class="hero min-h-screen bg-indigo-900">
                <div class="hero-content flex-col lg:flex-row">
                    <div class=" lg:text-left">
                        <div>
                            <h1 class="text-4xl font-bold text-white">Get In Touch</h1>
                            <p class="text-gray-300 text-1xl">Have a project or question? Send me a message. I will reply within 12 hour</p>
                        </div>
                        <dir className='lg:py-16 py-8 pl-0'>
                            <div className='flex items-center'>
                                <MdEmail className='mr-5 text-white' />
                                <h1 className='text-gray-300'> tanvershikder96@gmail.com</h1>
                            </div>
                            <div className='flex items-center'>
                                <FaPhoneAlt className='mr-5 text-white' />
                                <h2 className='text-gray-300'>+08801746258879</h2>
                            </div>

                        </dir>
                    </div>

                    <form ref={form} onSubmit={sendEmail} class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div class="card-body">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" class="input input-bordered" name="to_name"/>
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" class="input input-bordered" name="from_name"/>

                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Message</span>
                                    </label>
                                    <textarea type="text" placeholder="Write Your Message" class="input input-bordered" name="message"/>

                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">Send</button>
                                </div>
                            </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;