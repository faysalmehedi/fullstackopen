import React, { useState } from 'react';

const Header = ({ title }) => <div><h1>{title}</h1></div>;

const Button = ({ onClick, text }) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

const Statistic = ({ text, number }) => {
  return (
    <td>{text}: {number}</td>
  )
}

const Statistics = ( { good, neutral, bad, all, positive, average} ) => {

  if (!good && !bad && !neutral) {
    return (
      <div>
        <p>No Feedbacks Given</p>
      </div>
    )
  }

  return (
      <table>
        <tbody>
          <tr><Statistic text={'Good'} number={good} /></tr>
          <tr><Statistic text={'Neutral'} number={neutral} /></tr>
          <tr><Statistic text={'Bad'} number={bad} /></tr>
          <tr><Statistic text={'All'} number={all} /></tr>
          <tr><Statistic text={'Average'} number={average ? average : 0} /></tr>
          <tr><Statistic text={'Positive'} number={(positive ? positive : 0) + '%'} /></tr>
        </tbody>
      </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);
  let all = good + bad + neutral;
  let average = (good-bad)/all;
  let positive = (good)/all * 100;


  return (
    <div>
      <Header title={'Give Feedback'} />
      <Button onClick={handleGoodClick} text={'Good'} />
      <Button onClick={handleNeutralClick} text={'Neutral'} />
      <Button onClick={handleBadClick} text={'Bad'} />
      <Header title={'Statistics'} />
      <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} positive={positive} />
    </div>
  )
}

export default App;
