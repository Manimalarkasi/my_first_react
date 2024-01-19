

import React from 'react'

function Memochild1({name}) {
    console.log('memo child 1 is recdered');
    const date=new Date()
  return (
    <div>
      <b>Incorrect memo with Impure Component - child memo compo</b>
      <h4>hello {name}</h4>
      <i>it is currently {date.getHours()} : {date.getMinutes()} :{''} :{date.getSeconds()}</i>
    </div>
  )
}

export const MemoizedMemochild1 = React.memo(Memochild1)

