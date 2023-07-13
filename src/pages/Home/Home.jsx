import React from 'react';
import { Outlet } from 'react-router-dom';
import { HomeWrap } from './Home.styled';

const Home = () => {
return (
    <HomeWrap>
        <h1>Якась дуже довга як для заголовка заглушка, по-розміру типу щось схоже як ось ця!</h1>
        <button> </button>
        <Outlet />
    </HomeWrap>
);
};

export default Home;