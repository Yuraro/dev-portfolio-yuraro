import React from 'react';
import { Outlet } from "react-router-dom";
import { HeaderTitle, HeaderWrap } from './Header.styled';


const Header = () => {


    return (
        <HeaderWrap>
            <HeaderTitle>Header</HeaderTitle>

            <Outlet />
        </HeaderWrap>
    );
};

export default Header;