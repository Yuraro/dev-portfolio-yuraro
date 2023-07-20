import React, { Suspense } from 'react';
import { Outlet } from "react-router-dom";
import css from './About.module.css';

const About = () => {
    return (
        <>
        <div className={css.aboutWrap}>
        <h2 className={css.aboutTitle}>About</h2>
        </div>
        <footer>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
        </footer>
        </>
    );
};

export default About;
