import React from 'react'

export function Child(props) {
  return (
    <div>
      <button onClick={()=>props.greethandler("kid")}>greet parent</button>
    </div>
  )
}


export function Second({student}) {
  return (
    <div>
      <pre>
          I'm {student.name}. my employee id is {student.id}
        </pre>
    </div>
  )
}




export default Child