import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='border-2 rounded-md p-4 m-4 w-auto'>
      <header className='flex '>
        <h4 className='font-bold w-[100%]'>{title}</h4>
        <button className='rounded-full bg-gray-200 p-2 ' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p className='text-gray-500 w-[100%]'>{info}</p>}
    </article>
  );
};

export default Question;