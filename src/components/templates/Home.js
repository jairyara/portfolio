import React from 'react';
import About from '../organism/About';
import Experience from '../organism/Experience';
import Header from '../organism/Header';
import Hero from '../organism/Hero';
import Portfolio from '../organism/Portfolio';
import Stack from '../organism/Stack';

const Home = () => {
    return(
        <>
            <Header />
            <Hero />
            <About />
            <Portfolio />
            <Experience />
            <Stack />
        </>
    )
}

export default Home;