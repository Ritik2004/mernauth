import React from 'react'
import {useState} from "react"
import {Link, useNavigate} from "react-router-dom"

import axios from "axios"

const SignIn = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

   axios.defaults.withCredentials = true

   const handleSubmit = () => {
    console.log(email,password)
    axios.post('http://localhost:5000/api/login',
    {
      email,
      password
    })
    .then( res =>{
         console.log(res.data)
         navigate('/home')
    })
    .catch(err=>{
      console.log(err)
    })
   }

  return (
    <div>
    <h1>Login</h1>
    Email:<input type="email" 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
    /><br></br>
    Password:<input type="password"
      vaue={password}
      onChange={(e)=>setPassword(e.target.value)}
    /><br></br>
    <button onClick={handleSubmit}>SUBMIT</button>

    <Link to={'/forgotpwd'}>Forgot Password</Link>
    <p>Register first</p>
    <Link to={'/register'}>Register</Link>
    </div>
  )
}

export default SignIn 
