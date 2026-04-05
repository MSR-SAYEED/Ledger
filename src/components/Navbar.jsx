import React from 'react';
import Navlink from './Navlink';
import Button from './Button';
import ButtonCom from './Button';

const Navbar = () => {
    return (
        <div className='navbar bg-white text-black  w-full  '>

            <div className='flex items-center justify-between containerGap py-[16px]  sm:py-3'>
                <div>
                    <a className='text-[20px] font-bold' href="/">Authority Ledger</a>
                </div>
                <div className='font-semibold text-[#475569]  hidden md:flex items-center justify-center gap-x-[32px]'>
                    <Navlink text={'Home'} />
                    <Navlink text={'Services'} />
                    <Navlink text={'Case Studies'} />
                </div>
                <div>
                    <ButtonCom px='px-[24px]' py='py-[10px]'>
                        <p className='text-[14px] font-semibold'>get started</p>
                    </ButtonCom>
                </div>
            </div>
        </div>
    );
};

export default Navbar;