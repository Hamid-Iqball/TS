import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState<number>(1)
    const hanldeCount  =()=>{
        setCount(prev=>prev+1)
  }
  function decreament(){
    setCount((prev)=>prev-1)
  }
  return (
    <div style={{display:"flex", gap:'10px', justifyContent:"center", alignItems:'center'}}>
    <button onClick={decreament}>-</button>
    <h1>Count is {count}</h1>
    <button onClick={hanldeCount}>+</button>
    </div>
  )
}

export default Counter