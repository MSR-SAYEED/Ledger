import React from 'react';
import Navlink from './Navlink';

const Navbar = () => {
    return (
        <div className='navbar bg-white text-black  w-full  '>

            <div className='flex items-center justify-between max-w-[1280px] mx-auto py-3 sm:py-[16px] sm:px-[32px] px-2'>
                <div>
                    <a className='text-[20px] font-bold' href="/">Authority Ledger</a>
                </div>
                <div className='font-semibold text-[#475569]  hidden md:flex items-center justify-center gap-x-[32px]'>
                    <Navlink text={'Home'}/>
                    <Navlink text={'Services'}/>
                    <Navlink text={'Case Studies'}/>
                </div>
                <div>
                    <button className='capitalize text-[14px] font-semibold cursor-pointer rounded-[4px] bg-black px-[24px] py-[10px] text-white'>get started</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;