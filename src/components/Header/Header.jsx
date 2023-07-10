import React from 'react';
import { Outlet } from "react-router-dom";
import { Container, HeaderWrap, Link } from './Header.styled';


const Header = () => {

    return (
        <Container>
            <HeaderWrap>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                </nav>
            </HeaderWrap>
                <Outlet/>
        </Container>
    );
};

export default Header;