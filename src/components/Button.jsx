import React from 'react';

const ButtonCom = ({px='px-[32px]', py='py-[16px]', bg='bg-black', color='text-white', children}) => {
    return (
        <div className={`${px} capitalize w-fit cursor-pointer rounded-[4px] ${py} ${bg} ${color}`}>
            {children}
        </div>
    );
};

export default ButtonCom;