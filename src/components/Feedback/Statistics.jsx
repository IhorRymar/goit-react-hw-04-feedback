import React from 'react';
import propTypes from 'prop-types';
import css from '../Feedback/Feedback.module.css';

const Statistics = ({ good, neutral, bad, total, percentage }) => (
  <div>
    <ul>
      <li className={css.listItem}>Good: {good}</li>
      <li className={css.listItem}>Neutral: {neutral}</li>
      <li className={css.listItem}>Bad: {bad}</li>
      <li className={css.listItem}>Total: {total}</li>
      <li className={css.listItem}>Positive feedback: {percentage}%</li>
    </ul>
  </div>
);

Statistics.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  percentage: propTypes.number,
};

export default Statistics;
