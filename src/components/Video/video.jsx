import React from 'react';
import { Outlet } from "react-router-dom";
import { VideoTitle, VideoWrap } from './Video.styled';


const Video = () => {


    return (
        <VideoWrap>
            <VideoTitle>Video</VideoTitle>

            <Outlet />
        </VideoWrap>
    );
};

export default Video;