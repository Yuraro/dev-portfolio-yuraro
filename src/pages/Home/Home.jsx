import React from 'react';
import { Outlet } from "react-router-dom";


const Home = () => {


    return (
        <HomeWrap>
            <HomeTitle>Trending today</HomeTitle>

            <Outlet />
        </HomeWrap>
    );
};

export default Home;