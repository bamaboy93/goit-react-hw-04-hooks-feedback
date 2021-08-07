import { useState } from 'react';
import Section from './Components/Section/Section';
import Stats from './Components/Stats/Stats';
import Feedback from './Components/Feedback/Feedback';
const App = ({ options }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onBtnClick = name => {
    switch (name) {
      case 'good':
        return setGood(prevState => prevState + 1);
      case 'neutral':
        return setNeutral(prevState => prevState + 1);
      case 'bad':
        return setBad(prevState => prevState + 1);
      default:
        return;
    }
  };
  const countPositiveFeedbackPercentage = Math.round(
    (good / (good + neutral + bad)) * 100,
  );
  const countTotalFeedback = good + neutral + bad;
  return (
    <>
      <Section title={'Please leave feedback'}>
        <Feedback
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onBtnClick}
        />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback > 0 ? (
          <Stats
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <h3>Feedback not given!</h3>
        )}
      </Section>
    </>
  );
};

export default App;
