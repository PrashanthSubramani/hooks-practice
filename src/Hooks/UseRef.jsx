import React, { useEffect } from 'react'
import { useState, useRef } from 'react'

const UseRef = () => {
    // const [name, setName] = useState("");
    const inputEle = useRef();
    
    // useEffect(()=>{
    //     count.current = count.current + 1;
    // })

    const handleClick = () =>{
        console.log(inputEle.current)
        inputEle.current.style.width = "300px"
        inputEle.current.focus();
    }
  return (
    <div>
        <h1 style={{color:"red"}}>UseRef</h1>
        <input type="text" ref={inputEle} />
        {/* <h2>Name: {name}</h2> */}
        {/* <h2>Render: {count.current}</h2> */}
        <button onClick={handleClick}>Click Here</button>
        <hr />
    </div>
  )
}

export default UseRef