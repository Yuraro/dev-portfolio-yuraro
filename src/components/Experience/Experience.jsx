import React from 'react';
import { Outlet } from "react-router-dom";
import { ExperienceTitle, ExperienceWrap } from './Experience.styled';


const Experience = () => {


    return (
        <ExperienceWrap>
            <ExperienceTitle>Trending today</ExperienceTitle>

            <Outlet />
        </ExperienceWrap>
    );
};

export default Experience;