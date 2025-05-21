import React, { useState } from 'react'

const UseState = () => {

    const[count,setcount]=useState(0);
  return (
    <div className='absolute rounded px-7 py-5 bg-gray-300 text-center top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
        <h2 className='p-3 text-2xl font-semibold '>{count}</h2>
        <button className='px-4 py-2 bg-green-500 active:scale-[0.95] border-none rounded-xl text-xl font-semibold text-zinc-100' onClick={()=> setcount(count+10)}>Increment</button>
    </div>
  )
}

export default UseState