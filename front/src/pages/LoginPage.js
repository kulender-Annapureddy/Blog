import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] =useState('');
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo} = useContext(UserContext);

  const login = async(e) => {
    e.preventDefault();
    try {
        const response =await fetch('http://localhost:2000/login', {
        method:'POST',
        body:JSON.stringify({username, password}),
        headers:{'Content-type' : 'application/json'},
        credentials: 'include',
      })
      if(response.ok) {
        response.json().then(userInfo => {
          setUserInfo(userInfo);
          setRedirect(true);
          alert("login successfull");
      
        })
     
      } else {
        alert('invalid credentials');
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  if(redirect){
    return <Navigate to={'/'} />
  }
  return (
   <form className='login' onSubmit={login} >
    <h1>Login</h1>
    <input type='text' placeholder='usename' value={username} onChange={(e) =>setUsername(e.target.value)}></input>
    <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e. target.value)}></input> 
    <button type='submit'>Login</button>
   </form>
  )
}

export default LoginPage