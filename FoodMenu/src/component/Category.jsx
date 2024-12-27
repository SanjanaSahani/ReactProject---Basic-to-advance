import React from 'react'

function Category() {
  return (
    <>
    <div className='flex justify-center gap-6 m-6'>
    <button className=' bg-pink-700 text-white rounded-md px-4 py-1'>All</button>
    <button className=' bg-pink-700 text-white rounded-md px-4 py-1'>Dinner</button>
    <button className=' bg-pink-700 text-white rounded-md px-4 py-1'>Lunch</button>
    <button className=' bg-pink-700 text-white rounded-md px-4 py-1'>Drink</button>
    <button className=' bg-pink-700 text-white rounded-md px-4 py-1'>Shake</button>
    </div>
    </>
  )
}

export default Category