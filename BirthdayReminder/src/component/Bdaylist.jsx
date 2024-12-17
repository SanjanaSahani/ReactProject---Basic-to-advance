import React from 'react'

function Bdaylist({ people }) {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className='flex gap-4 my-6'>
            <img className='w-14 rounded-full' src={image} />
            <div>
              <h4 className='font-semibold text-lg'>{name}</h4>
              <p className='text-gray-400 text-sm'>{age} years</p>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default Bdaylist