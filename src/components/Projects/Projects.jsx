import React from 'react';
import { Outlet } from "react-router-dom";
import { ProjectsTitle, ProjectsWrap } from './Projects.styled';


const Projects = () => {


    return (
        <ProjectsWrap>
            <ProjectsTitle>Projects</ProjectsTitle>

            <Outlet />
        </ProjectsWrap>
    );
};

export default Projects;