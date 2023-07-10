import React from 'react';
import { Outlet } from "react-router-dom";


const Projects = () => {


    return (
        <ProjectsWrap>
            <ProjectsTitle>Trending today</ProjectsTitle>

            <Outlet />
        </ProjectsWrap>
    );
};

export default Projects;