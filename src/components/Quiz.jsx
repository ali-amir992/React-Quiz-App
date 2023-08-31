import React, { useContext } from 'react'
import { AppContext } from '../context'

const Quiz = () => {

  const { quizData, questionNumber, correctAnswers, checkAnswer, nextQuestion } = useContext(AppContext)

  const { question, correct_answer, incorrect_answers } = quizData[questionNumber];

  // Combine both correct and incorrect answers into a single array
  const all_answers = [correct_answer, ...incorrect_answers];

  // Shuffle the answers using the Fisher-Yates shuffle algorithm
  for (let i = all_answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all_answers[i], all_answers[j]] = [all_answers[j], all_answers[i]];
  }



  return (
    <div className='flex justify-center items-center min-h-[100vh]'>

      <div className='bg-white max-w-[1170px] w-[90vw] p-12 '>

        <div className='flex flex-col justify-center items-center gap-y-4'>

          <p className='self-end'>Correct Answers  <span>{correctAnswers}</span> / <span>{questionNumber}</span>
          </p>

          <div className='text-4xl font-bold m-2 text-center' dangerouslySetInnerHTML={{ __html: question }}></div>


          <div className='w-full gap-y-3 mt-3 flex flex-col justify-center items-center'>
            {all_answers.map((answer, index) => (

              <button key={index} data-content={answer}
                onClick={() => checkAnswer(answer === correct_answer)}

                className='text-xl h-9 block bg-[#8bcbf9] text-black rounded-lg 
           transition-all duration-200 ease-in w-[100%] sm:w-[60%]
            hover:bg-[#49a6e9] hover:text-white'
            dangerouslySetInnerHTML={{ __html: answer }}>
              </button>
            ))}
          </div>


          <button className='text-xl self-end mt-6 h-9 block bg-[#ffb100] text-black w-[60%]
          sm:w-[30%] 
          rounded-lg transition-all duration-300 ease-in
            hover:bg-[#805900] hover:text-[#ffb100] ' onClick={nextQuestion}>Next Question</button>


        </div>
      </div>
    </div>
  )
}

export default Quiz