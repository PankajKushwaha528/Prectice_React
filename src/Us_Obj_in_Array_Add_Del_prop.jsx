import React, { useState } from 'react'

const Us_Obj_in_Array_Add_Del_prop = () => {
  const [users, setusers] = useState([
    { name: "Pankaj", age: 22 },
    { name: "Rahul", age: 21 },
    { name: "Amit ", age: 22 }
  ])
  
  // const changeHandler = () => {
  //   const updatedUsers = users.map((user, index) => {
  //     if (index === 1) {
  //       const updatedUser = { ...user, age: 33 };
  //       console.log("Updated second object:", updatedUser);
  //       return updatedUser;
  //     }
  //     return user;
  //   });

  //   setusers(updatedUsers);
  // };

  //this function one liner  
 const changeHandler = ()=>setusers(
  users.map((user,index) => index==1?({...user,age:33}):user)
 )
  return (
    <div className='absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-6 bg-gray-400 rounded'>
      {users.map((user, index) => (
        <div key={index}>
          <h1 className='text-xl font-sans'>{user.name}</h1>
          <h1 className='text-xl font-sans'>{user.age}</h1>
        </div>))}

      <button onClick={changeHandler} className='px-4 py-2 mt-3 border-none bg-blue-500 text-zinc-50 font-semibold rounded-2xl'>Change</button>
    </div>
  )
}

export default Us_Obj_in_Array_Add_Del_prop