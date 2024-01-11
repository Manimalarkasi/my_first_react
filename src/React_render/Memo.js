import React, { Children } from 'react'

function Memochild({children,name}) {
    console.log('memo child is recdered');
  return (
    <div>
      <b> obtomization - Incorrect memo with children - incorrect memoization with children props</b>
      <div>memo child componenet</div>
      <h4>{children} {name}</h4>
    </div>
  )
}

export const MemoizedMemochild = React.memo(Memochild)



