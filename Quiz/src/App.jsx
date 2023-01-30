import { useEffect, useState } from 'react'
import './App.css'
import StartPage from './Components/StartPage'
import Question from './Components/Question'
function App() {

  const [page,setPage] = useState(true)
  const [questions,setQuestions] = useState([]);
  const [isRevealed,setIsRevealed] = useState(false);
  const [count,setCount] = useState(0);
  useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple")
    .then((res)=> res.json())
    .then((data) => setQuestions(data.results));
  },[])
  
  const fetchNewQuestions = () => {
    fetch("https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple")
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  };

  let questionsArray = questions.map((ques) => {
    return <Question question={ques.question} 
                     incorrectAns = {ques.incorrect_answers}
                     correctAns = {ques.correct_answer}
                     isRevealed={isRevealed} 
                     setCount={setCount} />
  })

  return (
    <div className="App">
      {page ? <StartPage onClick={()=> setPage(!page)} /> : questionsArray }
      {!page && (isRevealed? <div style={{marginTop:'20px'}}><span>You Scored {count}/5</span><button className='button' onClick={()=>{setIsRevealed(false);setCount(0);fetchNewQuestions();}} >Play Again</button></div> :<div style={{marginTop:'20px'}}><button className='button' onClick={()=>setIsRevealed(true)}>Check Answers</button></div>)}
    </div>
  )
}

export default App
