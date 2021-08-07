import React from 'react';
import styles from './Stats.module.css';

const Stats = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <ul className="statistic-list">
      <li className={styles.item}>Good: {good}</li>
      <li className={styles.item}>Neutral: {neutral}</li>
      <li className={styles.item}>Bad: {bad} </li>
      <li className={styles.item}>Total: {total}</li>
      <li className={styles.item}>Positive feedback: {positivePercentage}</li>
    </ul>
  </>
);

export default Stats;
