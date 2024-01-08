import React, { useContext } from 'react'
import { CountContext } from './Usereduce'

export function Component1() {
    const countcontext =useContext(CountContext)
  return (
    <div>
      <b>useReducer with useContext (component1)</b>
      <h3>component1 :{countcontext.countState} </h3>
      <button onClick={()=>countcontext.countDispatch('increment')}>increment</button>
      <button onClick={()=>countcontext.countDispatch('decrement')}>decrement</button>
      <button onClick={()=>countcontext.countDispatch('reset')}>reset</button>
      <hr />
    </div>
  )
}

export function Component2() {
  return (
    <div>
      <Componenet4 />
    </div>
  )
}

export function Componenet4() {
    const countcontext =useContext(CountContext)
  return (
    <div>
     <b>useReducer with useContext (component4)</b>
     <h3>component4 :{countcontext.countState} </h3>
      <button onClick={()=>countcontext.countDispatch('increment')}>increment</button>
      <button onClick={()=>countcontext.countDispatch('decrement')}>decrement</button>
      <button onClick={()=>countcontext.countDispatch('reset')}>reset</button>
      <hr />
    </div>
  )
}

export function Component3() {
  return (
    <div>
      <Component5 />
    </div>
  )
}

export function Component5() {
  return (
    <div>
      <Component6 />
    </div>
  )
}

export function Component6() {
    const countcontext =useContext(CountContext)
  return (
    <div>
      <b>useReducer with useContext (component6)</b>
      <h3>component6 :{countcontext.countState} </h3>
      <button onClick={()=>countcontext.countDispatch('increment')}>increment</button>
      <button onClick={()=>countcontext.countDispatch('decrement')}>decrement</button>
      <button onClick={()=>countcontext.countDispatch('reset')}>reset</button>
      <hr />
    </div>
  )
}





