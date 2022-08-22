import React, { useState } from 'react'
// import Trivia from './components/Trivia'
// import { v4 } from 'uuid'
import Trivia from './components/Trivia'

// figma link
// https://www.figma.com/file/E9S5iPcm10f0RIHK8mCqKL/Quizzical-App?node-id=8%3A2

export default function App() {
  const [dataArray, setDataArray] = useState([
    {
      category: 'History',
      type: 'multiple',
      difficulty: 'medium',
      question:
        'Which country had an &quot;Orange Revolution&quot; between 2004 and 2005?',
      correct_answer: 'Ukraine',
      incorrect_answers: ['Belarus', 'Latvia', 'Lithuania'],
    },
    {
      category: 'Animals',
      type: 'multiple',
      difficulty: 'hard',
      question: 'Which of these animals is NOT a lizard?',
      correct_answer: 'Tuatara',
      incorrect_answers: ['Komodo Dragon', 'Gila Monster', 'Green Iguana'],
    },
    {
      category: 'Mythology',
      type: 'multiple',
      difficulty: 'medium',
      question:
        'According to the Egyptian Myth of Osiris, who murdered Osiris?',
      correct_answer: 'Set',
      incorrect_answers: ['Horus', 'Ra', 'Anhur'],
    },
    {
      category: 'Entertainment: Video Games',
      type: 'boolean',
      difficulty: 'easy',
      question:
        'In Heroes of the Storm, the Cursed Hollow map gimmick requires players to kill the undead to curse the enemy team.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'History',
      type: 'boolean',
      difficulty: 'hard',
      question:
        'During the Winter War, the amount of Soviet Union soliders that died or went missing was five times more than Finland&#039;s.',
      correct_answer: 'True',
      incorrect_answers: ['False'],
    },
    {
      category: 'Entertainment: Video Games',
      type: 'multiple',
      difficulty: 'hard',
      question:
        'In &quot;Magicka&quot;, which two elements are combined to cast the spell, &quot;Nullify&quot;?',
      correct_answer: 'Arcane + Shield',
      incorrect_answers: [
        'Lightning + Shield',
        'Lightning + Life',
        'Arcane + Life',
      ],
    },
    {
      category: 'General Knowledge',
      type: 'multiple',
      difficulty: 'medium',
      question:
        'The website &quot;Shut Up &amp; Sit Down&quot; reviews which form of media?',
      correct_answer: 'Board Games',
      incorrect_answers: ['Television Shows', 'Video Games', 'Films'],
    },
    {
      category: 'Entertainment: Music',
      type: 'multiple',
      difficulty: 'hard',
      question:
        'What is the first track on the Dave Matthews Band album &quot;Before These Crowded Streets&quot;?',
      correct_answer: 'Pantala Naga Pampa',
      incorrect_answers: [
        'Stay (Wasting Time)',
        'Rapunzel',
        'Don&#039;t Drink The Water',
      ],
    },
    {
      category: 'Entertainment: Music',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'What 1970&#039;s American ballad referred to the 1959 plane crash as the &quot;the day the music died&quot;?',
      correct_answer: 'American Pie',
      incorrect_answers: [
        'Kentucky Rain',
        'I Will Always Love You',
        'Rock &#039;n&#039; Roll Suicide',
      ],
    },
    {
      category: 'General Knowledge',
      type: 'boolean',
      difficulty: 'medium',
      question:
        'The commercial UK channel ITV stands for &quot;International Television&quot;.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
  ])

  const [start, setStart] = useState(false)
  const [home, setHome] = useState(true)

  function handleStart() {
    setStart(true)
    setHome(false)
  }

  return (
    <div className="app">
      <div className="container">
        <div className="main">
          {home && (
            <main>
              <h2>Quizzical &#128519;</h2>
              <p>Welcome, Carefully select your answers &#129300;</p>
              <p>
                Note: when picked there is not changing it, Goodluck &#128513;
              </p>
              <button className="btns" onClick={handleStart}>
                Start Quiz &#128527;
              </button>
            </main>
          )}
          {start && <Trivia dataArray={dataArray} />}
          <img src="./img/blob-top.svg" alt="" />
          <img src="./img/blob-bottom.svg" alt="" />
        </div>
      </div>
    </div>
  )
}
