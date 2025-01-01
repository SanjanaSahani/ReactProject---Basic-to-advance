import React from 'react'

function Category({category, filterItems}) {
  return (
    <>
    <div className='flex justify-center gap-6 m-6'>
   {category.map((category, index) => {
    return (
      <button 
      type='button'
      key={index}
      className=' bg-yellow-600 text-white rounded-md px-4 py-1'
      onClick={() => filterItems(category)}
      >
      {category}
        </button>
    )
   })}
    </div>
    </>
  )
}

export default Category