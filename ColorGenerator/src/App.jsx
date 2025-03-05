import { useState } from "react"
import Values from 'values.js'
import SingleColor from './SingleColor'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error);

    }


  }
  return (
    <>
      <section className="flex m-12">
        <h3 className="text-[1.563rem] text-black capitalize">color generator :</h3>
        <form onSubmit={handleSubmit}>
          <input className={`${error ? "border-red-700 border-2" : null} p-2 bg-white ml-4`} type="text" value={color} placeholder="#f15025" onChange={(e) => setColor(e.target.value)} />
          <button className="bg-purple-600 text-white p-2 rounded-r hover:bg-purple-900" type="submit">Submit</button>
        </form>
      </section>
      <section className="flex flex-wrap">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
        })}
      </section>
    </>
  )
}

export default App
