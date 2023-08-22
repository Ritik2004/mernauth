import React from 'react'
import {useState} from "react"

import axios from "axios"

const SignIn = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

   const handleSubmit = () => {
    console.log(email,password)
    axios.post('http://localhost:5000/api/user/signin',
    {
      email,
      password
    })
    .then( res =>{
         console.log(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
   }

  return (
    <div>
    <h1>SignIn </h1>
    Email:<input type="email" 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
    /><br></br>
    Password:<input type="password"
      vaue={password}
      onChange={(e)=>setPassword(e.target.value)}
    /><br></br>
    <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  )
}

export default SignIn 
