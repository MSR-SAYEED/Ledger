import React, { useEffect, useRef } from 'react';
import ButtonCom from './Button';
import { ArrowRight, PlusIcon } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);


const Hero = ({ introDone }) => {
    const heroRef = useRef(null);
    const squareBoxRef = useRef(null);
    const imgRef = useRef(null);
    const tl = useRef(null)
    const mainTl = useRef(null)

    useEffect(() => {
        if (introDone) {
            mainTl.current?.play()
        }
    }, [introDone])

    useGSAP(() => {


        gsap.set(imgRef.current, {

            transformOrigin: 'center center',
            transformStyle: 'preserve-3d',
            force3D: true,

        });

        mainTl.current = gsap.timeline({ paused: true })
            .from(squareBoxRef.current, {
                scale:0,
                duration: 0.5,
                ease: "power2.out"
            })
            
            .call(() => {
                tl.current.play()
            })

        tl.current = gsap.timeline({
            repeat: -1,
            yoyo: true,
            defaults: {
                duration: 1.2,
                ease: "sine.inOut"
            },
            paused: true
        })
            .to(imgRef.current, {
                y: '-20px',
                rotate: '1deg'
            })

    }, { scope: heroRef });

    return (
        <div ref={heroRef} className='py-[10%] sm:py-[5%] h-full flex items-center justify-between  flex-col gap-y-12 md:flex-row  w-full containerGap'>
            {/* left container */}
            <div className='md:max-w-[550px] lg:max-w-[690px] w-full flex flex-col gap-y-[17px] md:gap-y-[24px]'>
                <p className='text-[#2180ff] font-bold tracking-widest uppercase text-[12px]'>Scalable Intelligence</p>
                <h2 className='font-extrabold text-5xl leading-[2.7rem] sm:text-6xl sm:leading-[3.5rem]  lg:text-[80px] lg:leading-[84px] -tracking-[2px]'>Accelerate <br />
                    <span className='text-[#2180ff] tracking-normal'>Your Growth</span></h2>
                <p className='text-[#44474D] lg:max-w-[550px] w-full text-[20px]'>We help high-growth companies scale with data-driven
                    marketing strategies that turn authority into measurable
                    revenue.</p>
                <div className='text-[16px] font-bold flex gap-[16px] flex-wrap'>
                    <ButtonCom>
                        <div className='flex items-center justify-center gap-x-[8px] '>
                            Partner With Us
                            <ArrowRight />
                        </div>
                    </ButtonCom>
                    <ButtonCom bg='bg-[#E6E8EA]' color='text-black'>
                        <p>View Services</p>
                    </ButtonCom>
                </div>
            </div>
            {/* right container  */}
            <div >
                <div className='relative isolate' style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}>
                    <img ref={imgRef} src="/heroImg.png" alt="" className='relative z-10 block will-change-transform' />
                    <div ref={squareBoxRef} className='absolute hidden  -top-4 -right-4 z-50 md:flex aspect-square p-6 items-center justify-center rounded-xl bg-white text-center flex-col shadow-md font-bold  navbar'>
                        <p className='text-2xl'>+142%</p>
                        <p className='text-sm text-[#44474d]'>Monthly ROI</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
