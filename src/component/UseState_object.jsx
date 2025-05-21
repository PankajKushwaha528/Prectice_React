import React, { useState } from 'react'

const UseState_object = () => {
    const [val, setVal] = useState({ name: "Pankaj", isbanned: false })
    return (
        <div className='px-6 py-3 ml-[30%] mr-[30%] rounded-2xl bg-gray-500 text-center mt-5 '>
            <h2 className='text-2xl font-sans  text-zinc-100 '>Name : {val.name}</h2>
            <h2 className='text-2xl font-sans text-zinc-100 p-2 '>isbanned : <span className='px-2 py-1 text-yellow-300'> {val.isbanned.toString()} </span></h2>
            <button onClick={() => setVal({ ...val, isbanned: !val.isbanned })} className={`px-3 py-2 mt-2 ${val.isbanned ? "bg-blue-600" : "bg-red-500"} text-zinc-50 text-xl font-semibold rounded-2xl active:scale-95`}>Change</button>
        </div>
    )
}

export default UseState_object