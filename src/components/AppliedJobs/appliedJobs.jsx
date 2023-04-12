import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import locationIcon from '../../assets/Icons/frame-4.png';
import salaryIcon from '../../assets/Icons/Frame.png'

const AppliedJobs = () => {

  const [myObject, setMyObject] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const data = useLoaderData()
  const myOne = Object.keys(myObject)

  useEffect(() => {
    const storedObject = JSON.parse(localStorage.getItem('shopping-cart'));
    if (storedObject) {
      setMyObject(storedObject);
      
    }
    else {

    }

  }, []);

  const hello = () => {
    const foundItem = data.filter(obj => myOne.includes(obj.id));
    setAppliedJobs(foundItem)
  }
  return (
    <div className='mb-40'>
      <h1 className='text-3xl font-bold text-center mt-20'>Applied Jobs</h1>
      <div className='text-center'><h2 className='mt-8'>See Applied Job</h2>
      <button className='btn w-40 btn-wide border-0  bg-gradient-to-r from-[#7E90FE] to-[#9873FF]' onClick={hello}>Click Here</button></div>


      
      <div className='mt-8'>

        {
          appliedJobs.map(job =>
          <div key={job.id} className='flex items-center justify-between rounded-md border my-1 mx-2  p-3 lg:p-8'>
          <div className='flex flex-col lg:flex-row gap-1 lg:gap-5'>
            <div className='flex justify-start lg:justify-center items-center'><img className='w-36' src={job.companyLogo} alt="" /></div>
            <div>
              <h1 className='font-bold text-xl mt-2'>{job.jobtitle}</h1>
              <p className='text-sm mt-2'>{job.companyName}</p>
              <div className='flex gap-4 my-3'>
                <p className='text-sm px-4 py-1 text-[#7E90FE]  border border-2 rounded font-bold border-[#7E90FE]'>{job.jobType}</p>
                <p className='text-sm px-4 py-1 text-[#7E90FE]  border border-2 rounded font-bold border-[#7E90FE]'>{job.time}</p>
              </div>
              <div className='flex gap-4 items-center'>
                <p> <img className='grayscale inline-block' src={locationIcon} alt="" /> {job.companyLocation}</p>
                <p className='ms-2 lg:ms-6'> <img className='grayscale inline-block' src={salaryIcon} alt="" /> Salary : {job.salary}</p>
              </div>
            </div>
          </div>
          <Link to={`/jobdetails/${job.id}`} className='btn btn-sm text-sm rounded mt-3 border-0 bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>View Details</Link>

        </div>)
        }


      </div>
    </div>
  );
};

export default AppliedJobs;