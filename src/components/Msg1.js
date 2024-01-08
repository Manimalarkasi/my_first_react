import React from 'react'

export class Msg1 extends React.Component{
    constructor(){
        super()
        this.state={
            msg:"welcome visitor"
        }
    }
    changemsg(){
        this.setState({msg:"tq for watching"})
    }
    render(){

  return (
    <div>
        <b>state</b>
        <b>normal</b>
      <h3>Welcome visitor</h3>
      <b>use state</b>
      <h3>{this.state.msg}</h3>
      <button onClick={()=>{this.changemsg()}}>submit</button>
      <Counterstate />
     <Counterstate1 />
    </div>
  )
}
}



export class Counterstate extends React.Component {
    constructor(props){
        super(props)
        this.state={
            count: 0
        }
    }
    increament(){
        //this.State.count=this.State.count + 1
        //setState(state: any, callback?: (() => void) | undefined): void
        this.setState({
            count : this.state.count + 3
        },
         () => {console.log("Callback value is:",this.state.count);})
        console.log(this.state.count );

    }
  render() {
    return (
      <div>
        <b>setstate</b>
        <b>counter</b>
        count -{this.state.count}<br/>
        <button onClick={() =>this.increament()}>add count</button>
      </div>
    )
  }
}

export class Counterstate1 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            count: 0
        }
    }
    increament(){
        this.setState((prevState)=>({
            count:prevState.count + 1
        }))
        console.log(this.state.count );
    }
    increament5(){
        this.increament()
        this.increament()
        this.increament()
        this.increament()
        this.increament()
    }
  render() {
    return (
      <div>
        <b>counter</b>
        count -{this.state.count}<br/>
        <button onClick={() =>this.increament5()}>add count</button>
      </div>
    )
  }
}






export default Msg1