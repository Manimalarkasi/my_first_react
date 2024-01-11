import React, { useReducer } from 'react'

const initiaiState= 0
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state +1
        case 'decrement':
            return state -1
        case 'reset':
            return initiaiState
        default:
            return state
    }
}
function Usereducerrender() {
    const [count,dispatch] =useReducer(reducer,initiaiState)
    console.log('useReducer is rendered')
  return (
    <div>
      <b>useReducer render</b>
        <h3>connt - {count}</h3>
      <button onClick={()=>dispatch('increment')}>increment</button>
      <button onClick={()=>dispatch('decrement')}>decrement</button>
      <button onClick={()=>dispatch('reset')}>reset</button>
    </div>
  )
}

export default Usereducerrender
