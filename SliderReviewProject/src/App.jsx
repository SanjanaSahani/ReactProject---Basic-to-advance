import { useState } from 'react'
import data from 'data.js'
import './App.css'

function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  return (
    <>
        <h1 class="text-3xl font-bold underline text-center m-4">Slider Review Project</h1>
    </>
  )
}

export default App
