import React, { useRef } from 'react';
import TextAnimation from '../components/TextAnimation';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { formFields } from '../../public/data/FormFeilds';

gsap.registerPlugin(useGSAP, ScrollTrigger);



const Contact = () => {

    const contactFieldRef = useRef(null)

    useGSAP(() => {
        gsap.from(contactFieldRef.current, {
            x: 200,
            autoAlpha: 0,
            duration: 0.6,
            scrollTrigger: {
                trigger: contactFieldRef.current,
                start: 'clamp(top 85%)'
            },
            scale:0.5,
        })
    })


    return (
        <div className='bg-[#f7f9fb] overflow-hidden'>
            <div className='containerGap  flex flex-col gap-y-14 gap-x-12 py-[96px] sm:py-[128px] lg:flex-row lg:items-center lg:justify-between'>
                <div className='flex w-full max-w-[460px] flex-col gap-y-[32px]'>
                    <div>
                        <TextAnimation style='text-[42px] leading-[50px] font-bold tracking-[-2.1px] sm:text-[48px] sm:leading-[60px] sm:tracking-[-2.4px]' text={`Ready to build your`} />
                        <TextAnimation style='text-[42px] leading-[50px] font-bold tracking-[-2.1px] text-[#2180ff] sm:text-[48px] sm:leading-[60px] sm:tracking-[-2.4px]' text={`Authority?`} />
                    </div>
                    <TextAnimation style='max-w-[448px] w-full text-[18px] text-[#44474D]' text={`Schedule a discovery call with our architectural lead
                        to audit your current performance and map your
                        growth path.`} />

                    <div className='flex flex-col gap-y-[24px]'>
                        <div className='flex cursor-pointer items-center gap-x-4 text-black'>
                            <div className='flex h-10 aspect-square items-center justify-center rounded-[12px] bg-[#D2E0FE]'>
                                <Mail size={16} />
                            </div>
                            <p className='text-[16px] font-semibold text-black'>hello@authorityledger.com</p>
                        </div>

                        <div className='flex cursor-pointer items-center gap-x-4 text-black'>
                            <div className='flex h-10 aspect-square items-center justify-center rounded-[12px] bg-[#D2E0FE]'>
                                <MapPin size={16} />
                            </div>
                            <p className='text-[16px] font-semibold text-black'>Financial District, New York</p>
                        </div>
                    </div>
                </div>

                <div ref={contactFieldRef} className="w-full max-w-135 rounded-[12px] bg-white p-8 shadow-sm md:p-12">
                    <form className="flex flex-col gap-y-10">
                        {formFields.map((field) => (
                            <div key={field.id} className="flex flex-col">

                                <label
                                    htmlFor={field.id}
                                    className="mb-2 text-[12px] font-extrabold uppercase tracking-widest text-[#44474D]"
                                >
                                    {field.label}
                                </label>


                                {field.as === 'textarea' ? (
                                    <textarea
                                        id={field.id}
                                        placeholder={field.placeholder}
                                        rows={3}
                                        className="w-full border-b border-[#EEEEEE] py-3 text-[18px] text-[#1A1C1E] outline-none transition-colors placeholder:text-[#8892B0] focus:border-black"
                                    />
                                ) : (
                                    <input
                                        id={field.id}
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        className="w-full border-b border-[#EEEEEE] py-3 text-[18px] text-[#1A1C1E] outline-none transition-colors placeholder:text-[#8892B0] focus:border-black"
                                    />
                                )}
                            </div>
                        ))}

                        {/* Submit Button */}
                        <button
                            type='button'
                            className=" cursor-pointer mt-4 flex w-full items-center justify-center gap-x-2 rounded-[8px] bg-black py-5 text-[18px] font-semibold text-white "
                        >
                            Submit Inquiry
                            <ArrowRight size={20} className="" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
