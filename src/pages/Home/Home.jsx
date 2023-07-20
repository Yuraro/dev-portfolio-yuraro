import React from 'react';
import css from './Home.module.css';

const Home = () => {
    return (
        <>
        <div className={css.homeWrap}>
            <h1 className={css.homeTitle}>Discover Your Ideal Choice: Learn More Within 2 Minutes, and It Might Just Be the Sign You've Been Waiting For!</h1>
            <button className={css.homeButton}>Натисни мене!</button>
        </div>
        </>
    );
};

export default Home;
