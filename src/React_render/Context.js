import React, { useContext, useState } from 'react'

export const CounContext = React.createContext()

export function ContextP() {
    const [coun,setCoun] =useState(0)
    console.log('Cotext parent render');

  return (
    <>
      <h3>count - {coun}</h3>
      <button onClick={()=>setCoun(c=>c+1)}>click</button>
      {/* <input type='text'  onChange={e=>setName(e.target.value)}/> */}
      <CounContext.Provider value={coun}>
      < MemoizedContextC1 />
      {/* < ContextC1 /> */}
      </CounContext.Provider>
    </>
  )
}

export default ContextP

function ContextC1() {
    console.log('Context child 1 is dendered');
  return (
    <>
      <div>Child 1</div>
      
      <ContextC2/>
    </>
  )
}
export const MemoizedContextC1 = React.memo(ContextC1)

export function ContextC2() {

    console.log('Context child 2 is dendered');
  return (
    <>
      <div>Child 2</div>
      <ContextC3 />
    </>
  )
}
// export const MemoizedContextC2 = React.memo(ContextC2)
export function ContextC3() {
    console.log('Context child 3 is dendered');
  return (
    <>
      <div>Child 3</div>
      <ContextC4 />
    </>
  )
}

export function ContextC4() {
    // const count = useContext(CounContext)
    console.log('Context child 4 is dendered');
  return (
    <>
      <div>Child 4</div>
      <CounContext.Consumer>
        {(coun)=>
         <h3>count - {coun}</h3>
}
      </CounContext.Consumer>
    </>
  )
}

