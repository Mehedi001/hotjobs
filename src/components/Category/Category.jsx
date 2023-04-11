import React, { useEffect, useState } from 'react';

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect (() => {
        fetch ('category.json')
        .then (res => res.json())
        .then (data => setCategories (data))
    },[])
    return (
        <div className='mt-24 text-center p-2 lg:p-0'>
            <h1 className='font-bold text-5xl mb-4'>Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 text-left mt-12'>
                {
                    categories.map ((category) => <div
                    key={category.id}
                     className='border-0 hover:bg-orange-50 bg-gray-50 rounded-md p-2 lg:p-8'>
                        <img src={category.logo} alt="" />
                        <h1 className='font-bold text-xl'>{category.name}</h1>
                        <p>{category.jobsAvailable}</p>
                    </div> ) 
                } 
            </div>
        </div>
    );
};

export default Category;