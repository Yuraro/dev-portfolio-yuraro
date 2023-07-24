import React, { Suspense } from 'react';
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
            <NavLink exact to="/" className={css.my_name}>YuraRo</NavLink>
        <nav className={css.linksNav}>
            <NavLink exact to="/" activeClassName={css.active}>Home</NavLink>
            <NavLink to="/about" activeClassName={css.active}>About</NavLink>
        </nav>
        <button className={css.contactBtn} onClick={handleContactClick}>Contact</button>
        </div>
    </header>
    <main>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
    </main>
    </div>
);
};

export default Header;