import React from 'react';
import { Outlet } from "react-router-dom";


const About = () => {


    return (
        <AboutWrap>
            <AboutTitle>Trending today</AboutTitle>

            <Outlet />
        </AboutWrap>
    );
};

export default About;