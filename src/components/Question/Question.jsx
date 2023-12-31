import React from 'react';
import css from './Question.module.css';

const Question = ({ question, options, onSelectOption }) => {
    const handleSelectOption = (option) => {
        onSelectOption(option);
    };

return (
    <div className={css.question}>
        <h2 className={css.title_question}>{question}</h2>
        <div className={css.options}>
        {options.map((option, index) => (
            <button key={index} onClick={() => handleSelectOption(option)}>
                {option}
            </button>
        ))}
        </div>
    </div>
    );
};

export default Question;

