import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'


function App() {
  const [data, setData] = useState([])
  const [tour, setTour] = useState([])
  const [readmore, setReadmore] = useState(false)

  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    ; (async () => {
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get("https://www.course-api.com/react-tours-project")
        console.log(response.data);
        setData(response.data)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    })()

  }, [])

  if (error) {
    return <h1 className='text-center text-4xl font-bold m-10 font-serif'>Something Went Wrong...</h1>
  }
  if (loading) {
    return <h1 className='text-center text-4xl font-bold m-10 font-serif'>Loading...</h1>
  }

  const removeTour = (id) => {
    const newCard = data.filter((tour) => tour.id !== id );
      setData(newCard)
  }

  if(data.length === 0){
    return  <h1 className='text-center text-4xl font-bold m-10 font-auto text-blue-700'>No Tour Left..
    <br /> Please Refresh Page
    </h1>
    
  }
  return (
    <>
      <h1 className='text-center text-4xl font-bold m-2 font-auto text-blue-700'>Ours Tours </h1>
      <h4 className='text-center  font-bold m-4 font-auto text-blue-700'>{data.length} Best Places to Visit</h4>

       {/* showing data from api */}

      {data.map((item) => {
        const { id, name, info, image, } = item;
        return <div key={id} className="max-w-lg rounded-md shadow-md bg-white text-gray-600 m-6 relative left-[32%]">
          <img
            src={image}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-52 bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide text-black">{name}</h2>
              <p className="text-gray-400">
                {readmore ? info : `${info.substring(0, 240)}...`}
                <button className='text-blue-600' onClick={() => setReadmore(!readmore)}>
                  {readmore ? 'show less' : 'show more'}
                </button>
              </p>
            </div>
            <button
              type="button"
              onClick={() => removeTour(id) }
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-600 text-gray-200"
            >
              I'm not Intrested
            </button>
          </div>
        </div>
      })}
    </>
  )
}

export default App
