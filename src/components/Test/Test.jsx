import React, { useState } from 'react';
import Question from '../Question/Question';
import css from './Test.module.css';

const Test = ({ answers, setAnswers }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const questions = [
    {
        question: 'Question 1?',
        options: ['Yes', 'No'],
    },
    {
        question: 'Question 2?',
        options: ['Yes', 'No'],
    },
    {
        question: 'Question 3?',
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
            </div>
            ) : (
                <h2 className={css.test_failed}>Test not completed.<br/>Unfortunately, we are not a match!</h2>
            )}
            </>
        )}
        </div>
    </div>
);
};

export default Test;


