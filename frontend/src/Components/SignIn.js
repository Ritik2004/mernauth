import React from 'react'
import {useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import ReCAPTCHA from "react-google-recaptcha";
import '../App.css'
import axios from "axios"

const SignIn = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

   axios.defaults.withCredentials = true

   const onChange = () => {
         
   }
   const handleSubmit = () => {
    console.log(email,password)
    axios.post('http://localhost:5000/api/login',
    {
      email,
      password
    })
    .then( res =>{
         console.log(res.data)
         console.log(res.status)
         if(res.status === 200){
         navigate('/home')
         }
         else{
          alert('Enter Correct values')
         }
    })
    .catch(err=>{
      console.log(err)
    })
   }

  return (
    <>
    <h1 className='center'>Login</h1>
    <div className='outcard'>
    Email:<input type="email" 
      value={email}
      className='inputs'
      onChange={(e)=>setEmail(e.target.value)}
    /><br></br>
    Password:<input type="password"
      vaue={password}
      className='inputs'
      onChange={(e)=>setPassword(e.target.value)}
    /><br></br>
    <Link className='flink' 
    to={'/forgotpwd'}>Forgot Password ?</Link>
    <br/>

    <br/>
    <ReCAPTCHA id="captcha"
    sitekey="6Lc_6OMnAAAAAKruNOy0SfJcXruTD7s-9uIEVPqd"
    onChange={onChange}
  />
    <button
    className='btns'
     onClick={handleSubmit}>SUBMIT</button>
    <div className='outer'>
    
    
    <Link className="rlink" to={'/register'}>Register</Link>
    </div>
    </div>
    </>
  )
}

export default SignIn 
