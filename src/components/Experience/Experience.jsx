import React from 'react';
import css from './Experience.module.css';
import experienceData from '../../services/experienceData';

const Experience = () => {
    return (
    <div className={css.ex_wrap}>
        <div className={css.ex_container}>
        {experienceData.map((experience, index) => (
            <div className={css.ex_item} key={index}>
            <h3 className={css.ex_job_title}>{experience.title}</h3>
            <p className={css.ex_date}>{experience.date}</p>
            <p className={css.ex_company}>{experience.company}</p>
            <p className={css.ex_description}>{experience.description}</p>
            <h3 className={css.ex_achievements_title}>Achievements:</h3>
            <ul className={css.ex_achievements_list}>
                {experience.achievements.map((achievement, idx) => (
                <li key={idx} className={css.ex_achievement}>{achievement}</li>
                ))}
            </ul>
                <a href={experience.pdfLink} className={css.ex_pdf_link}>Open PDF</a>
            </div>
        ))}
        </div>
    </div>
);
};

export default Experience;
