import React, { useContext } from 'react';
import { LoginContext } from '../context/LoginContextProvider';


function UseContext() {
    const login = useContext(LoginContext)
    console.log(login)
  return (
    <div>
        <h1 style={{color:"red"}}>Use Context</h1>
    </div>
  )
}

export default UseContext