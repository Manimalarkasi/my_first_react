import React from 'react'

export let Today=()=>{
    // document.write("expression")
    return(
        <div className='Time'>
        <p> today time & date is {Date().toString()} </p>
        
        </div>
    )
}

export let Sum=()=>{
  let a=5,b=5
    return(
  <p>the sum is : {a+b}</p>
    )
  }
  export let Time=()=>{
    let date=new Date()
    let day=["Sunday" ,"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"  ]
    let month=["January", "February", "March"," April"," May", "June", "July", "August", "September", "October", "November", "December"]
    return(
        <div className='Time'>
            <p>today is: {day[date.getDay()]}</p>
            <p>now {date.getHours()} o'clock</p>
            <p>today date is : {date.getDate()}</p>
            <p>this month is :{month[date.getMonth()]}</p>
        </div>
    )
  }

  export let Event1=()=>{
    // document.write("attripute")
    return(
        <div>
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
    <div>
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
        <div><b>Item:</b> <em>{this.props.item.name}</em></div>
        <div><b>Amount:</b> <em>{this.props.item.amount}</em></div>
        <div><b>Spend Date:</b>
        <em>{this.props.item.spendDate.toString()}</em></div>
        <div><b>Category:</b> <em>{this.props.item.category}</em></div>
        </div>
        );
       }
       
   }
