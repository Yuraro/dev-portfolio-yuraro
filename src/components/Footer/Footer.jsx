import React from 'react';
import { Outlet } from "react-router-dom";
import { FooterTitle, FooterWrap } from './Footer.styled';


const Footer = () => {


    return (
        <FooterWrap>
            <FooterTitle>Footer</FooterTitle>

            <Outlet />
        </FooterWrap>
    );
};

export default Footer;