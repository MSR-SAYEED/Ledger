import React, {  useState } from 'react';

import Layout from './Layout';
import IntroAnimation from '../sections/IntroAnimation';




const RootLayout = () => {
    const [introDone, setIntroDone] = useState(false)
    
    return (
        <div className='overflow-hidden'>
            {!introDone && <IntroAnimation introDone={()=> setIntroDone(true)} />}
            <Layout intro={introDone}/>
        </div>
    );
};

export default RootLayout;