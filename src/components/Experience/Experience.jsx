import React from 'react';
import { Outlet } from "react-router-dom";
import { ExperienceTitle, ExperienceWrap } from './Experience.styled';


const Experience = () => {


    return (
        <ExperienceWrap>
            <ExperienceTitle>Experience</ExperienceTitle>

            <Outlet />
        </ExperienceWrap>
    );
};

export default Experience;