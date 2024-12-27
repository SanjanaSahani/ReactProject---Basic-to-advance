import { useState } from 'react'
import items from './data'
import './App.css'
import Card from './component/Card'
import Category from './component/Category'

function App() {
  const [MenuItems, setMenuItems] = useState(items)

  return (
    <>
    <h1 className='text-4xl font-bold font-serif text-black text-center m-4'>Food Menu Page</h1>
    <div>
      <Category/>
      <Card items={MenuItems}/>
    </div>
     </>
  )
}

export default App
