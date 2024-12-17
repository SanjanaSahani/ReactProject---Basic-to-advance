import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bdaylist from './component/Bdaylist'
import data from './data'

function App() {
  const [people, setPeople] = useState(data)

  return (
    <>
     <main className='flex justify-center content-center mt-20'>
     <div className='p-3 w-[25%] bg-white border-2-transparent rounded' style={{filter: "drop-shadow(1px 0px 3px black)"}}>
        <h1 className='text-3xl font-semibold'>{people.length} Birthdays Today</h1>
        <hr className='m-3' />
       <Bdaylist people={people}/>
        <button className='text-center text-white p-2 bg-pink-500 w-full rounded font-bold' onClick={() => {
          setPeople([])
        }}>Clear All</button>
      </div>
     </main>
    </>
  )
}

export default App
