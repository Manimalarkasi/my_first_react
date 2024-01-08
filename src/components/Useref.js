import React, { useEffect, useRef ,Component, useState } from 'react'

function Useref1() {
    const inref=useRef(null)
    useEffect(()=>{
        inref.current.focus()
    },[])
  return (
    <div>
      <b>useRef Hook</b>
      <input ref={inref} type='text' />
    </div>
  )
}

export default Useref1





export class Useref2 extends Component {
  intervel
  constructor(props) {
    super(props)
  
    this.state = {
       timer:0
    }
  }
  componentDidMount(){
    this.intervel=setInterval(()=>{
      this.setState(prevState =>({timer:prevState.timer+1}))
    },1000)
  }
  componentWillUnmount(){
    clearInterval(this.intervel)
  }
  render() {
    return (
      <div>
        <b>useRef Hook in ckass</b>
          class timer - {this.state.timer}  
          <button onClick={()=>clearInterval(this.intervel)} >clear intervel</button>
      </div>
    )
  }
}



export function Useref3() {
  const [timer,setTimer] = useState(0);
  const intervalref = useRef
  useEffect(()=>{
    intervalref.current=setInterval(()=>{
      setTimer(prevState=>prevState+1)
    },1000)
    return ()=>{
      clearInterval(intervalref.current)
    }
  },[])
  return (
    <div>
      <b>useRef Hook in function</b>
      hook timer - {timer}
      <button onClick={()=>clearInterval(intervalref.current)}>clear timer hook</button>
    </div>
  )
}



