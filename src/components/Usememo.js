import React, { useState ,useCallback, useMemo} from 'react'

function Usememohook() {
    const [count1,setCount1] =useState(0)
    const [count2,setCount2] =useState(0)

    const increment1 = ()=>{
        setCount1(count1+1)
    }
    const increment2 = ()=>{
        setCount2(count2+1)
    }

    const iseven = useMemo(()=>{
      let i=0
      while(i<2000000000) i++
      return count1 % 2 ===0
    },[count1])
  return (
    <div>
      <b>uasMemo hook</b><br />
      <button onClick={increment1}>count 1 - {count1}</button>
      <span>{iseven ? 'even' :'odd'} </span>
      <br />
      <button onClick={increment2}>count 2 - {count2}</button>
      <br />
    </div>
  )
}

export default Usememohook



const funccount = new Set();
export const Usememo1 = () => {
 
 
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)
 
  const incrementCounter = () => {
    setCount(count + 1)
  }
  const decrementCounter = () => {
    setCount(count - 1)
  }
   
   const incrementNumber = () => {
    setNumber(number + 1)
  }
   
funccount.add(incrementCounter);
funccount.add(decrementCounter);
funccount.add(incrementNumber);
alert(funccount.size);
 
  return (
    <div>
      Count: {count}
      <button onClick={incrementCounter}>
        Increase counter
      </button>
      <button onClick={decrementCounter}>
         Decrease Counter
      </button>
      <button onClick={incrementNumber}>
        increase number
      </button>
    </div>
  )
}



export const Usememo2 = () => {
 
 
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)
   
  const incrementCounter = useCallback(() => {
    setCount(count + 1)
  }, [count])
  const decrementCounter = useCallback(() => {
    setCount(count - 1)
  }, [count])
  const incrementNumber = useCallback(() => {
    setNumber(number + 1)
  }, [number])
     
  funccount.add(incrementCounter);
  funccount.add(decrementCounter);
  funccount.add(incrementNumber);
  alert(funccount.size);
   
    return (
      <div>
        Count: {count}
        <button onClick={incrementCounter}>
           Increase counter
        </button>
        <button onClick={decrementCounter}>
           Decrease Counter
        </button>
        <button onClick={incrementNumber}>
           increase number
        </button>
      </div>
    )
  }