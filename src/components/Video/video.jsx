import React from 'react';
import { Outlet } from "react-router-dom";


const Video = () => {


    return (
        <VideoWrap>
            <VideoTitle>Trending today</ViTitle>

            <Outlet />
        </VideoWrap>
    );
};

export default Video;