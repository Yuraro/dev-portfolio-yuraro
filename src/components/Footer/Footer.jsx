import React from 'react';
import { Outlet } from "react-router-dom";


const Footer = () => {


    return (
        <FooterWrap>
            <FooterTitle>Trending today</FooterTitle>

            <Outlet />
        </FooterWrap>
    );
};

export default Footer;