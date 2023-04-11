import React, { useEffect, useState } from 'react';
import SingleFeature from '../singleFeature/SingleFeature';

const FeatureJob = () => {
    const [features, setFeatures] = useState([]);
    // const [allFeatures, setAllFeatures] = useState([]);
    useEffect(() => {
        const jobDatafetch = async() => {
            const res = await fetch('jobData.json');
            const json = await res.json();
            const fourData = json.slice(0, 4)
            setFeatures(fourData);
        }
        jobDatafetch()
    },[])
 

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
            <button className='btn w-40 border-0 mt-8  bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>See All Jobs</button>
        </div>
    );
};

export default FeatureJob;