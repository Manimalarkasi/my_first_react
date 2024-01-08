import React, { Component, useEffect, useState } from 'react'

export class Classeffect extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x:0,
         y:0
      }
    }
    logMousePosition = e=>{
        this.setState({x:e.clientX, y:e.clientY})
    }
    componentDidMount(){
        window.addEventListener('mousemove',this.logMousePosition)
    }
    //cleanup method
    componentWillUnmount(){
        window.removeEventListener('mousemove',this.logMousePosition)
    }

  render() {
    return (
      <div>
        <b>useEffect - Run effects only once in class</b>
        X - {this.state.x} Y - {this.state.y}
        <hr />
      </div>
    )
  }
}

export function Functioneffect() {
    const [x,setX] = useState(0);
    const [y,setY] = useState(0)

    const logMousePosition= (e)=>{
        console.log('mouse event');
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('useEffect is called');
        window.addEventListener('mousemove',logMousePosition)

        return ()=>{
           console.log('component unmountimg code'); 
           window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
  return (
    <div>
      <b>useEffect - Run effects only once in function</b>
      hooks X - {x}  Y - {y}
      <hr />
    </div>
  )
}

 
export class Classeffect1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
	componentDidMount() {
		this.interval = setInterval(this.tick, 1000)
	}
	componentWillUnmount() {
		clearInterval(this.interval)
	}
	tick = () => {
		this.setState({
			count: this.state.count + 1
		})
	}
	render() {
		return <div>
      <b>useEffect with incorrect dependency in class</b>
      <h3>{this.state.count}</h3>
      </div>
	}
}

export function Functioneffect1() {
  const [count,setCount] = useState(0)
  const tick = () => {
    setCount(prevCount => prevCount+1)
  }
 
  useEffect(()=>{
//     function dosomething(){
//       console.log(somepro);
//      }
// dosomething()
    const interval=setInterval(tick,1000)
    return ()=>{
      clearInterval(interval)
    }

  },[])
  return (
    <div>
      <b>useEffect with incorrect dependency in function</b>
      <h3>{count}</h3>
    </div>
  )
}







export default Classeffect
