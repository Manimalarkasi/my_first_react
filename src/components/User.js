import React, { Component } from 'react'
import { Pure, Regular } from './Fragment'

export default class Parentcomp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"mani"
      }
    }
    
    componentDidMount(){
        setInterval(()=>{
          this.setState({
            name:"malar"
          })
        },2000)
    }
  render() {
    console.log('****************parent component********************');
    return (
      <div>
        parent component
        <Pure name={this.state.name}/>
        <Regular name={this.state.name}/>
      </div>
    )
  }
}







