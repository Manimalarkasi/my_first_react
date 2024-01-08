import React, { useCallback, useState } from 'react'
import { Button } from './Usecallback'
import { Count } from './Hooks'

export function Usecallbackmain() {
    const [age,setAge] =useState(20)
    const [salary,setSalary] =useState(5000)

    const incrementage =useCallback(() =>{
        setAge(age+1)
    },[age]) 
    const incrementsalary =useCallback(() =>{
        setSalary(salary+1000)
    },[salary])
  return (
    <div>
     <Title />
      <Count text="age" count={age} />
      <Button handlecilk={incrementage}>increment age</Button>
      <Count text='salary' count={salary} />
      <Button handlecilk={incrementsalary}>increment salary</Button>

    </div>
  )
}


export function Title() {
    console.log('rendering title');
  return (
    <div>
      <h2>useCallback hook</h2>
    </div>
  )
}

export default React.memo(Title)