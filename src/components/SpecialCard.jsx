/* eslint-disable react-hooks/refs */
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { MoveUpRight } from 'lucide-react';

import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP)

const SpecialCard = ({ data }) => {
    const lineRef = useRef(null)
    const luffyRef = useRef(null)
    const tl = useRef(null)

    const { contextSafe } = useGSAP(() => {
        tl.current = gsap.timeline({
            paused: true
        })
            .to(lineRef.current, {
                overwrite: 'auto',
                bottom: 0,
                duration: 0.6,
                ease: 'power3.out'
            })
            .to(luffyRef.current, {
                overwrite: 'auto',
                top: '-80px',
                duration: 0.6,
                ease: 'power3.out'
            },"<")
    })

    const handleHover = contextSafe(() => {
        tl.current?.play()
    })
    const handleHoverOut = contextSafe(() => {
        tl.current?.timeScale(1.3).reverse()
    })

    return (
        <div onMouseEnter={handleHover} onMouseLeave={handleHoverOut} className='relative w-full max-w-[550px] sm:max-w-[384px] specialCard'>
            <div className='w-full relative px-4 py-4  overflow-hidden z-[60] rounded-[8px]  sm:px-8 sm:py-6  navbar bg-[#F2F4F6]'>

            {/* left line  */}
                <div ref={lineRef} className='w-1.5 -bottom-105 left-0 bg-[#2181fe]/70 absolute h-full shrink-0'/>


                <div className='flex items-start gap-y-6
             sm:gap-y-[32px] justify-center flex-col'>
                    <div className='text-[#2180FF] flex items-center justify-center text-[25px] bg-[#D2E0FE] w-14 rounded-[4px] py-[10px] aspect-square'>
                        {data.icon}
                    </div>
                    <div className='flex max-w-[286px] w-full text-start flex-col gap-y-3 sm:gap-y-[16px] '>
                        <h3 className='text-[24px] font-bold'>{data.title}</h3>
                        <p className='text-[16px] text-[#44474D]'>{data.des}</p>
                        <div className='flex font-bold gap-x-1 cursor-pointer text-sm items-center justify-center w-fit'>
                            <p className='capitalize'>learn more</p>
                            <MoveUpRight size={15} />
                        </div>
                    </div>
                </div>
            </div>
            <img ref={luffyRef} className='absolute z-[50] w-[100px] right-2 top-2' src="/luffy.png" alt="" />
        </div>
    );
};

export default SpecialCard;