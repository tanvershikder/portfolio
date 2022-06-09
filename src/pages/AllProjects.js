import React, { useEffect, useState } from 'react';

import { BsBoxArrowInUpRight } from "@react-icons/all-files/bs/BsBoxArrowInUpRight";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { BiDetail } from "@react-icons/all-files/bi/BiDetail";
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";
import { Link } from 'react-router-dom';

const AllProjects = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div>
            {
                data?.map((details, index) => <div class="hero bg-base-200 p-12 shadow my-10" key={index}>
                    <div class="hero-content flex-col lg:flex-row-reverse  ">
                        <img src={details.imageMain} className='w-96 border-solid border-2 border-indigo-600' />
                        <div>
                            <h1 class="text-3xl font-bold">{details.name}</h1>
                            <p class="py-6">{details.detail_1} <br />
                                {details.detail_2}</p>
                            <a href={details.livesite} class="btn bg-cyan-900 px-6 mr-5 mb-5" target="_blank">Live <BsBoxArrowInUpRight className='ml-2 text-2xl' /></a>
                            <a href={details.githublink} class="btn bg-blue-900 px-6 mr-5" target="_blank">Github <FaGithub className='ml-2 text-2xl' /></a>

                            <Link to='' class="btn px-6 mr-5" target="_blank">Details <BiDetail className='ml-2 text-2xl' /></Link>

                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AllProjects;