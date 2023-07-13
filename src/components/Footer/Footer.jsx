import React from 'react';
import { Outlet } from "react-router-dom";
import css from './Footer.module.css';


const Footer = () => {


    return (
        <div className={css.footer_main_wrap}>
            <h2 className={css.footer_main_title}>Footer</h2>

            <Outlet />
        </div>
    );
};

export default Footer;