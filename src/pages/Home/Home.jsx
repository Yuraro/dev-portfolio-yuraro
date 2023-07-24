// Home.js

import React from 'react';
import css from './Home.module.css';
import BraineImage from '../../images/Brain.png';
import Subtitles from 'components/Subtitles/Subtitles';
import { Link } from 'react-router-dom';
import js_img from '../../images/js.svg';
import react_img from '../../images/react.svg';
import html_img from '../../images/html.svg';
import css_img from '../../images/css.svg';

const Home = () => {
return (
    <>
        <div className={css.homeWrap}>
        <div className={css.title_wrap}>
            <h1 className={css.homeTitle}>Discover Your Ideal Choice: Learn More Within <span className={css.timeHighlight}>2 Minutes</span>, and It Might Just Be the Sign You've Been Waiting For!</h1>
            <Link to="/about" className={css.homeButton}>
            Start!
            </Link>
        </div>
        <div className={css.img_wrap}>
            <div className={css.circle_wrapper}>
                <img src={js_img} alt="Circle 1" className={css.small_circle_img} />
            </div>
            <div className={css.circle_wrapper}>
                <img src={react_img} alt="Circle 2" className={css.small_circle_img} />
            </div>
            <div className={css.circle_wrapper}>
                <img src={html_img} alt="Circle 3" className={css.small_circle_img} />
            </div>
            <div className={css.circle_wrapper}>
                <img src={css_img} alt="Circle 4" className={css.small_circle_img} />
            </div>
                <img src={BraineImage} alt="Braine Logo" width={655 / 2} height={730 / 2} className={css.image_braine} />
            </div>
        </div>
    <Subtitles></Subtitles>
    </>
    );
};

export default Home;
