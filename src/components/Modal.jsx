import React, { useContext } from 'react'
import { AppContext } from '../context'

const Modal = () => {

  const { closeModal, isModal, correctAnswers, quizData } = useContext(AppContext);

  return (
    <div className={`fixed top-0 left-0 h-[100%] w-[100%] bg-black bg-opacity-75
    flex items-center justify-center  ${isModal ? 'opacity-1 z-20' : 'opacity-0 z-[-1]'}`}>

      <div className='w-[90vw] p-4 max-w-[700px] bg-white rounded-md'>

        <div className='flex flex-col gap-y-3 sm:gap-y-8 justify-center items-center'>

          <h1 className='text-3xl sm:text-6xl w-full text-center font-semibold'>Congrats</h1>

          <p className='text-4xl w-full font-bold text-center text-blue-800 '>
            You answered {((correctAnswers / quizData.length) * 100).toFixed(0)}% of
            questions correctly
          </p>

          <button onClick={closeModal} className='text-base mt-6 h-6 block bg-[#ffb100] text-black w-[60%]
          sm:w-[30%] sm:h-9 sm:text-xl 
          rounded-lg transition-all duration-300 ease-in
            hover:bg-[#805900] hover:text-[#ffb100] '>Play Again</button>
        </div>
      </div>
    </div>
  )
}

export default Modal