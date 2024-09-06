import { useState } from "react"

const Button = (props) => {
  const { text, handler } = props
  return <button onClick={handler}>{text}</button>
}

const StatisticsLine = (props) => {
  const { text, value } = props
  return <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
}

const Statistics = (props) => {
  const { good, neutral, bad } = props
  const total = good + neutral + bad

  const averageCalc = () => {
    return total === 0 ? 0 : (good - bad) / total
  }

  const positivePercent = () => {
    return (total === 0 ? 0 : (good / total) * 100) + " %"
  }

  if (total === 0) {
    return <p>No feedback given</p>
  }

  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={total} />
        <StatisticsLine text="average" value={averageCalc()} />
        <StatisticsLine text="positive" value={positivePercent()} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handler={() => setGood(good + 1)} />
      <Button text="neutral" handler={() => setNeutral(neutral + 1)} />
      <Button text="bad" handler={() => setBad(bad + 1)} />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
