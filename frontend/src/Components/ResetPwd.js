import React from 'react'
import {useState} from "react"
import {Link, useNavigate ,useParams} from "react-router-dom"
import axios from "axios"
const ResetPwd = () => {
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    axios.defaults.withCredentials = true
    const{id, token} = useParams();

   const handleSubmit = () => {
    
    axios.post(`http://localhost:5000/api/resetpwd/${id}/${token}`,
    {
      password,
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
    <div>
       <h1>Reset Password</h1>
    Password:<input type="password" 
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      placeholder='Enter Password'
    /><br></br>
    <button onClick={handleSubmit}>Update Password</button>
    </div>
  )
}

export default ResetPwd 
