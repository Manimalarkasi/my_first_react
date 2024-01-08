import React, { useEffect, useState } from 'react'

export const CleanupA = () => {
    useEffect(()=>{
        //it return effect statement goes here
        const timerid=setInterval(()=>{
          console.log("API call executed");
        },2000)

        return() =>{
//cleanup goes here
console.log('cleanup goes here');
clearInterval(timerid)
        }
    },[])
  return (
    <div>
      <b>useEffect | Cleanup compoA</b>
      <hr />
    </div>
  )
}




export const CleanupB = () => {
  const [count,setCount]=useState(0)

  useEffect(()=>{
    //effect goes here
    console.log("effect goes here");
  
    return ()=>{
        console.log("cleanup goes here");
    }
  },[count])
  return (
    <div>
      <b>useEffect | Cleanup compoB</b>
      <p></p>
      <button onClick={()=>setCount(count+1)}>get prise</button>
      <span>count is {count}</span>
    </div>
  )
}




export const Usecallback = (props) => {
  const {factorial,updatNumber}=props

  useEffect(()=>{
    console.log('component re-render');
  })
  return (
    <div>
      <b>useCallback</b>
      <p>find the factorial of the given number</p>
    <input type='text' placeholder='enter the number' onChange={updatNumber} />
    <span>Factorial of the given number is {factorial}</span>
<hr />
    </div>
  )
}


// export default React.memo(Usecallback)
export default Usecallback
//higher order component

