import { useState } from 'react'
import items from './data'
import './App.css'
import Card from './component/Card'
import Category from './component/Category'

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [category, setCategory] = useState([])

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <>
      <h1 className='text-4xl font-bold font-serif text-black text-center m-4'>Food Menu Page</h1>
      <div>
        <Category filterItems={filterItems} />
        <Card items={menuItems} />
      </div>
    </>
  )
}

export default App
