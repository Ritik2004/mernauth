import React from 'react'
import {useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
const ForgotPassword = () => {
    const [email,setEmail] = useState("");
    const navigate = useNavigate();
    axios.defaults.withCredentials = true
 
   const handleSubmit = () => {
    
    axios.post('http://localhost:5000/api/forgotpwd',
    {
      email,
    })
    .then( res =>{
        if(res.data.status === "Success"){
         navigate('/login')
        }
    })
    .catch(err=>{
      console.log(err)
    })
   }
  return (
    <>
       <h1 className='center'>Forgot Password</h1>
       <div className='outcard'>
    Email:<input type="email" 
    className='inputs'
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      placeholder='Enter Email'
    /><br></br>
    
    <button className='btns' onClick={handleSubmit}>Get Password</button>
    </div>
    </>
  )
}

export default ForgotPassword
