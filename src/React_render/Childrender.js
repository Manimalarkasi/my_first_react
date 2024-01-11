import React from 'react'

function Childrender() {
    console.log('child is recdered');
  return (
    <div>
        <b>Parent and Child - render</b>
      <div>child componenet</div>
    </div>
  )
}

export default Childrender

export function Childrender1() {
  console.log('child is recdered');
return (
  <div>
      <b>obtimization - Same Element Reference (child )</b>
    <div>child componenet</div>
  </div>
)
}



export function Childrender2() {
  console.log('child is recdered');
  return (
    <div>
       <b>React memo - with use(child)</b>
      <div>child componenet</div>
    </div>
  )
}

export const MemoizedChildrender2 = React.memo(Childrender2)