import React from 'react';
import { Outlet } from "react-router-dom";
import css from './Video.module.css';

const Video = () => {
    return (
        <div className={css.videoWrap}>
            <h2 className={css.videoTitle}>Video</h2>
            <Outlet />
        </div>
    );
};

export default Video;
