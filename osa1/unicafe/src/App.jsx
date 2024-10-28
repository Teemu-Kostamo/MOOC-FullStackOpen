import { useState } from 'react'


const Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Total = ({ good, neutral, bad }) => {
  return (
    <tr>
      <td>
        all
      </td>
      <td>
        {good + neutral + bad}
      </td>
    </tr>
  )
}

const Average = ({ good, neutral, bad }) => {
  const goodValue = 1
  const neutralValue = 0
  const badValue = -1
  
  const total = good + neutral + bad
  return (
    <tr>
      <td>
        average
      </td>
      <td>
        {(goodValue * good + neutralValue * neutral + badValue * bad) / total}
      </td>
    </tr>
  )
}

const Positive = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  return (
    <tr>
      <td>
        positive
      </td>
      <td>
        {good / total * 100} %
      </td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  else {
    return (
    <table>
      <tbody>
        <Statisticsline text='good' value={good}/>
        <Statisticsline text='neutral' value={neutral}/>
        <Statisticsline text='bad' value={bad}/>
        <Total good={good} neutral={neutral} bad={bad}/>
        <Average good={good} neutral={neutral} bad={bad}/>
        <Positive good={good} neutral={neutral} bad={bad}/>
      </tbody>
    </table>
  )
  }
}

const Statisticsline = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text = 'Give feedback'/>
      <Button onClick={() => setGood(good + 1)} text='good'/>
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button onClick={() => setBad(bad + 1)} text='bad'/>
      <Header text = 'Statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App