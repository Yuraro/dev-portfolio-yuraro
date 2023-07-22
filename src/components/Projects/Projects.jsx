import React from 'react';
import IceCreame from '../../images/IceCreame.jpeg'; 
import css from './Projects.module.css';

const Projects = () => {
    return (
        <div className={css.projects_wrap}>
            <a href="https://margomarm.github.io/team-project-icecream/" target="_blank" rel="noopener noreferrer">
                <img src={IceCreame} alt="Project Ice Cream" className={css.img_web} />
            </a>
            <div className={css.info_wrap}>
                <h2 className={css.info_title}>
                Ice Cream <span className={css.info_year}>(2022)</span>
                </h2>
                <a className={css.info_github} href="https://github.com/Yuraro/dev-portfolio-yuraro">GitHub</a>
                <h3 className={css.info_description}>
                    Collaboratively designed and developed a visually appealing café website, showcasing an array of product offerings, capturing the café's ambiance, and featuring location information. Implemented interactive elements, seamless navigation, and a unique brand identity, resulting in an enhanced user experience. <br/> Role: Developer
                </h3>
                <h3 className={css.info_tech_title}>
                    Technologis used:
                </h3>
                <ul className={css.info_tech_list}>
                    <li className={css.info_tech}>
                        <p className={css.info_tech_item}>JS</p>
                    </li>
                    <li className={css.info_tech}>
                        <p className={css.info_tech_item}>SASS</p>
                    </li>
                    <li className={css.info_tech}>
                        <p className={css.info_tech_item}>HTML</p>
                    </li>
                    <li className={css.info_tech}>
                        <p className={css.info_tech_item}>Parcel</p>
                    </li>
                </ul>
            </div>
        </div>
    )

};

export default Projects;
