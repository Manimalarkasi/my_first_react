import React,{useCallback, useMemo, useState} from 'react'
import Childrender, { Childrender1, MemoizedChildrender2 } from './Childrender';
import { MemoizedMemochild } from './Memo';
import { MemoizedMemochild1 } from './MemoChild1';
import { MemoizedMemochild2 } from './Memochild2';


export function Parentrender() {
    const [count, setCount] = useState(0)
    console.log('parent is rendered');
  return (
    <div>
        <b>Parent and Child - render</b>
        <div>count -{count}</div>

      <button onClick={()=>setCount(c=>c+1)}>count- {count}</button>
      <button onClick={()=>setCount(0)}>count to 0</button>
      <button onClick={()=>setCount(5)}>count to 5</button>
      <Childrender />

    </div>
  )
}

export function Parentrender1({children}) {
  const [count, setCount] = useState(0)
  console.log('parent is rendered');
return (
  <div>
      <b>obtimization - Same Element Reference(parent)</b>
      <div>count -{count}</div>

    <button onClick={()=>setCount(c=>c+1)}>count- {count}</button>
    {/* <Childrender1 /> */}
    {children}
    {/* <button onClick={()=>setCount(0)}>count to 0</button>
    <button onClick={()=>setCount(5)}>count to 5</button> */}
  </div>
)
}

export function Grantparent({children}) {
  const [countnew,setCount] = useState(0)
console.log('grant parent is rendered');
  return (
    <div>
      <button onClick={()=>setCount(nc=>nc+1)}>
        grant parent count - {countnew}
      </button>
      {children}
      {/* <Parentrender1 countnew={countnew}>
        <Childrender1 />
      </Parentrender1> */}
    </div>
  )
}

export function Parentrender2() {
  const [count, setCount] = useState(0)
  const [name,setName] = useState('mani')
  console.log('parent is rendered');

  return (
  
  <div>
      <b>React memo - with use(parent)</b>
      <div>count -{count}</div>
    <button onClick={()=>setCount(c=>c+1)}>count- {count}</button>
   <button onClick={()=>setName('malar')}>change name</button>
    <MemoizedChildrender2 name={name}/>
    
  </div>
    
  )
}

export function Memoparent() {
  const [count, setCount] = useState(0)
  const [name,setName] = useState('mani')
  console.log(' memo parent is rendered');

  return (
  
  <div>
      <b> obtomization - Incorrect memo with children - incorrect memoization with children props</b>
      <div>count -{count}</div>
    <button onClick={()=>setCount(c=>c+1)}>count- {count}</button>
   <button onClick={()=>setName('malar')}>change name</button>
    <MemoizedMemochild name={name}>
     <strong>hello</strong> 
    </MemoizedMemochild>
  </div>
  )
}




export function Memoparent1() {
  const [count, setCount] = useState(0)
  const [name,setName] = useState('mani')
  console.log(' memo parent 1 is rendered');
  return (
    <div>
      <b>Incorrect memo with Impure Component - parent memo compo</b>
      <div>count -{count}</div>
    <button onClick={()=>setCount(c=>c+1)}>count- {count}</button>
   <button onClick={()=>setName('malar')}>change name</button>
      <MemoizedMemochild1 name={name}/>
    </div>
  )
}

export function Memoparent2() {
  const [count, setCount] = useState(0)
  const [name,setName] = useState('mani')
  const person ={
    fname:'mani',
    lname:'malar'
  }
  const handleclick =()=>{}
  const memoizedPerson =useMemo(()=>person,[])
  const memoizedHandleclick =useCallback(()=>handleclick,[])
  console.log(' memo parent 1 is rendered');
  return (
    <div>
      <b>Incorrect memo with props Reference - memo child compo</b><br />
      <b> useCallback & useMemo </b>
      <div>count -{count}</div>
    <button onClick={()=>setCount(c=>c+1)}>count- {count}</button>
   <button onClick={()=>setName('malar')}>change name</button>
      <MemoizedMemochild2 name={name} person={memoizedPerson} 
      handleclick={memoizedHandleclick}/>
    </div>
  )
}






