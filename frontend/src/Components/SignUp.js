import '../App.css'
import React from 'react'
import {useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"

const SignUp = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
 const navigate = useNavigate();

   const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post('http://localhost:5000/api/register',
    { name,
      email,
      password
    })
    .then( res =>{
         console.log(res.data)
         navigate('/login');
         
    })
    .catch(err=>{
      console.log(err)
    })
   }

  return (
    <>
    <h1 className='center'>Register</h1>
     <div className='outcard'>
    
    Name<input type="name"
      className='inputs'
      value={name}
      onChange={(e)=>setName(e.target.value)}
    />
    <br></br>
    Email:<input type="email" 
    className='inputs'
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
    /><br></br>
    Password:<input type="password"
    className='inputs'
      vaue={password}
      onChange={(e)=>setPassword(e.target.value)}
    /><br></br>
    <button 
    className='btns'
    onClick={handleSubmit}>Submit</button>
    <div className='outer'>
    <p>Already Have an Account ?</p>
    <Link className="link" to="/login">Login</Link>
    </div>
    </div>
    </>

  )
}

export default SignUp
