import React, { useContext } from 'react'
import Form from './components/Form'
import Modal from './components/Modal'
import Quiz from './components/Quiz'
import { AppContext } from './context'
import Loading from './components/Loading'

const App = () => {

  const { loading, showForm, isModal } = useContext(AppContext);

  if(loading)
  {
    return <Loading/>
  }

  return (

    <div>
      {isModal ? <Modal /> : <div></div>
      }
      {
        showForm ? <Form /> : <Quiz />
      }

    </div>
  )
}

export default App
