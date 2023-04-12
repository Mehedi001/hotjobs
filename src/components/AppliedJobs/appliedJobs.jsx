import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {

    const [myObject, setMyObject] = useState([]);

    useEffect(() => {
        const storedObject = JSON.parse(localStorage.getItem('shopping-cart'));
        if (storedObject) {
          setMyObject(storedObject);
        }
      }, []);

      

      const myOne = Object.keys(myObject)
      const data = useLoaderData ()
      console.log (data)

    return (
        <div className='mb-40'>
            <h1 className='text-3xl font-bold text-center mt-20'>Applied Jobs</h1>
            <div className='mt-8'>
            <h2>hello{myObject.length}</h2>


            </div>
        </div>
    );
};

export default AppliedJobs;