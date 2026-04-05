import { Star } from 'lucide-react';
import React from 'react';

const LeadersCard = ({data}) => {
    return (
        <div className='bg-white p-6 leadersCard md:p-[48px] max-w-[580px] rounded-[8px] flex justify-between flex-col gap-y-4 sm:gap-y-[32px]'>
            <div className='text-[#2180FF] gap-x-[4px] flex text-[20px]'>
                <Star fill='#2180FF' size={20}/>
                <Star fill='#2180FF' size={20}/>
                <Star fill='#2180FF' size={20}/>
                <Star fill='#2180FF' size={20}/>
                <Star fill='#2180FF' size={20}/>
            </div>
            <div>
                <p className='text-xl sm:text-[24px] font-medium'>{data.quotes}</p>
            </div>
            <div className='flex gap-x-3 sm:gap-x-[16px]'>
                <img className='w-[48px] rounded-[12px]' src={data.imgLink} alt="" />
                <div>
                    <p className='font-bold text-[16px]'>{data.name}</p>
                    <p className='text-[14px]'>{data.position}</p>
                </div>
            </div>
        </div>
    );
};

export default LeadersCard;