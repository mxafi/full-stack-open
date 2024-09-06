import { useState } from "react"

const App = () => {

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ]
  
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
  }
  
  const [selected, setSelected] = useState(getRandomInt(anecdotes.length - 1))
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const selectRandomAnecdote = () => {
    setSelected(getRandomInt(anecdotes.length - 1))
  }

  const handleVote = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    setPoints(newPoints)
  }

  const indexOfMostVotes = () => {
    if (points.length === 0) return -1

    let max = points[0]
    let maxIndex = 0

    for (let i = 1; i < points.length; i++) {
      if (points[i] > max) {
        max = points[i]
        maxIndex = i
      }
    }

    return maxIndex
  }

  const currentMostVotedAnecdoteIndex = indexOfMostVotes()

  return <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={() => selectRandomAnecdote()}>next anecdote</button>

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[currentMostVotedAnecdoteIndex]}</p>
      <p>has {points[currentMostVotedAnecdoteIndex]} votes</p>
    </div>
}

export default App
