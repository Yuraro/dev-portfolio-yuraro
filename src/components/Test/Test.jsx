import React, { useState } from 'react';
import Question from '../Question/Question';
import css from './Test.module.css';

const Test = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const questions = [
    {
        question: 'Question 1?',
        options: ['Option 1.1', 'Option 1.2'],
    },
    {
        question: 'Question 2?',
        options: ['Option 2.1', 'Option 2.2'],
    },
    {
        question: 'Question 3?',
        options: ['Option 3.1', 'Option 3.2'],
    },
    ];

const handleSelectOption = (option) => {
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
            <h2>Test Completed!</h2>
        )}
        </div>
    </div>
    );
};

export default Test;
