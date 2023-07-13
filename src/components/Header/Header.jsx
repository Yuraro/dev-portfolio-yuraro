import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ContactBtn, Container, HeaderWrap, NavWrap } from './Header.styled';


const Header = () => {
    
    const handleContactClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };

return (
    <Container>
        <HeaderWrap>
            <NavWrap>
                <p>YuraRo</p>
                <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
                </nav>
            <ContactBtn onClick={handleContactClick}>Contact</ContactBtn>
            </NavWrap>
        </HeaderWrap>
        <Outlet />
    </Container>
);
};

export default Header;