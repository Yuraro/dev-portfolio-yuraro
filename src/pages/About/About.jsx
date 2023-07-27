import React, { Suspense, useState } from 'react';
import css from './About.module.css';
import Test from 'components/Test/Test';
import { Link, Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';

const About = () => {
    const [answers, setAnswers] = useState([]);
    const location = useLocation();

    const handleTestCompletion = () => {
        const completedAnswersCount = answers.filter((answer) => answer === 'Yes').length;
        if (completedAnswersCount === 3) {
            localStorage.setItem('testResult', 'completed');
        }
    };

    return (
        <div className={css.aboutWrap}>
            <h1 className={css.title_about}>Questionnaire of compatibility</h1>
            <Test answers={answers} setAnswers={setAnswers} />
            {handleTestCompletion()}
            {!answers.includes('No') && answers.length === 3 && (
                <div className={css.navigation_btn_wrap}>
                    <Link
                        to="/about/presentation"
                        className={classNames(css.navigation_btn, {
                            [css.active]: location.pathname === '/about/presentation',
                        })}
                    >
                        Presentation
                    </Link>
                    <Link
                        to="/about/projects"
                        className={classNames(css.navigation_btn, {
                            [css.active]: location.pathname === '/about/projects',
                        })}
                    >
                        Projects
                    </Link>
                    <Link
                        to="/about/work_experience"
                        className={classNames(css.navigation_btn, {
                            [css.active]: location.pathname === '/about/work_experience',
                        })}
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
