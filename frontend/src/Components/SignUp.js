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
    <div>
    <h1>SIGNUP</h1>

    <label>Name</label>
    <input type="name"
      value={name}
      onChange={(e)=>setName(e.target.value)}
    />
    <br></br>
    Email:<input type="email" 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
    /><br></br>
    Password:<input type="password"
      vaue={password}
      onChange={(e)=>setPassword(e.target.value)}
    /><br></br>
    <button onClick={handleSubmit}>Register</button>
    <p>Already Have an Account</p>
    <Link to="/login">Login</Link>
    </div>
  )
}

export default SignUp
