import React from 'react';
import styles from './Section.module.css';

const Section = ({ title, children }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </div>
);

export default Section;
