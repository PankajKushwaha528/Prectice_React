import React, { useState } from 'react'

const Update_add_prop_in_obj_useState = () => {
    const [obj, setObj] = useState({ name: "Pankaj", age: 18 })

   const chnageHandler = () => setObj(prev => ({
    ...prev ,gender:"male" ,age : 20
   }))
    return (
        <div>
            <h2>Name:{obj.name}</h2>
            <h2>Age:{obj.age}</h2>
            <h2>Gender:{obj.gender}</h2>
            <button onClick={chnageHandler}>Add Gender/prop</button>

        </div>
    )
}

export default Update_add_prop_in_obj_useState