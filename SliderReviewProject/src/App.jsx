import { useState, useEffect } from 'react'
import data from './data'
import './App.css'
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import { RiDoubleQuotesR } from "react-icons/ri";

function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  
  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + people.length) % people.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % people.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % people.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [people.length]);


  return (
    <>
      <h1 className="text-3xl text-purple-400 font-sans-serif text-center mt-10 mb-4 ">Slider Review Project</h1>
      <section className="relative max-w-[800px] mx-auto p-6">
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={handlePrev}
            className="text-4xl text-purple-500 hover:text-purple-700 transition duration-300"
          >
            <HiChevronLeft />
          </button>
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;

            // Determine active or inactive slides
            let position = "hidden opacity-0 scale-75";
            if (personIndex === index) {
              position = "block opacity-100 scale-100";
            }

            return (
              <article
                key={id}
                className={`transition-all duration-700 transform ${position} text-center w-[800px]`}
              >
                <img
                  className="w-36 h-36 rounded-full border-4 border-purple-400 mx-auto mb-4 object-cover"
                  src={image}
                  alt={name}
                />
                <h1 className="text-purple-500 text-xl uppercase mb-2">{name}</h1>
                <p className="text-gray-600 capitalize mb-4">{title}</p>
                <p className="text-gray-500 text-sm  mx-auto w-[450px] italic">
                  "{quote}"
                </p>
              </article>
            );
          })}
          <button
            onClick={handleNext}
            className="text-4xl text-purple-500 hover:text-purple-700 transition duration-300"
          >
            <HiChevronRight />
          </button>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 mt-6">
          {people.map((_, personIndex) => (
            <div
              key={personIndex}
              onClick={() => setIndex(personIndex)}
              className={`w-3 h-3 rounded-full cursor-pointer transition duration-300 ${
                personIndex === index
                  ? "bg-purple-500 scale-110"
                  : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </section>
    </>
  );
}

export default App

