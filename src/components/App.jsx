import React, { Component } from 'react';
import Statistics from './Feedback/Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Section from './Feedback/Section';
import Notification from './Feedback/Notification';
import css from '../components/Feedback/Feedback.module.css';

class App extends Component {
  static defaultProps = {
    defaultGood: 0,
    defaultNeutral: 0,
    defaultBad: 0,
  };

  state = {
    good: this.props.defaultGood,
    neutral: this.props.defaultNeutral,
    bad: this.props.defaultBad,
  };

  handleClick = button => {
    this.setState({ [button]: this.state[button] + 1 });
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <div className={css.title}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        {!this.countTotalFeedback() ? (
          <Notification message="There is no feedback!" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </div>
    );
  }
}

export default App;
