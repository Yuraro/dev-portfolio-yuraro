import React, { useState } from 'react';
import Question from '../Question/Question';
import css from './Test.module.css';
import arrow from '../../images/arrow.png';

const Test = ({ answers, setAnswers }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const questions = [
        {
            question: 'Are you seeking an individual capable of learning to deeply understand the product, its specifics, and intricacies of its operation, and being highly involved in the goals and development of the company?',
            options: ['Yes', 'No'],
        },
        {
            question: 'Are you looking for a person who can actively contribute to the formation of resilient, cohesive, and constantly improving teams?',
            options: ['Yes', 'No'],
        },
        {
            question: 'Do you prioritize finding someone who exhibits a structured and predictable work approach in various domains?',
            options: ['Yes', 'No'],
        },
    ];

    const handleSelectOption = (option) => {
    setAnswers((prev) => [...prev, option]);
    setCurrentQuestion((prev) => prev + 1);
};


    return (
        <div className={css.test}>
            <div className={css.test_container}>
                {currentQuestion < questions.length ? (
                    <Question
                        question={questions[currentQuestion].question}
                        options={questions[currentQuestion].options}
                        onSelectOption={handleSelectOption}
                    />
                ) : (
                    <>
                        {answers.filter((answer) => answer === 'Yes').length === 3 ? (
                            <div className={css.wrap_complited}>
                                <h2 className={css.title_complited}>Test Completed!</h2>
                                <p className={css.text_complited}>Congratulations, you are halfway there!<br /> Now you have successfully gained access to the three files below! </p>
                                <img className={css.arrow} src={arrow} alt="Arrow" width="44" height="44" />
                            </div>
                        ) : (
                            <h2 className={css.test_failed}>Test completed.<br/>Unfortunately, we are not a match!</h2>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Test;