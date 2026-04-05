import React from 'react';
import Home from '../sections/Home';
import Special from '../sections/Special';
import Leaders from '../sections/Leaders';
import Contact from '../sections/Contact';

const Layout = ({intro}) => {
    return (
        <>
            <Home introDone={intro}/>
            <Special/>
            <Leaders/>
            <Contact/>
        </>
    );
};

export default Layout;