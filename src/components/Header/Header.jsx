import React from 'react';
import { Outlet } from "react-router-dom";


const Header = () => {


    return (
        <HeaderWrap>
            <HeaderTitle>Trending today</HeaderTitle>

            <Outlet />
        </HeaderWrap>
    );
};

export default Header;