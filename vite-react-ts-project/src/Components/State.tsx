/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useState, MouseEvent, KeyboardEvent, useMemo, useRef, useEffect } from "react"

interface User {
    id:string,
    username:string,
}

type febFunc = (n:number)=>number

const fib:febFunc = (n)=>{
    if(n<2) return n 
    return fib(n-1) + fib(n-2)
}

const myNum = 37

function State() {
    const [count,setCount] = useState<number>(1)
    const [user,setUser] = useState<User|null>(null)

    const inputRef = useRef<HTMLInputElement>(null)

    console.log(inputRef.current)
    console.log(inputRef.current?.value)

useEffect(()=>{
  console.log('mouting')
  console.log('users' , user)  


  return ()=> console.log('unmounting')
})

    const addTwo = useCallback(():void=>
    setCount(prev=>prev+1),[])


    const result = useMemo<number>(()=>fib(myNum),[])

  return (
    <div>
    <p>{count}</p>
    <button onClick={addTwo}>Add</button>
    <h2>{result}</h2>
    <input type="text" ref={inputRef} />
    </div>
  )
}

export default State