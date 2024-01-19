import React from 'react'

function Memochild2({name,person}) {
  console.log('memo child 2 is recdered');
  return (
    <div>
      <b>Incorrect memo with props Reference - memo child compo</b>
      <h4>hello {name} <br /> name : {person.fname} {person.lname} </h4>
    </div>
  )
}

export const MemoizedMemochild2 = React.memo(Memochild2)
