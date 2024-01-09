import React, { useState } from 'react'
import { Setstate } from '../components/Hooks'

function UseState() {
    const [count,setCount] = useState(0)
    console.log('useState is rendering');
  return (
    <div>
      <button onClick={()=>setCount(count=>count+1)}>count {count}</button>
      <button onClick={()=>setCount(0)}>count to 0</button>
      <button onClick={()=>setCount(5)}>count to 5</button>

    </div>
  )
}

export default UseState
