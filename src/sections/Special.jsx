import React, {  useRef  } from 'react';
import TextAnimation from '../components/TextAnimation';
import { SpecialData } from '../../public/data/SpecialData';
import SpecialCard from '../components/SpecialCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);



const Special = () => {
    const cardContainerRef = useRef(null);
    

    

    useGSAP(() => {
        const cards = cardContainerRef.current.querySelectorAll('.specialCard');

        gsap.from(cards, {
            scrollTrigger: {
                trigger: cardContainerRef.current,
                start: 'clamp(top 90%)'
            },
            y: 40,
            autoAlpha: 0,
            stagger: 0.3,
            duration: 1,
            ease: 'power3.out'
        });
    }, { scope: cardContainerRef });

    return (
        <div className='containerGap py-[128px] flex flex-col gap-y-12 sm:gap-y-[80px]'>

            <div className='flex flex-col gap-y-5 sm:gap-y-[24px]'>
                <TextAnimation text={'Our Core Specialties'} style='font-bold text-4xl  sm:text-[48px]' />
                <TextAnimation text={`Integrated marketing solutions designed for the modern enterprise, backed by
                        performance metrics.`} style='max-w-[650px] w-full text-[18px] text-[#44474D]' />
            </div>

            {/* cards section  */}

            <div ref={cardContainerRef} className={`flex flex-wrap gap-x-6 gap-y-3`}>
                {
                    SpecialData.map(item => {
                        return <SpecialCard data={item} key={item.id}  />
                    })
                }
            </div>

        </div>
    );
};

export default Special;
