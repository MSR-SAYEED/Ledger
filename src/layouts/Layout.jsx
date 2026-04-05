import React from 'react';
import Home from '../sections/Home';
import Special from '../sections/Special';
import Leaders from '../sections/Leaders';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

const Layout = ({intro}) => {
    return (
        <>
            <Home introDone={intro}/>
            <Special/>
            <Leaders/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Layout;