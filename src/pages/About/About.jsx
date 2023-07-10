import React from 'react';
import { Outlet } from "react-router-dom";
import { AboutTitle, AboutWrap } from './About.styled';


const About = () => {


    return (
        <AboutWrap>
            <AboutTitle>About</AboutTitle>

            <Outlet />
        </AboutWrap>
    );
};

export default About;