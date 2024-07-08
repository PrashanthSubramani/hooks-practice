import React, { useEffect, useState, useLayoutEffect, useRef } from 'react'

const UseLayoutEffect = () => {
    const [toggle, setToggle] = useState(false);
    const textRef = useRef();

    useEffect(()=>{
        if(textRef.current !=null){
            const dimension =  textRef.current.getBoundingClientReact();
            console.log(dimension);
        }

    },[toggle]);

    // useLayoutEffect(()=>{
    //     console.log("useLayoutEffect");
    // },[toggle]);

  return (
    <div>
        <h1 style={{color:"red"}}>UseLayoutEffect</h1>
        <button onClick={()=>setToggle(!toggle)}>Toggle</button>
        {toggle && <h4 ref={textRef}>Hello World</h4>}
    </div>
  )
}

export default UseLayoutEffect