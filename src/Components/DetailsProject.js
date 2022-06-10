import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { BsBoxArrowInUpRight } from "@react-icons/all-files/bs/BsBoxArrowInUpRight";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

const DetailsProject = () => {
    const { projecttId } = useParams()

    const [detail, setDetail] = useState([])

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [projecttId])

    let detailss;

    if (detail) {
        detailss = detail.filter(detail => detail.id == projecttId)
    }

    return (
        <div>
            {
                detailss?.map(details => <>
                    <div className="hero bg-base-200 p-12 shadow my-10">
                        <div className="hero-content flex-col lg:flex-row-reverse  ">
                            <img src={details?.imageMain} className='w-96 border-solid border-2 border-indigo-600' />
                            <div>
                                <h1 className="text-3xl font-bold">{details?.name}</h1>
                                <p className="py-6">{details?.detail_1} <br />
                                    {details?.detail_2}</p>
                                <a href={details?.livesite} className="btn bg-cyan-900 px-6 mr-5 mb-5" target="_blank">Live <BsBoxArrowInUpRight className='ml-2 text-2xl' /></a>
                                <a href={details?.githublink} className="btn bg-blue-900 px-6 mr-5" target="_blank">Github <FaGithub className='ml-2 text-2xl' /></a>



                            </div>
                        </div>

                    </div>

                    <div className=' bg-indigo-900 py-10'>
                        <h3 className='text-center text-2xl text-white'>{details.name} Details</h3>
                        <div className='text-center py-5'>
                            <li className='text-gray-300 py-1'>{details.detail_3}</li>
                            <li className='text-gray-300 py-1'>{details.details_4}</li>
                            <li className='text-gray-300 py-1'>{details.details_5}</li>
                            <li className='text-gray-300 py-1'>{details?.details_6}</li>
                        </div>
                        <div className='text-center py-5'>
                            <h3 className='text-green-500 font-bold'>Technology : <span className='text-blue-400'>{details.technology}</span></h3>
                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default DetailsProject;