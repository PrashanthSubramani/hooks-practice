import React, { useState }  from 'react'
function UseState() {
    const [details, setDetails] = useState({count: 0, name:""});

    function increaseCounter(){
      setDetails((prev)=>({
        ...prev,
        count: details.count + 1,
        name: details.name
        }
      ));
    }

  return (
    <div>
      <h1 style={{color:"red"}}>Use State Examples: </h1>
      <input type="text" onChange={e=>e.target.value} />
      <h1>Name:{details.name} || Counter: {details.count}</h1>
      <button onClick={increaseCounter}>Increase</button>
      <hr />
    </div>
  )
}

export default UseState
