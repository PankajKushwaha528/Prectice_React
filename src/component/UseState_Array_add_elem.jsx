import React, { useState } from 'react'
 
const UseState_Array_add_elem = () => {
    const[val,setVal]=useState([1,2,3,4,5,6])
    //for add element from last [...val,7] then every time 7 add in array [1,2,3,4,5,6,7,7,7..]
    // for add element from last [...val, val.length+1] then every time increasing number add [1,2,3,4,5,6,7,8,9,...]
    const AddElemHandler = ()=>setVal([...val, val.length+1])

  return (
     <div className=' absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-300 rounded px-9 py-4 '>
            {val.map(items => <h1 className='text-2xl font-sans'>{items}</h1>)}
            <button onClick={AddElemHandler} className='px-4 py-2 rounded-3xl mt-2 bg-blue-700 text-zinc-50 text-xl font-sans active:scale-95'>Add Elem</button>
        </div>
  )
}

export default UseState_Array_add_elem