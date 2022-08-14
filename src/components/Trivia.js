import React, { useEffect, useState } from 'react'

export default function Trivia() {
  useEffect(() => {
    function questions() {
      fetch('https://opentdb.com/api.php?amount=10')
        .then((res) => res.json())
        .then((data) => setData(data.results))
    }
    questions()
  }, [])

  const [data, setData] = useState({})

  const triviaArray = data.map((trivia) => {
    return (
      <div>
        <h5>{trivia.question}</h5>
        <div className="answers">
          <small className="answer">{trivia.correct_answer}</small>
          <small className="answer">{trivia.incorrect_answers[0]}</small>
          <small className="answer">{trivia.incorrect_answers[1]}</small>
          <small className="answer">{trivia.incorrect_answers[2]}</small>
        </div>
      </div>
    )
  })

  return <div>{triviaArray}</div>
}
