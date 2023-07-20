import React from 'react';
import css from './Home.module.css';

const Home = () => {
    return (
        <>
        <div className={css.homeWrap}>
            <div className={css.title_wrap}>
                <h1 className={css.homeTitle}>Discover Your Ideal Choice: Learn More Within <span className={css.timeHighlight}>2 Minutes</span>, and It Might Just Be the Sign You've Been Waiting For!</h1>
                <button className={css.homeButton}>Start!</button>
            </div>
        </div>
        </>
    );
};

export default Home;
