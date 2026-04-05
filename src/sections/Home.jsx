import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = ({ introDone }) => {
    return (
        <div className='md:h-screen flex flex-col w-full bg-white text-black'>
            <Navbar/>
            <Hero introDone={introDone} />
        </div>
    );
};

export default Home;
