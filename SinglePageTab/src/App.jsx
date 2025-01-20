import { useState } from "react";
import data from "./data";
import "./App.css";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function App() {
  const [jobs, setJobs] = useState(data);
  const [value, setValue] = useState(0);

  const { title, dates, duties, company } = jobs[value];

  return (
    <>
      <h1 className="text-center text-4xl text-black m-6 font-bold font-serif">Experience</h1>
      <section className="flex justify-center items-start gap-[10%] mx-[20%]">
        {/* Company Buttons */}
        <div className="flex flex-col gap-2">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`px-4 py-2 rounded-md text-left ${
                  index === value
                    ? " text-blue-400 font-bold"
                    : " text-gray-600"
                }`}
              >
                {item.company}
              </button>
            );
          })}
        </div>

        {/* Job Details */}
        <div>
          <h1 className="text-3xl m-2">{title}</h1>
          <button
            className="bg-slate-300 border-1 rounded-md text-black px-2 py-1 m-2"
            type="button"
          >
            {company}
          </button>
          <p className="text-gray-400 text-md m-2">{dates}</p>
          <div className="text-gray-600">
            {duties.map((duty, index) => {
              return (
                <div key={index} className="flex gap-5 m-8">
                  <MdKeyboardDoubleArrowRight className="text-blue-500 text-4xl" />
                  <p>{duty}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
