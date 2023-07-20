import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
    return (
        <>
        <div className={css.homeWrap}>
            <h1 className={css.homeTitle}>Якась дуже довга як для заголовка заглушка, по-розміру типу щось схоже як ось ця!</h1>
            <button className={css.homeButton}>Натисни мене!</button>
        </div>
        <footer>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
        </footer>
        </>
    );
};

export default Home;
