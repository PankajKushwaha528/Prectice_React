import React, { useState } from 'react'

const UseState_Array_del_elem = () => {

    const [val, setVal] = useState([1, 2, 3, 4, 5, 6])
    //delete one by one element from last
    const deleteHandler = () => setVal(() => {
        return val.filter((item, index) => index != val.length - 1)
    })

    //delete element from 3rd index (index != index-1)
    const deleteHandler_3rd_elem = () => setVal(()=>{
        return val.filter((item,index) => index != 2)
    })

    //delete all even number from array
    const deleteHandlerEvenNum = () => setVal(()=>{
        return val.filter((item,index) => item%2 != 0)
    })

    //delete all odd number from array
     const deleteHandlerOddNum = () => setVal(()=>{
        return val.filter((item,index) => item%2 == 0)
    })

    return (
        <div className=' absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-300 rounded px-9 py-4 '>
            {val.map(items => <h1 className='text-2xl font-sans'>{items}</h1>)}
            <button onClick={deleteHandlerOddNum} className='px-4 py-2 rounded-3xl mt-2 bg-blue-700 text-zinc-50 text-xl font-sans active:scale-95'>Delete</button>
        </div>
    )
}

export default UseState_Array_del_elem