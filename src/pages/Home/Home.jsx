import React from 'react';
import { Outlet } from 'react-router-dom';
import { HomeTitle, HomeWrap } from './Home.styled';

const Home = () => {
return (
    <HomeWrap>
        <HomeTitle>Home</HomeTitle>
        <Outlet />
    </HomeWrap>
);
};

export default Home;