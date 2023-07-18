import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Header.module.css';


const Header = () => {
    
    const handleContactClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };

return (
    <div className={css.container}>
    <header className={css.headerWrap}>
        <div className={css.navWrap}>
        <p>YuraRo</p>
        <nav className={css.linksNav}>
            <NavLink exact to="/" activeClassName={css.activeLink}>Home</NavLink>
            <NavLink to="/about" activeClassName={css.activeLink}>About</NavLink>
        </nav>
        <button className={css.contactBtn} onClick={handleContactClick}>Contact</button>
        </div>
    </header>
    <Outlet />
    </div>
);
};

export default Header;