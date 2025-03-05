import React, { useEffect, useState } from 'react'
import rgbToHex from './Utils'

function SingleColor({ rgb, weight, index, hexColor }) {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb)
  const hexValue = `#${hexColor}`
  useEffect(()=>{
    const timeout = setTimeout(() => {
      setAlert(false)
    },3000)
    return () => clearTimeout(timeout)
  }, [alert])
  return (
    <>
      <article 
       className={`${index > 10 && "text-white"} w-[250px] h-[149px]`} 
       style={{ backgroundColor: `rgb(${bcg})` }}
       onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
       }}
       >
        <p className='mx-[30px] my-[10px]'>{weight}%
          <br />
          <p >{hexValue}</p>
        </p>
        {alert && <h6 className="text-gray-400 mx-[30px] my-[10px] uppercase text-xs">copied to clipboard</h6>}
      </article>
    </>
  )
}

export default SingleColor