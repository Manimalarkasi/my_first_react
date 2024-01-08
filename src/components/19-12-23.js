import React from 'react'

export let Today=()=>{
    // document.write("expression")
    return(
        <div className='Time'>
          <b>JSX : 👍</b>
        <p> today time & date is {Date().toString()} </p>
        
        </div>
    )
}

export let Sum=()=>{
  let a=5,b=5
  let color1={
    color:'blue'
  }
  if(a!=0){
    console.log("a is not equal to 0")
  }
    return(
      <div>
        <b>JSX with expresion : 😜</b>
  <p style={color1}>the sum is : {a+b}</p>
  </div>
    )
  }
  export let Time=()=>{
    let date=new Date()
    let day=["Sunday" ,"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"  ]
    let month=["January", "February", "March"," April"," May", "June", "July", "August", "September", "October", "November", "December"]
    let sty={
      color:"yellow"
    }
    return(
        <div className='Time' style={sty}>
          <b>JSX with method : 😜</b>
            <p>today is: {day[date.getDay()]}</p>
            <p>now {date.getHours()} o'clock</p>
            <p>today date is : {date.getDate()}</p>
            <p style={{color:'aqua'}}>this month is :{month[date.getMonth()]}</p>
        </div>
    )
  }

  export let Event1=()=>{
    // document.write("attripute")
    
    return(
        <div >
          <b>JSX with property : 😜</b>
            name:
            <input name='name' type='text' id='input' placeholder='name' required></input><br/>
            id:  
            <input name='id' type='text' id='input' placeholder='id' required></input><br/>
            passward:
            <input name='passward' type='password' id='input' placeholder='secret' required></input><br/>
        </div>
    )
  }

  export class ExpenseItem extends React.Component {
    constructor(props) {
    super(props);
    
    }
    render() {
    return (
    <div >
      <b>props (propertise) in class</b>
    <div><b>Item:</b> <em>{this.props.name}</em></div>
    <div><b>Amount:</b> <em>{this.props.amount}</em></div>
    <div><b>Spend Date:</b>
    <em>{this.props.spendDate.toString()}</em></div>
    <div><b>Category:</b> <em>{this.props.category}</em></div>
    </div>
    );
    }
   }

   export class Obj_props extends React.Component{
    render() {
        return (
        <div className='obj'>
          <b>props (propertise) in class using object</b>
        <div><b>Item:</b> <em>{this.props.item.name}</em></div>
        <div><b>Amount:</b> <em>{this.props.item.amount}</em></div>
        <div><b>Spend Date:</b>
        <em>{this.props.item.spendDate.toString()}</em></div>
        <div><b>Category:</b> <em>{this.props.item.category}</em></div>
        </div>
        );
       }
       
   }

   export class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
      };
    }
    render() {
      return (
        <div>
          <b>state</b>
          <h1>My {this.state.brand}</h1>
          <pre>
            It is a {this.state.color}
            {this.state.model}
            from {this.state.year}.
          </pre>
        </div>
      );
    }
  }

  export class Car1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
      };
    }
    changeColor = () => {
      this.setState({color: "blue"});
    }
    render() {
      return (
        <div>
          <b>setstate()</b>
          <h1>My {this.state.brand}</h1>
          <p>
            It is a {this.state.color}
            {this.state.model}
            from {this.state.year}.
          </p>
          <button
            type="button"
            onClick={this.changeColor}
          >Change color</button>
        </div>
      );
    }
  }



export const Pro = (props) => {
  console.log(props);
  const {na,age,id,bg} =props
  return (
    <div className='p'>
      <b>Props Destructuring = Functional components:props(1)</b>
      <p>my name is {na} my ae is {age} my id is {id} and my blood group is{bg}</p>
    </div>
  )
}

export const Pro1 = ({na,age,id,bg}) => {
 
  return (
    <div className='p'>
      <b>Props Destructuring = Functional components:props(2)</b>
      <p>my name is {na} my ae is {age} my id is {id} and my blood group is{bg}</p>
    </div>
  )
}

export class Pro2 extends React.Component{
  

  render(){
    console.log(this.props);
  const {na,age,id,bg} =this.props;
    return(
      <div className='p'>
        <b>Props Destructuring = class components:props</b>
      <p>my name is {na} my ae is {age} my id is {id} and my blood group is{bg}</p>
    </div>
    )
  }
}

export class Counter extends React.Component{
  state={
    count:0
  }
  increament = ()=>{
    const {count}=this.state;
    this.setState({
      count:count +1
    },()=>{
      console.log(`count is updated ${this.state.count}`);
    })
  };
  render(){
    const {count}=this.state;
    return(
      <div>
        <b>state Destructuring = class components:props</b>
        <h2>react state ex:</h2>
        <p>button was clicked {count} times</p>
        <button onClick={this.increament}>click</button>
      </div>
    )
  }
}



export const Button1 = () => {
  let func=() =>{
    alert("hii! 🌹 you are come see my web page")
    document.getElementById('B').innerText="hii! 🌹 you are come see my web page"
    // document.write("hii! 🌹 you are come see my web page")
  }
  return (
    <div>
      <b>event handling</b>
      <button onClick={func}>see!</button>
      <p id='B'></p>
    </div>
  )
}
export class Button2 extends React.Component{
  render(){
    let func1=()=>{
    alert("you are touch me!");
    console.log("you are touch me!");
  }
  let func2=()=>{
    alert("you are touch me! 3");
    console.log("you are touch me! 3");
  }
    return(
      <div>
        <b>event handling</b>
      <button style={{backgroundColor:'blue'}} onMouseMove={func1} >see2</button>
      <button style={{backgroundColor:'blue'}} onMouseOverCapture={func2} >see3</button>
      </div>
    )
    }
}

 

export class EventBind extends React.Component {
  constructor(props) {
      super(props)
   
      this.state = {
          message: 'Welcome'
      }
  }

  
  
   
  clickHandler() {
      this.setState({
          message:'Farewell'
      })
  }

  render() {
      return (
          <div>
            <b>event handling in class</b>
              <h3>{this.state.message}</h3>
              <button onClick={() => this.clickHandler()}>
                Click
              </button> 
          </div>
      )
  }
}


export class EventBind1 extends React.Component {

  constructor() {
    super()
    this.state = {
      message: 'Hello'
    }
    // this.clickHandler = this.clickHandler.bind(this)
    // 3rd method
  }

  // clickHandler() {
  //   console.log(this)
  //   this.setState({message: 'Goodbye'})
  // }

  clickHandler = () => {
    this.setState({message:'Goodbye'})
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* 1st method */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        {/* 2nd method */}
        <button onClick={this.clickHandler}>Click</button>
        {/* 3rd method */}
      </div>
    )
  }
}














