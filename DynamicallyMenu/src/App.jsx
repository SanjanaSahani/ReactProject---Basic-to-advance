import { useState } from 'react'
import items from './data'
import './App.css'
import Card from './component/Card'
import Category from './component/Category'

const allCategories = ['All', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [category, setCategory] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <>
      <h1 className='text-4xl font-bold font-serif text-black text-center m-4'>Restaurant Menu Page</h1>
      <p className='font-semibold m-2 text-center'>Dynamically Adding Category Button in Restaurant Menu Page</p>
      <div>
        <Category category={category} filterItems={filterItems} />
        <Card items={menuItems} />
      </div>
    </>
  )
}

export default App
