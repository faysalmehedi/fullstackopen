import React, { useState } from 'react';

const Header = ({ title }) => <div><h1>{title}</h1></div>;

const Button = ({ onClick, text }) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

const Result = ({ text, number }) => {
  return (
  <div>
    <p>{text}: {number}</p>
  </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);


  return (
    <div>
      <Header title={'Give Feedback'} />
      <Button onClick={handleGoodClick} text={'Good'} />
      <Button onClick={handleNeutralClick} text={'Neutral'} />
      <Button onClick={handleBadClick} text={'Bad'} />
      <Header title={'Statistics'} />
      <Result text={'Good'} number={good} />
      <Result text={'Neutral'} number={neutral} />
      <Result text={'Bad'} number={bad} />
      <Result text={'All'} number={good+bad+neutral} />
      <Result text={'Average'} number={(good-bad)/(good+bad+neutral) ? (good-bad)/(good+bad+neutral) : 0} />
      <Result text={'Positive'} number={((good)/(good+bad+neutral) * 100 ? (good)/(good+bad+neutral) * 100: 0) + '%'} />
    </div>
  )
}

export default App
