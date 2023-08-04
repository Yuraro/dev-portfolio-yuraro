import React from 'react';
import css from './Presentation.module.css';
import YouTube from 'react-youtube';

const Video = () => {
    const videoId = '27uAlFQjDmw';

    const opts = {
        height: '360',
        width: '640',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <div className={css.videoWrap}>
            <div className={css.youtube_wrap}>
                <YouTube className={css.video} videoId={videoId} opts={opts} />
            </div>
        </div>
    );
};

export default Video;

