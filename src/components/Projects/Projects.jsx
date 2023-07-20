import React from 'react';
import { Outlet } from "react-router-dom";
import css from './Projects.module.css';

const Projects = () => {
    return (
        <div className={css.projectsWrap}>
            <h2 className={css.projectsTitle}>Projects</h2>
            <Outlet />
        </div>
    );
};

export default Projects;
