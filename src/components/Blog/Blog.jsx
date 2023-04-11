import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='mt-6 lg:mt-36 underline text-center font-bold text-xl text-orange-500'>Question & Answer</h1>
            <div className='mt-4 lg:mt-20 flex flex-col lg:flex-row mx-1 lg:mx-0 gap-2 lg:gap-10 justify-center'>
            <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-lg mb-8">When should you use context API?</h2>
                    <p className='leading-5'><span className='underline text-yellow-100'>Ans:</span> <br /> context API use for recieve data from parent components without any hassle </p>
                </div>
            </div>
            <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-lg mb-8">What is a custom hook?</h2>
                    <p className='leading-5'><span className='underline text-yellow-100'>Ans:</span> <br />Custom hooks can be a powerful tool for building more reusable and maintainable React components.</p>
                </div>
            </div>
            <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-lg mb-8">What is useRef?</h2>
                    <p className='leading-5'><span className='underline text-yellow-100'>Ans:</span> <br /> useRef use for mutable value that needs to be accessed by the component.</p>
                </div>
            </div>
            <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-lg mb-8">What is useMemo?</h2>
                    <p className='leading-5'><span className='underline text-yellow-100'>Ans:</span> <br /> useMemo hook is used to optimize the performance of a component by memoizing the results of a calculation or function.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Blog;