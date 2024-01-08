import React,{useEffect,useState } from 'react'

export function useDocumentTitle(count) {
    useEffect(()=>{
        document.title=`count ${count}`;
    },[count])
  return (
    <div>
      <b>use effect hook into the custom hook</b>
    </div>
  )
}



function useCounter(initialcount=0,value) {
    const [count,setCount] =useState(initialcount)
    const increment = ()=>{
        setCount(prevState=>prevState+value)
    }
    const decrement = ()=>{
        setCount(prevState=>prevState-value)
    }
    const reset = ()=>{
        setCount(initialcount)
    }
  return [count,increment,decrement,reset]
}

export default useCounter


export function useInput(initialValue) {
    const [value,setValue] =useState(initialValue)
    const reset= ()=>{
        setValue(initialValue)
    }
    const bind={
        value,
        onChange:e=>{
            setValue(e.target.value)
        }
    }
  return [value,bind,reset]
   
}


