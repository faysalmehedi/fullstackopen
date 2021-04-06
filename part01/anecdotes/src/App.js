import React, { useState } from 'react';

const Header = ({ text }) => {
    return (
        <div>
            <h1>{text}</h1>
        </div>
    )
}

const Button = ({ text, onClick }) => {
    return (
        <div>
            <button onClick={onClick}>{text}</button>
        </div>
    )
}

const Anecdote = ({ anecdotes, selected, points }) => {
    return (
        <div>
            <p>{anecdotes[selected]}</p>
            <p>has {points[selected]} votes</p>
        </div>
    )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  ]
   
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0)); // from es6 version found in stackoverflow
  const [mostVoted, setMostVoted] = useState(0);

  const handleClicks = () => {
    const random = Math.floor(Math.random() * (anecdotes.length))
    setSelected(random);
  }

  const handleVote = () => {
      let copy = [...points];
      copy[selected] += 1;
      setPoints(copy);

      if (points[selected] >= points[mostVoted]) {
          setMostVoted(selected);
      }
  }


  return (
    <div>
        <Header text={"Anecdote of the day"}/>
        <Anecdote anecdotes={anecdotes} selected={selected} points={points} />
        <Button text="Next Anecdotes" onClick={handleClicks} />
        <Button text="Vote" onClick={handleVote} />
        <Header text={"Anecdote with most votes"}/>
        <Anecdote anecdotes={anecdotes} selected={mostVoted} points={points} />
    </div>
  );
};

export default App;