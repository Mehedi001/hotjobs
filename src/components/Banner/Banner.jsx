import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center mt-8'>
            <div className='flex flex-col gap-8 w-full lg:w-1/2'>
               <div>
               <h1 className='font-semibold text-6xl'>One Step</h1> 
               <h1 className='font-semibold text-6xl'>Closer To Your</h1>
               <h1 className='font-bold text-6xl inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>Dream Job</h1>
               </div>
               <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
               <button className='btn w-40 btn-wide border-0  bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>Get Started</button>
            </div>
            <div className='w-full lg:w-1/2'>
            <img className='w-full' src="/src/assets/All Images/P3OLGJ1 copy 1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;