import { createContext, useEffect, useState } from "react";


const API_ENDPOINT = 'https://opentdb.com/api.php?'

export const AppContext = createContext();
export default function AppContextProvider({ children }) {


  const [formData, setFormData] = useState({
    amount: 3,
    category: "sports",
    difficulty: "medium"
  })
  const [loading, setLoading] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const [quizData, setQuizData] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const fetchData = async (url) => {

    setShowForm(true);
    setLoading(true);

    try {

      const res = await fetch(url);
      const output = await res.json();

      const { results } = output

      if (results) {

        console.log(results);
        setQuizData(results);

        setLoading(false);
        setShowForm(false);
      }

    } catch (error) {
      console.log("error in fetching data")
      console.log(error)
    }

  }

  function handleSubmit(event) {
    event.preventDefault();

    const { amount, category, difficulty } = formData
    let categoryId;

    switch (category) {
      case "sports":
        categoryId = 21;
        break;
      case "history":
        categoryId = 23;
        break;
      default:
        categoryId = 24;
        break;
    }

    const url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${categoryId}&type=multiple`
    console.log(url)
    fetchData(url)

  }

    
  function checkAnswer(correctAnswer) {
    if (correctAnswer) {
      setCorrectAnswers((oldState)=>oldState+1);
    }

    nextQuestion();
  }

  function nextQuestion() {
    setQuestionNumber((oldState)=>{
      
      const index = oldState+1;

      if (index > quizData.length-1) {
        openModal();
        return 0;
      }
      else{
        return index;
      }
    });
    
  }

  function openModal(params) {
    setIsModal(true);
  }
  function closeModal(params) {
    setIsModal(false);
    setShowForm(true);
    setCorrectAnswers(0);
  }


  const value = {
    quizData,
    setQuizData,
    loading,
    setLoading,
    questionNumber,
    setQuestionNumber,
    correctAnswers,
    setCorrectAnswers,
    isModal,
    setIsModal,
    formData,
    setFormData,
    fetchData,
    handleSubmit,
    showForm,
    setShowForm,
    checkAnswer,
    openModal,
    closeModal,
    nextQuestion


  }

  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>;
}

