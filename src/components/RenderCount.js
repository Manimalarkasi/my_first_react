import React, { Component } from 'react'

export class RenderCount extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      
      increment2=() =>{
          this.setState(prevState=>{
              return{count:prevState.count+1}
          })
      }
  render() {
    return (
      <div>
         {/* {this.props.render(this.state.count , this.increment2)} */}
        {this.props.children(this.state.count , this.increment2)}
       
      </div>
    )
  }
}

export default RenderCount
