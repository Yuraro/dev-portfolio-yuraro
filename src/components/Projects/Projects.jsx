import React from 'react';
import { Outlet } from "react-router-dom";
import css from './Projects.module.css';

const Projects = () => {
    return (
        <div className={css.projects_wrap}>
            <img
                src={zahlushka}
                alt="img"
                className={css.img_web}
            />
            <div className={css.info_wrap}>
                <h2 className={css.info_title}>
                Title <span className={css.info_year}>2022</span>
                </h2>
                <a className={css.info_github} href="https://github.com/Yuraro/dev-portfolio-yuraro">GitHub Link</a>
                <h3 className={css.info_description}>
                    Тут буде опис проєкта
                </h3>
                <h3 className={css.info_tech_title}>
                    Technologis used
                </h3>
                <ul className={css.info_tech_list}>
                    <li className={css.info_tech}>
                        <p className={css.info_tech_item}>JS</p>
                    </li>
                    <li className={css.info_tech}>
                        <p className={css.info_tech_item}>JS</p>
                    </li>
                    <li className={css.info_tech}>
                        <p className={css.info_tech_item}>JS</p>
                    </li>
                    <li className={css.info_tech}>
                        <p className={css.info_tech_item}>JS</p>
                    </li>
                    <li className={css.info_tech}>
                        <p className={css.info_tech_item}>JS</p>
                    </li>
                </ul>
            </div>
        </div>
    )

};

export default Projects;
