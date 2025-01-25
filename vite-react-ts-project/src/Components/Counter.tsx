import { ReactNode } from "react"

type CountProps = {
  setCount:React.Dispatch<React.SetStateAction<number>>,
  children:ReactNode
}

function Counter({setCount, children}:CountProps) {

  const hanldeCount  =()=>{
        setCount(prev=>prev+1)
  }
  function decreament(){
    setCount((prev)=>prev-1)
  }
  return (
    <div style={{display:"flex", gap:'10px', justifyContent:"center", alignItems:'center'}}>
    <button onClick={decreament}>-</button>
    <h1>Count is {children}</h1>
    <button onClick={hanldeCount}>+</button>
    </div>
  )
}

export default Counter