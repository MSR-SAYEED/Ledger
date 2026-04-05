import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = ({ introDone }) => {
    return (
        <div className='xl:h-screen flex flex-col  w-full bg-white text-black'>
            <Navbar />

            <div className='mt-[150px]  flex items-center justify-center'>
                <Hero introDone={introDone} />
            </div>

        </div>
    );
};

export default Home;
