import React from 'react';
import { Outlet } from "react-router-dom";
import css from './Experience.module.css';

const Experience = () => {

    return (
        <div className={css.ex_wrap}>
            <h2 className={css.ex_title}>Experience</h2>
            <Outlet />
        </div>
    );
};

export default Experience;