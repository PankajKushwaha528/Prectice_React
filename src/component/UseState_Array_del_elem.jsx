import React, { useState } from 'react'

const UseState_Array_del_elem = () => {

    const [val, setVal] = useState([1, 2, 3, 4, 5, 6])

    const deleteHandler = () => setVal(() => {
        return val.filter((item, index) => index != val.length - 1)
    })
    return (
        <div className=' absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-300 rounded px-9 py-4 '>
            {val.map(items => <h1 className='text-2xl font-sans'>{items}</h1>)}
            <button onClick={deleteHandler} className='px-4 py-2 rounded-3xl mt-2 bg-blue-700 text-zinc-50 text-xl font-sans active:scale-95'>Delete</button>
        </div>
    )
}

export default UseState_Array_del_elem