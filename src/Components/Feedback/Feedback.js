import React from 'react';
import PropTypes from 'prop-types';

import styles from './Feedback.module.css';

const Feedback = ({ options, onLeaveFeedback }) => {
  const buttonOptions = options.map(item => (
    <button
      className={styles.button}
      onClick={() => onLeaveFeedback(item)}
      type="button"
      key={item}
    >
      {item}
    </button>
  ));
  return <>{buttonOptions}</>;
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
