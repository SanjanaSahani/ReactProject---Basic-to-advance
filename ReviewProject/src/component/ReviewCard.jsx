import React, { useState } from 'react'
import data from '../data'
import { RiDoubleQuotesR } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function ReviewCard() {
  const [index, setIndex] = useState(0);
  const { name, job, info, img } = data[index];

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }

    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };

  const nextbutton = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex);
    })
  }
  const prevbutton = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex);
    })
  }

  const randomPerson = () => {
    let random = Math.floor(Math.random() * data.length)
    if (random === index) {
      random = index + 1
    }
    setIndex(checkNumber(random))
  };

  return (
    <article
      className='w-[40%] text-center border-2  rounded relative left-[30%] p-4 m-2'
    >
      <div><RiDoubleQuotesR className='bg-blue-600 text-white text-3xl rounded-full absolute left-[37%] top-11 z-10' />
        <img className='w-[160px] h-[160px] rounded-full bg-blue-600 items-center relative left-[35%] pr-2 m-2' src={img} alt={name} />
        <h1 className='font-bold text-xl '>{name}</h1>
        <h4 className='text-blue-600'>{job}</h4>
        <p>{info}</p>
        <div className='flex justify-center items-center gap-3 text-blue-600 font-bold'>
          <button onClick={nextbutton}><IoIosArrowBack /></button>
          <button onClick={prevbutton}><IoIosArrowForward /></button>
        </div>
        <button
          onClick={randomPerson}
          className='py-1 px-2 m-2 rounded bg-blue-200 text-blue-600 font-semibold text-sm'
        >Surprise Me</button>
      </div>
    </article>
  )
}

export default ReviewCard