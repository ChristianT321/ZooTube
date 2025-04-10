'use client'
import { useState } from 'react'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

const questions = [
  {
    question: 'What is the largest animal in the world?',
    choices: ['Colossal squid', 'Blue whale', 'Green anaconda', 'Giraffe'],
    answer: 'Blue whale',
  },
  {
    question: 'What is the only bird that is able to fly backwards?',
    choices: ['Owl', 'Hawk', 'Toucan', 'Hummingbird'],
    answer: 'Hummingbird',
  },
  {
    question: 'What is the worlds sleepiest animal, snoozing for up to 22 hours a day?',
    choices: ['Red panda bear', 'Koala', 'Seal', 'Sloth'],
    answer: 'Koala',
  },
  {
    question: 'What are the only animals to have horns entirely made up of keratin (the same material as human hair and nails)?',
    choices: ['Rhinoceros', 'Domestic goat', 'Bull', 'Water buffalo'],
    answer: 'Rhinoceros',
  },
  {
    question: 'Which is the only great ape to live in solitary?',
    choices: ['Chimpanzee', 'Bonobos', 'Orangutan', 'Gorilla'],
    answer: 'Orangutan',
  },
  {
    question: 'What animal uses its eyes to help it swallow food?',
    choices: ['Chameleon', 'Giant squid', 'Barreleye fish', 'Frog'],
    answer: 'Frog',
  },
  {
    question: 'Which animals tooth looks like a horn?',
    choices: ['Rhinoceros', 'Narwhal', 'Horned Lizard', 'Horseshoe crab'],
    answer: 'Narwhal',
  },
  {
    question: 'What animal has the most human-like fingerprints?',
    choices: ['Koala', 'Chimpanzee', 'Orangutan', 'Kangaroo'],
    answer: 'Koala',
  },
  {
    question: 'What group of animals produce tadpoles?',
    choices: ['Amphibians', 'Crustaceans', 'Reptiles', 'Fish'],
    answer: 'Amphibians',
  },
  {
    question: 'About what percentage of animal species on Earth have not yet been discovered?',
    choices: ['Less than 10%', '40%', '80%', 'Greater than 90%'],
    answer: '80%',
  },
]

export default function TriviaPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({})

  const score = Object.entries(selectedAnswers).filter(
    ([index, answer]) => answer === questions[Number(index)].answer
  ).length

  const handleAnswer = (index: number, choice: string) => {
    if (selectedAnswers[index]) return
    setSelectedAnswers({ ...selectedAnswers, [index]: choice })
  }

  const handleReset = () => {
    setSelectedAnswers({})
  }

  return (
    <main
        className="min-h-screen bg-no-repeat bg-top"
        style={{
            backgroundImage: "url('/leaves.svg')",
            backgroundSize: "140% auto",
        }}
>
      <Header />
      <div className="max-w-4xl mx-auto mt-12 mb-12 px-6 py-15 bg-white rounded-xl">
        <h1 className="text-5xl font-bold text-center text-green-700 mb-4">Animal Trivia</h1>
        <p className="text-center mb-6 text-lg text-gray-700">
          Test your knowledge! Score: <br /> {score} / {questions.length}
        </p>

        {questions.map((q, index) => (
          <div
            key={index}
            className="mb-6 p-4 bg-green-200 rounded shadow-md border border-gray-300"
          >
            <p className="font-semibold mb-3">{index + 1}. {q.question}</p>
            <div className="grid grid-cols-2 gap-3">
              {q.choices.map((choice) => {
                const isSelected = selectedAnswers[index] === choice
                const isCorrect = choice === q.answer
                const hasAnswered = index in selectedAnswers

                let buttonStyle = 'px-4 py-2 rounded border'
                if (hasAnswered) {
                  if (isSelected && isCorrect) {
                    buttonStyle += ' bg-green-500 text-white'
                  } else if (isSelected && !isCorrect) {
                    buttonStyle += ' bg-red-500 text-white'
                  } else {
                    buttonStyle += ' bg-gray-100 text-gray-600'
                  }
                } else {
                  buttonStyle += ' bg-yellow-200 hover:bg-yellow-400'
                }

                return (
                  <button
                    key={choice}
                    className={buttonStyle}
                    onClick={() => handleAnswer(index, choice)}
                    disabled={hasAnswered}
                  >
                    {choice}
                  </button>
                )
              })}
            </div>

            {selectedAnswers[index] && (
              <p className="mt-4 font-black text-lg text-center">
                {selectedAnswers[index] === q.answer ? (
                  <span
                  className="text-green-600"
                  style={{ WebkitTextStroke: '1px black' }}
                >
                  Correct!
                </span>
                ) : (
                  <span
                  className="text-red-600"
                  style={{ WebkitTextStroke: '1px black' }}
                >         
                  Incorrect, please try again next time.
                </span>
                )}
              </p>
            )}
          </div>
        ))}

        <div className="text-center mt-10">
            <p className="mb-6 text-xl text-gray-700">
                Final Score: {score} / {questions.length}
            </p>
          <button
            onClick={handleReset}
            className="bg-yellow-800 hover:bg-amber-950 text-white px-9 py-3 rounded shadow border-2 border-black"
          >
            Reset Quiz
          </button>
        </div>
      </div>
      <Footer />
    </main>
  )
}