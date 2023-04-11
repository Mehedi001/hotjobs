import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
    const {id} = useParams();

    const [job, setJob] = useState([]);
    const {jobtitle, salary, phone, email, companyLocation, jobDescription, jobResponsibility, educationalRequirements, experiences, } = job;

    useEffect (() => {
        fetch ('../../../public/jobData.json')
        .then (res => res.json())
        .then (data => setJob(data.find(d=> d.id==`${id}`)))
    },[]);
    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-20'>Job Details</h1>
            <div className='mt-28 flex flex-col-reverse mx-2 lg:mx-0 lg:flex-row gap-5'>
                <div className='w-full lg:w-8/12  lg:mx-0'>
                   <h1 className='mb-3'><span className='font-bold'>Job Description: </span>{jobDescription}</h1> 
                   <h1 className='mb-3'><span className='font-bold'>Job Responsibility: </span>{jobResponsibility}</h1>
                   <h1 className='mb-3'><span className='font-bold'>Educational Requirements: </span> {educationalRequirements}</h1> 
                   <h1><span className='font-bold'>Experiences: </span>{experiences}</h1> 
                </div>
                <div className='w-full lg:mx-0 lg:w-4/12 '>
                    <div className='bg-sky-50 rounded-md p-6'>
                    <h1 className='mb-6 font-bold'>Job Details</h1> <hr />
                    <p className='mt-3'> <img className='inline-block' src="/src/assets/Icons/Frame.png" /> <span className='font-bold'>Salary:</span> {salary} (Per Month)</p>
                    <p className='mt-3'> <img className='inline-block' src="/src/assets/Icons/Frame-1.png" /> <span className='font-bold'>Job Title:</span> {jobtitle}</p>
                    <h1 className='mb-6 mt-6'><span className='font-bold'>Job Details:</span></h1> <hr />
                    <p className='mt-3'><img className='inline-block' src="/src/assets/Icons/Frame-2.png" /><span className='font-bold'> phone:</span> {phone}</p>
                    <p className='mt-3'><img className='inline-block' src="/src/assets/Icons/Frame-3.png" /><span className='font-bold'> Email:</span> {email}</p>
                    <p className='mt-3'><img className='inline-block' src="/src/assets/Icons/Frame-4.png" /><span className='font-bold'> Address:</span> {companyLocation}</p>
                    </div>
                    <button className='btn w-full border-0 mt-4 rounded  bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;