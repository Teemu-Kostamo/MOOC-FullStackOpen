import { useState } from 'react'

const Header = ({ text }) => (
  <h1>
    {text}
  </h1>
)

const MostVotes = ({ anecdotes }) => {
  const mostVotes = anecdotes.reduce((most, anecdote) => (anecdote.votes > most.votes) ? anecdote : most)
  return (
    <div>
      <p>{mostVotes.anecdote}</p>
    </div>
  )
}

const Anecdote = ({ anecdoteObject }) => (
  <div>
    <p>{anecdoteObject.anecdote}</p>
  </div>
)

const Votes = ({ votes }) => (
  <p>has {votes} votes</p>
)

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    { anecdote: 'If it hurts, do it more often.', votes: 0 },
    { anecdote: 'Adding manpower to a late software project makes it later!', votes: 0 },
    { anecdote: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0 },
    { anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0 },
    { anecdote: 'Premature optimization is the root of all evil.', votes: 0 },
    { anecdote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0 },
    { anecdote: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', votes: 0 },
    { anecdote: 'The only way to go fast, is to go well.', votes: 0 }
  ]

  const [selected, setSelected] = useState(0)
  const [anecdoteList, setAnecdoteList] = useState(anecdotes)

  const handleVote = () => {
    const newAnecdoteList = [...anecdoteList]
    newAnecdoteList[selected].votes += 1
    setAnecdoteList(newAnecdoteList)
  }

  return (
    <div>
      <Header text='Anecdote of the day'/>
      <Anecdote anecdoteObject={anecdoteList[selected]} />
      <Votes votes={anecdoteList[selected].votes} />
      <Button onClick={handleVote} text='vote' />
      <Button onClick={() => setSelected(Math.floor(Math.random() * anecdoteList.length))} text='next anecdote' />
      <Header text='Anecdote with most votes' />
      <MostVotes anecdotes={anecdoteList} />
    </div>
  )
}

export default App