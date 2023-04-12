import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';



const Statistics = () => {

    const assignmentMark = [
        {
            "id": 1,
            "name": "Assignment-1",
            "mark": 58
        },
        {
            "id": 2,
            "name": "Assignment-2",
            "mark": 60
        },
        {
            "id": 3,
            "name": "Assignment-3",
            "mark": 60
        },
        {
            "id": 4,
            "name": "Assignment-4",
            "mark": 57
        },
        {
            "id": 5,
            "name": "Assignment-5",
            "mark": 60
        },
        {
            "id": 6,
            "name": "Assignment-6",
            "mark": 51
        },
        {
            "id": 7,
            "name": "Assignment-7",
            "mark": 60
        },
        {
            "id": 8,
            "name": "Assignment-8",
            "mark": 58
        },

    ];



    return (
        <div className='mb-20'>
            <div>
                <h1 className='text-lg text-purple-400 text-center mt-20 leading-5 underline'> Statistics Chart</h1>
                <h1 className='text-2xl font-bold text-center leading-6'>Assignment Mark</h1>
            </div>
            <div className='mt-16 w-9/12 mx-auto lg:mx-0 lg:w-full'>

<ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="90%" data={assignmentMark}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis />
          <Radar name="Name" dataKey="mark" stroke="#8884d8" fill="#8884d8" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>



            </div>
        </div>
    );
};

export default Statistics;