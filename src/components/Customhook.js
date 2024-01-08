import React, { useEffect, useState } from 'react'
import useCounter, { useDocumentTitle, useInput } from './Usecustomhook';

export function Customhook() {
    const [count,setCount] =useState(0)
    useEffect(()=>{
        document.title=`count ${count}`;
    },[count])
  return (
    <div>
      <b>useDocumentTitle Custom Hook - without custom hook</b>
      <button onClick={()=>setCount(count+1)}>count - {count}</button>
    </div>
  )
}

export function Customhook1() {
    const [count,setCount] =useState(0)
    useDocumentTitle(count)
  return (
    <div>
      <b>useDocumentTitle Custom Hook - with custom hook</b>
      <button onClick={()=>setCount(count+1)}>count - {count}</button>
    </div>
  )
}

export function Customhook2() {
    const [count,setCount] =useState(0)
    const increment = ()=>{
        setCount(prevState=>prevState+1)
    }
    const decrement = ()=>{
        setCount(prevState=>prevState-1)
    }
    const reset = ()=>{
        setCount(0)
    }
  return (
    <div>
      <b>useCounter Custom Hook - without counter custom hook</b>
      <h3>count - {count}</h3>
       <button onClick={increment}>increment</button>
       <button onClick={decrement}>decrement</button>
       <button onClick={reset}>reset</button>

    </div>
  )
}


export function Customhook3() {
    const [count,increment,decrement,reset]  = useCounter(10,4)
   return (
     <div>
       <b>useCounter Custom Hook - with counter custom hook</b>
       <h3>count - {count}</h3>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
 
     </div>
   )
 }

 export function Customhook4() {
    const [count,increment,decrement,reset]  = useCounter(0,2)
   return (
     <div>
       <b>useCounter Custom Hook - with counter custom hook</b>
       <h3>count - {count}</h3>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
 
     </div>
   )
 }


 export function Customhook5() {
    const [firstname,setFirstname] =useState('')
    const [lastname,setLastname] =useState('')
    const submithandler=(e)=>{
        e.preventDefault()
        alert(`hello ${firstname}${lastname}`)
    }
   return (
     <div>
       <b>useInput Custom Hook - without input custom hook</b>
       <div>
        <form onSubmit={submithandler}>
            <label>First Name</label>
            <input type='text' value={firstname} 
            onChange={e=>setFirstname(e.target.value)}  required autoFocus /><br />
            <label>Last Name</label>
            <input type='text' value={lastname} 
            onChange={e=>setLastname(e.target.value)}  required />
            <button >Submit</button>


        </form>
       </div>
     </div>
   )
 }
 

 export function Customhook6() {
    const [firstname,bindFirstname,resetFirstname] = useInput('')
    const [lastname,bindLastname,resetLastname] = useInput('')

    const submithandler=(e)=>{
        e.preventDefault()
        alert(`hello ${firstname}${lastname}`)
        resetFirstname()
        resetLastname()
    }

    return (
      <div>
        <b>useInput Custom Hook - with input custom hook</b>
        <form onSubmit={submithandler}>
            <label>First Name</label>
            <input type='text' {...bindFirstname}  required autoFocus /><br />
            <label>Last Name</label>
            <input type='text' {...bindLastname}  required />
            <button >Submit</button>
            </form>
      </div>
    )
  }
 
 