import React, { useContext, useState } from 'react'
import { AppContext } from '../context'


const API_ENDPOINT = 'https://opentdb.com/api.php?'

const Form = () => {

  const { formData, setFormData, handleSubmit } = useContext(AppContext);

  console.log(formData)


  function handleChange(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  }


  return (
    <div className='flex justify-center items-center min-h-[100vh]'>

      <div className='w-[90vw] max-w-[500px] mx-16 p-12 bg-white '>

        <form onSubmit={handleSubmit} className="flex flex-col gap-y-3" >

          <h1 className='text-4xl sm:text-5xl font-bold mb-8' >Quizo Setup</h1>
          <div className='mb-2'>
            <label htmlFor="amount" className="block font-light text-base capitalize">Enter the no of questions</label>
            <br />
            <input type="number"
              name="amount"
              id="amount"
              onChange={handleChange}
              value={formData.amount}
              min={1}
              max={10}
              className='w-full mt-2 rounded-md px-1 py-2 bg-slate-200 '
            />
          </div>

          <div className='mb-2'>
            <label className="block font-light text-base capitalize" htmlFor="category">Select the category</label>
            <br />
            <select
              name="category"
              id="category"
              className='w-full mt-2 rounded-md px-1 py-2 bg-slate-200 '
              value={formData.category}
              onChange={handleChange}
            >
              <option value="sports">sports</option>
              <option value="history">history</option>
              <option value="politics">politics</option>

            </select>
          </div>

          <div className='mb-2'>
            <label className="block font-light text-base capitalize" htmlFor="difficulty">Select the difficulty</label>
            <br />
            <select
              name="difficulty"
              id="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              className='w-full mt-2 rounded-md px-1 py-2 bg-slate-200 '
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>

            </select>
          </div>

          <button className='text-base mx-auto mt-6 h-6 block bg-[#ffb100] text-black w-[60%]
          sm:w-[full] sm:text-xl sm:h-9
          rounded-lg transition-all duration-300 ease-in
            hover:bg-[#805900] hover:text-[#ffb100] '>Start</button>

        </form>
      </div>
    </div>
  )
}

export default Form