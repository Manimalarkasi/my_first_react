import React, { Component } from 'react'

export class Counter2 extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count:0
    //   }
    // }
    
    // increment2=() =>{
    //     this.setState(prevState=>{
    //         return{count:prevState.count+1}
    //     })
    // }
  render() {
    const {count,increment2} =this.props
    return (
      <div>
        <button onClick={increment2}>clicked {count} times</button>
      </div>
    )
  }
}


export class Hover extends Component {
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count:0
    //     }
    //   }
      
    //   increment2=() =>{
    //       this.setState(prevState=>{
    //           return{count:prevState.count+1}
    //       })
    //   }
  render() {
    const {count,increment2} = this.props
    return (
      <h2 onMouseOver={increment2}>hoverde {count} times</h2>
    )
  }
}

export class Renderuser extends Component {
    render() {
      return (
        <div>
          {this.props.name}
          {this.props.render(true)}
        </div>
      )
    }
  }

export default Counter2
