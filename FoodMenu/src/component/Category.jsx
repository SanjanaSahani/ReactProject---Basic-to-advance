import React from 'react'

function Category({filterItems}) {
  return (
    <>
    <div className='flex justify-center gap-6 m-6'>
    <button onClick={() => filterItems('all')} className=' bg-pink-700 text-white rounded-md px-4 py-1'>All</button>
    <button onClick={() => filterItems('drink')} className=' bg-pink-700 text-white rounded-md px-4 py-1'>Drink</button>
    <button onClick={() => filterItems('breakfast')} className=' bg-pink-700 text-white rounded-md px-4 py-1'>Breakfast</button>
    <button onClick={() => filterItems('dinner')} className=' bg-pink-700 text-white rounded-md px-4 py-1'>Dinner</button>
    <button onClick={() => filterItems('dessert')} className=' bg-pink-700 text-white rounded-md px-4 py-1'>Dessert</button>
    <button onClick={() => filterItems('shakes')} className=' bg-pink-700 text-white rounded-md px-4 py-1'>Shake</button>
    </div>
    </>
  )
}

export default Category