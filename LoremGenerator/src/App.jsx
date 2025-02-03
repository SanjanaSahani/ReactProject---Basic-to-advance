import { useState } from 'react'
import './App.css'
import data from './data'

function App() {
  const [count, setCount] = useState(0)
  const [paragraphs, setParagraphs] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1
    }
    if (count > 20) {
      amount = 20
    }

    setParagraphs(data.slice(0, amount))
  }

  const reset = () => {
    setCount(0);
    setParagraphs([]);
  }

  return (
    <>
      <h1 className='text-center text-3xl font-bold text-blue-800 font-serif m-4 uppercase'>Lorem Generator Project</h1>
      <section>
        <h1 className='text-center text-xl font-serif uppercase m-2 mt-14'>tired of boring lorem ipsum?</h1>

        <form className='flex justify-center items-center gap-4 m-6' onSubmit={handleSubmit}>
          <label htmlFor="amount" className='text-center'>Paragraphs:</label>
          <input type="number" name="amount" id="amount" value={count}
            onChange={(e) => setCount(e.target.value)}
            className='border-2 border-blue-800 bg-gray-100 rounded w-16 px-1'
          />
          <button className='bg-green-500 text-white rounded px-2 py-0.5 uppercase' type="submit"> Generate</button>
          <img
            className='w-10 mix-blend-hard-light cursor-pointer'
            onClick={reset}
            src="https://png.pngtree.com/element_our/sm/20180620/sm_5b29c1e05260a.jpg"
            alt="Reset Button"
          />
        </form>

        {paragraphs.map((item, ParaIndex) => {
          return <article key={ParaIndex} className='text-center mx-[25%]'>
            <p
              className='text-gray-500 m-6'>
              {item}
            </p>
          </article>
        })}
      </section>
    </>
  )
}

export default App
