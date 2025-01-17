import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import data from './data'
import './App.css'


function App() {
  const [jobs, setJobs] = useState(data)
  const [value, setValue] = useState(0)




  return (
    <>
      <h1 className='text-center text-4xl text-black m-4 font-bold font-serif'>Experience</h1>
      {data.map((items) => {
        const { id, order, title, dates, duties, company } = items
        return <section key={id} className='flex'>
          <div>{company}</div>
         
        </section>
      })}
    </>
  )
}

export default App
