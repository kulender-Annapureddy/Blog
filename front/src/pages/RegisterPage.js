import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';


function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  
  const register = async(e) => {
    e.preventDefault();

   try {
    const response = await fetch('http://localhost:2000/register', {
      method: 'POST',
      body:JSON.stringify({username, password}),
      headers:{'Content-Type' : 'application/json'},
    });
    console.log('request sent successfully');
    if(!response.ok) {
      console.log("server status is not ok");
    } else {
      alert("registration successfull :)");
      setRedirect(true);
    }
    const data =  await response.json();
    console.log("response", data);
   } catch (error) {
     console.log('registration failed', error);
   }
  }
  if(redirect){
    return <Navigate to={'/login'} />
  }
   
  
  return (
    <form className='register' onSubmit={register} >
      <h1>Register</h1>
    <input type='text' placeholder='usename' value={username} onChange={(e) => setUsername(e.target.value)}></input>
    <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}></input> 
    <button type='submit'>Register</button>
   </form>
  )
}

export default RegisterPage