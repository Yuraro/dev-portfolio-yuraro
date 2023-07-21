import React from 'react';
import css from './About.module.css';
import Test from 'components/Test/Test';

const About = () => {
    return (
        <>
        <div className={css.aboutWrap}>
        <Test></Test>
        </div>
        </>
    );
};

export default About;
