import React, { useState } from 'react'

const Card_c0nditional_rendering = () => {
    const [val,setval]=useState(false);
    const changeHandler = ()=> setval(()=> !val);
  return (
    <div className=' text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-7 bg-gray-300 rounded'>
        <h1 className='text-2xl font-sans p-2 '>{val?"BAHAR JAO":"MAT JAO"}</h1>
        <button onClick={changeHandler} className='px-5 py-2 border-none bg-blue-500 text-zinc-50 text-xl font-mono rounded-md'>Change</button>
    </div>
  )
}

export default Card_c0nditional_rendering