import React from 'react';
import Enjoy from "../components/Enjoy";
import Favorite from "../components/Favorite";
import About from "../components/About";
import Download from "../components/Download";


const Home = () => {
    return (
        <div>
            <Enjoy/>
            <Favorite/>
            <About/>
            <Download/>
        </div>
    );
};

export default Home;