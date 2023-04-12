import React, { useEffect, useState } from 'react';
import SingleFeature from '../singleFeature/SingleFeature';
import { json } from 'react-router-dom';

const FeatureJob = () => {
    const [features, setFeatures] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const seeAllJobs = () => {
       setShowAll (true);
    };

    useEffect(() => {
        const jobDatafetch = async() => {
            const res = await fetch('jobData.json');
            const json = await res.json();
            const fourData = json.slice(0, 4);
            if (showAll) {
                setFeatures (json);
            }

            else {
                setFeatures (fourData)
            }
        }
        
        jobDatafetch()
    },[seeAllJobs]);

    


 

    return (
        <div className='mt-24 text-center'>
            <h1 className='font-bold text-5xl mb-4'>Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 text-left mt-12'>
                {
                    features.map((feature) => <SingleFeature
                    key={feature.id}
                    feature={feature}
                    ></SingleFeature>
                    ) 
                }
            </div>
            {
                showAll ? <button onClick={seeAllJobs} className='btn hidden w-40 border-0 mt-8  bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>See All Jobs</button> : <button onClick={seeAllJobs} className='btn w-40 border-0 mt-8  bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>See All Jobs</button>
            }
        </div>
    );
};

export default FeatureJob;