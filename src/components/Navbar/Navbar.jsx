import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='mt-4 sticky top-0 z-50'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/statistics">Statistics</Link></li>
                            <li><Link to="/appliedjobs">Applied Jobs</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </div>
                    <Link to="/">
                        <img className='w-20 hover:scale-95 duration-100' src="/public/hotjobs.jpg" alt="" />
                        </Link>
                        {/* <h1 className="normal-case text-2xl border-0 bg font-bold">HotJob</h1> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/statistics">Statistics</Link></li>
                        <li><Link to="/appliedjobs">Applied Jobs</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className='btn border-0  bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>Start Applying</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
