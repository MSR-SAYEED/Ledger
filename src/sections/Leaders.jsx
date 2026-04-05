import React, { useRef } from 'react';
import TextAnimation from '../components/TextAnimation';
import { LeadersData } from '../../public/data/LeadersData';
import LeadersCard from '../components/LeadersCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Leaders = () => {
    const leadersContainerRef = useRef(null)

    useGSAP(() => {
        const cards = leadersContainerRef.current.querySelectorAll('.leadersCard')
        gsap.from(cards, {
            scrollTrigger: {
                trigger: leadersContainerRef.current,
                start: 'clamp(top 85%)'
            },
            scale:0,
            stagger:0.5,
            duration:1,
            ease:'power3.out'
        })
    })

    return (
        <div className='py-[5%] sm:py-[128px] bg-[#F2F4F6]'>
            <div ref={leadersContainerRef} className='containerGap flex flex-col gap-y-8 sm:gap-y-[64px]'>

                <div className='flex items-center gap-y-2 justify-start gap-x-[16px]'>
                    <div className='w-[48px] hidden sm:block h-px bg-[#2180FF]' />
                    <TextAnimation style='font-black sm:text-[30px] text-wrap text-2xl' text={`Trusted by Industry Leaders`} />
                </div>

                <div className='flex gap-x-[32px] flex-wrap gap-y-6'>
                    {
                        LeadersData.map(item =>{
                            return <LeadersCard key={item.id} data={item}/>
                        })
                    }
                </div>

            </div>

        </div>
    );
};

export default Leaders;