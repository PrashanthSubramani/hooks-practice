import React,{useEffect, useState} from 'react'

function UseEffects() {
    const [count, setCount] = useState(0);
    const [otherCount, setOtherCount] = useState(5);
    /* 

    =>useEffect without dependencies.
    useEffect(()=>{
      document.title = `${count} new message!`;
    })

    =>useEffect with empty array.
    useEffect(()=>{
      document.title = `${count} new message!`;
    },[]);
    */

    //=>use effect with dependiency array
    useEffect(()=>{
      document.title = `${otherCount} new message!`;
    },[otherCount]);

  return (
    <div>
      <div>
        <h1 style={{color:"red"}}>UseEffect Example</h1>
        <h3>{count} new Message!</h3>
        <button onClick={()=> setCount(count + 1)}>Increase</button>
        <h3>OtherCount : {otherCount}</h3>
        <button onClick={()=>{
          setOtherCount(otherCount + 5)
        }}>
          increaseBy5
        </button>
      </div>
      <hr />
    </div>
  )
}

export default UseEffects
