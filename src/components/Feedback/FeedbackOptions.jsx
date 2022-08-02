import React from 'react';
import propTypes from 'prop-types';
import css from '../Feedback/Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={css.btnList}>
    {options.map(option => (
      <li key={option}>
        <button
          className={css.btn}
          type="button"
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string.isRequired),
  onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions;
