import { useState } from 'react'
import data from './data'
import './App.css'
import SingleQuestion from './SingleQuestion'

function App() {
  const [questions, setQuestions] = useState(data)

  return (
    <>
      <main>
        <h1 className='text-3xl text-center text-white font-semibold p-4'>Accordion Project</h1>

        <div className='flex gap-10 bg-white text-black rounded-md my-10 mx-20 w-auto'>
          <h3 className='text-2xl font-semibold p-4'>Questions And Answers About Login</h3>
          <section className='m-2 w-[100%]'>
            {questions.map((question) => {
              return (
                <SingleQuestion key={question.id} {...question}></SingleQuestion>
              );
            })}
          </section>
        </div>
      </main>
    </>
  )
}

export default App
