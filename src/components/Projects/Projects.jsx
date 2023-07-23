import React from 'react';
import css from './Projects.module.css';
import projectsData from '../../services';

const Projects = () => {
    return (
    <div>
        {projectsData.map((project, index) => (
        <div className={css.projects_wrap} key={index}>
            <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.title} className={css.img_web} />
            </a>
            <div className={css.info_wrap}>
            <h2 className={css.info_title}>
                {project.title} <span className={css.info_year}>({project.year})</span>
            </h2>
            <a className={css.info_github} href={project.githubLink}>GitHub</a>
            <h3 className={css.info_description}>
                {project.description}
            </h3>
            <h3 className={css.info_tech_title}>
                Technologies used:
            </h3>
            <ul className={css.info_tech_list}>
                {project.technologies.map((tech, index) => (
                <li className={css.info_tech} key={index}>
                    <p className={css.info_tech_item}>{tech}</p>
                </li>
                ))}
            </ul>
            </div>
        </div>
        ))}
    </div>
    );
};

export default Projects;

