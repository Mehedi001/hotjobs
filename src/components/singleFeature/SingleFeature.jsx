import React from 'react';
import locationIcon from '../../assets/Icons/frame-4.png';
import salaryIcon from '../../assets/Icons/Frame.png'
import { Link } from 'react-router-dom';

const SingleFeature = ({feature}) => {
    
    const {id,companyLogo,jobtitle,companyName,jobType,salary,companyLocation,time} = feature;
    return (
        <div className='rounded border my-1 mx-2  p-3 lg:p-8'>
            <img className='w-36' src={companyLogo} alt="" />
            <h1 className='font-bold text-xl mt-2'>{jobtitle}</h1>
            <p className='text-sm mt-2'>{companyName}</p>
            <div className='flex gap-4 my-3'>
            <p className='text-sm px-4 py-1 text-[#7E90FE]  border border-2 rounded font-bold border-[#7E90FE]'>{jobType}</p>
            <p className='text-sm px-4 py-1 text-[#7E90FE]  border border-2 rounded font-bold border-[#7E90FE]'>{time}</p>
            </div>
            <div className='flex gap-4 items-center'>
                <p> <img className='grayscale inline-block' src={locationIcon} alt="" /> {companyLocation}</p>
                <p className='ms-2 lg:ms-6'> <img className='grayscale inline-block' src={salaryIcon} alt="" /> Salary : {salary}</p>
            </div>
            <Link to={`/jobdetails/${id}`} className='btn btn-sm text-sm rounded mt-3 border-0 bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>View Details</Link>

        </div>
    );
};

export default SingleFeature;