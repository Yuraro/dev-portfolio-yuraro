import React from 'react';
import css from './Home.module.css';
import BraineImage from '../../images/Brain.png'; 
import Subtitles from 'components/Subtitles/Subtitles';

const Home = () => {
    return (
        <>
        <div className={css.homeWrap}>
            <div className={css.title_wrap}>
                <h1 className={css.homeTitle}>Discover Your Ideal Choice: Learn More Within <span className={css.timeHighlight}>2 Minutes</span>, and It Might Just Be the Sign You've Been Waiting For!</h1>
                <button className={css.homeButton}>Start!</button>
            </div>
            <div className={css.img_wrap}>
                <img src={BraineImage}
                    alt="Braine Logo" width={655 / 2}
                    height={730 / 2}
                    className={css.image_braine} />
            </div>
        </div>
            <Subtitles></Subtitles>
        </>
    );
};

export default Home;
