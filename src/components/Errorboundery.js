import React,{ Component } from 'react'

function Errorboundery({heroname}) {
    if(heroname==='joker'){
        throw new Error('not a error')
    }
  return (
    <div>
      <h3>{heroname}</h3>
    </div>
  )
}

export default Errorboundery






export class Errorboundery1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }
    
    static getDerivedStateFromError(error){
        return {
            hasError:true
        }
    }
    componentDidCatch(error,info){
        console.log(error);
        console.log(info);
    }
  render() {
    if(this.state.hasError){
        return <h4>something went wrong</h4>
    }
    return this.props.children
  }
}


