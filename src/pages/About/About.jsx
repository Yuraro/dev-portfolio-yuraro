import React, { Suspense, useState } from 'react';
import css from './About.module.css';
import Test from 'components/Test/Test';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
    const [answers, setAnswers] = useState([]);

    return (
        <div className={css.aboutWrap}>
            <h1 className={css.title_about}>Questionnaire of compatibility</h1>
            <Test answers={answers} setAnswers={setAnswers} />
            {!answers.includes('No') && answers.length === 3 && (
                <div className={css.navigation_btn_wrap}>
                    <Link
                        to="/about/presentation"
                        className={css.navigation_btn}
                        activeClassName={css.active}
                    >
                        Presentation
                    </Link>
                    <Link
                        to="/about/projects"
                        className={css.navigation_btn}
                        activeClassName={css.active}
                    >
                        Projects
                    </Link>
                    <Link
                        to="/about/work_experience"
                        className={css.navigation_btn}
                        activeClassName={css.active}
                    >
                        Work Experience
                    </Link>
                </div>
            )}
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default About;







