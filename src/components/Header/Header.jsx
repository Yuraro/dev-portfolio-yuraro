import React, { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
    const [currentPath, setCurrentPath] = useState('/');
    const location = useLocation();

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location]);

    const handleContactClick = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };

return (
    <div className={css.container}>
    <header className={css.headerWrap}>
                <div className={css.navWrap}>
                    <Link to="/" className={css.my_name}>YuraRo</Link>
                    <nav className={css.linksNav}>
                        <Link to="/" className={currentPath === '/' ? css.active : ''}>Home</Link>
                        <Link to="/about" className={currentPath.includes('/about') ? css.active : ''}>About</Link>
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