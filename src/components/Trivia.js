import React, { useState } from 'react'
// import { v4 } from 'uuid'

export default function Trivia(props) {
  const [questions, setQuestions] = useState([extractQuestions()])
  const [correctAnswers, setCorrectAnswers] = useState([
    extractCorrectAnswers(),
  ])
  const [allAnswers, setAllAnswers] = useState([extractAllAnswers()])
  const [count, setCount] = useState(0)
  const [submit, setSubmit] = useState(false)
  const [tryAgain, setTryAgain] = useState(true)
  const [playAgain, setPlayAgain] = useState(true)
  const [heldAnswers, setHeldAnswers] = useState([])

  function extractQuestions() {
    const allQuestions = props.dataArray
    const newArray = []
    for (let i = 0; i < 5; i++) {
      const array = {
        id: i + 1,
        question: allQuestions[i].question,
        answer: [
          ...allQuestions[i].incorrect_answers,
          allQuestions[i].correct_answer,
        ].sort(() => (Math.random() > 0.5 ? 1 : -1)),
      }
      newArray.push(array)
    }
    return newArray
  }

  function extractCorrectAnswers() {
    const allQuestions = props.dataArray
    const newArray = []
    for (let i = 0; i < 5; i++) {
      const array = {
        id: i + 1,
        answer: allQuestions[i].correct_answer,
        // isCorrect: true,
      }
      newArray.push(array)
    }
    return newArray
  }

  //   const allIncoorect = props.dataArray[0].incorrect_answers

  function extractAllAnswers() {
    const answers = props.dataArray
    const newArray = []
    for (let i = 0; i < 5; i++) {
      const array = {
        id: i + 1,
        answer: [
          ...answers[i].incorrect_answers,
          answers[i].correct_answer,
        ].sort(() => (Math.random() > 0.5 ? 1 : -1)),
      }
      newArray.push(array)
    }
    return newArray
  }

  //Counter
  function increment() {
    setCount((prev) => prev + 1)
  }

  //   const styles = {

  //   }
  //Rendered DOM element
  const element = questions.map((e) =>
    e.map((i) => {
      return (
        <div key={i.id}>
          <h5>{i.question}</h5>
          <div className="answers">
            {i.answer.map((z) => {
              return (
                <button
                  disabled={false}
                  key={z + 1}
                  className="answer"
                  onClick={(event) => handleClick(event, i.id)}
                  // style={{
                  //   backgroundColor: i.id === heldAnswers.id
                  // }}
                >
                  {z}
                </button>
              )
            })}
          </div>
        </div>
      )
    }),
  )

  // console.log(correctAnswers)

  //Click event that checks for answers and sets Count
  function handleClick(event, id) {
    //Selects the correct answer
    for (const [a, b, c, d, e] of correctAnswers) {
      if (id === a.id) {
        event.target.classList.toggle('bg-color')
        a.answer === event.target.innerText && increment()
      } else if (id === b.id) {
        event.target.classList.toggle('bg-color')
        b.answer === event.target.innerText && increment()
      } else if (id === c.id) {
        event.target.classList.toggle('bg-color')
        c.answer === event.target.innerText && increment()
      } else if (id === d.id) {
        event.target.classList.toggle('bg-color')
        d.answer === event.target.innerText && increment()
      } else if (id === e.id) {
        event.target.classList.toggle('bg-color')
        e.answer === event.target.innerText && increment()
      }

      console.log(event.target.disabled)
    }
    //Holds the answer
    // const answer = {
    //   id: id,
    //   value: event.target.innerText,
    //   held: true,
    // }

    // setHeldAnswers([...heldAnswers, answer])
  }

  function check() {
    setSubmit(true)
    setTryAgain(false)
  }

  // function restart() {
  //   setSubmit(false)
  //   setTryAgain(true)
  //   setCount()
  //   play()
  // }

  function play() {
    setPlayAgain(false)
    setPlayAgain(true)
  }

  return (
    <div className="trivia">
      {<main>{element}</main>}
      {tryAgain ? (
        <button className="btns" onClick={check}>
          Check Answers
        </button>
      ) : (
        <button className="btns" onClick={() => window.location.reload(false)}>
          Click to reload and restart
        </button>
      )}
      {submit && <p className="bottom__text">You scored {count}/5</p>}
    </div>
  )
}
