import React, { useState } from 'react';
import css from './About.module.css';
import Test from 'components/Test/Test';
import { Link } from 'react-router-dom';

const About = () => {
    const [answers, setAnswers] = useState([]);

    return (
    <div className={css.aboutWrap}>
        <Test answers={answers} setAnswers={setAnswers} />
        {!answers.includes('No') && answers.length === 3 && (
        <div className={css.navigation_btn_wrap}>
            <Link to="/about/presentation" className={css.navigation_btn}>
                Presentation
            </Link>
            <Link to="/about/projects" className={css.navigation_btn}>
                Projects
            </Link>
            <Link to="/about/work_experience" className={css.navigation_btn}>
                Work Experience
            </Link>
        </div>
        )}
    </div>
);
};

export default About;




