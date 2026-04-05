import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);


const TextAnimation = ({ text, style = '' }) => {
    const textContainerRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {



        document.fonts.ready.then(() => {
            if (!textRef.current || !textContainerRef.current) {
                return;
            }



            const splitTextInstance = new SplitText(textRef.current, {
                type: 'lines, chars',
                mask: 'lines',
            });

            gsap.from(splitTextInstance.chars, {
                yPercent: 105,
                stagger: 0.01,

                ease: 'power2.out',
                scrollTrigger: {
                    trigger: textContainerRef.current,
                    start: 'top 85%',
                    once: true,
                },
            });

            return () => {
                splitTextInstance.revert()
            }
        })



    }, { scope: textContainerRef, dependencies: [text] });

    return (
        <div ref={textContainerRef}>
            <p ref={textRef} className={`${style}`}>{text}</p>
        </div>
    );
};

export default TextAnimation;
