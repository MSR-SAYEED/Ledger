import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import React, { useRef } from 'react';
gsap.registerPlugin(useGSAP)


const IntroAnimation = ({ introDone }) => {
    const text1Ref = useRef(null)
    const text2Ref = useRef(null)
    const mainContainer = useRef(null)

    useGSAP(() => {

        document.fonts.ready.then(() => {
            if (!text1Ref.current || !text1Ref.current) {
                return;
            }
            const splitTextInstance = new SplitText(text1Ref.current, {
                type: 'lines, chars',
                mask: 'lines',
            });
            const splitTextInstance2 = new SplitText(text2Ref.current, {
                type: 'lines, chars',
                mask: 'lines',
            });


            gsap.timeline({
                defaults: {
                    ease: 'power3.out', delay: 0.3, onStart: () => {
                        gsap.set([text1Ref.current, text2Ref.current], { visibility: 'visible' });
                    }
                }
            }).from(splitTextInstance.chars, {
                yPercent: 105,
                stagger: 0.01,

            }).
                from(splitTextInstance2.chars, {
                    yPercent: 105,
                    stagger: 0.01,

                })
                .to(mainContainer.current, {
                    yPercent: -105,
                    duration: 1,
                    delay: 0.4,
                    onComplete: () => introDone()
                })

            return () => {
                splitTextInstance.revert()
            }
        })

    }, []);


    return (
        <div ref={mainContainer} className='fixed flex items-center justify-center h-screen w-full z-999 bg-[skyblue]'>
            <div className='font-extrabold text-5xl leading-[2.7rem] sm:text-6xl sm:leading-[3.5rem] flex flex-col items-center justify-center lg:text-[80px] lg:leading-[84px] -tracking-[2px]'>
                <h2 ref={text1Ref} className='invisible'>Accelerate</h2>
                <p ref={text2Ref} className='text-[crimson] tracking-normal invisible'>Your Growth</p>
            </div>
        </div>
    );
};

export default IntroAnimation;