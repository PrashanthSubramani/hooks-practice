import React, { useReducer, useState } from 'react'

const initialState = {count: 0};

const reducer = (state, action) =>{
    switch(action.type){
        case "increase":
            return {count: state.count + 1};
        case "decrease":
            return {count: state.count - 1};
        default:
            return state;
    }
}

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleIncrease = ()=>{
        dispatch({type:"increase"})
    }

    const handleDecrease = () =>{
        dispatch({type:"decrease"})
    }

  return (
    <div>
        <h1 style={{color:"red"}}>UseReducer</h1>
        <h3>Count : {state.count}</h3>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <hr />
    </div>
  )
}

export default UseReducer