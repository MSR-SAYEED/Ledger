import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const Navlink = ({ text, link = '' }) => {
    const lineRef = useRef(null);
    const timelineRef = useRef(null);
    useGSAP(() => {
        gsap.set(lineRef.current, { xPercent: -105 });
        timelineRef.current = gsap.timeline({ paused: true });
        timelineRef.current.to(lineRef.current, {
            xPercent: 0,
            duration: 0.2,
            ease: 'power2.out',
        });
    }, []);

    const hoverOver = () => {
        timelineRef.current?.play();
    };

    const hoverOut = () => {
        timelineRef.current?.reverse();
    };

    return (
        <div onMouseEnter={hoverOver} onMouseLeave={hoverOut} className='w-fit overflow-hidden'>
            <a className='hover:text-[#2563EB]' href={link}>{text}</a>
            <div className='h-0.5 w-full bg-[#2563EB]' ref={lineRef}></div>
        </div>
    );
};

export default Navlink;
