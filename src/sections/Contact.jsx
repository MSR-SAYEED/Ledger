import React from 'react';
import TextAnimation from '../components/TextAnimation';

const Contact = () => {
    return (
        <div className='bg-[#f7f9fb]'>

            <div className='containerGap py-[128px]'>
                {/* left side  */}
                <div className='flex flex-col gap-y-[32px]'>
                    <div>
                        <TextAnimation style='font-bold text-[48px] leading-[60px] tracking-[-2.4px]' text={`Ready to build your`} />
                        <TextAnimation style='font-bold text-[48px] text-[#2180ff] leading-[60px] tracking-[-2.4px]' text={`Authority?`} />
                    </div>
                    <TextAnimation style='max-w-[448px] text-[#44474D] w-full text-[18px]' text={`Schedule a discovery call with our architectural lead
                        to audit your current performance and map your
                        growth path.`} />
                    <div>
                        <div>
                            
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;