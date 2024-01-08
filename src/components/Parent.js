import React, { Component, useState } from 'react'
import Child, { Second } from './Kid'
import { BsBookmarkStarFill } from "react-icons/bs";


export class ParentCompo extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentname:"parent"
      }
      this.greetparent=this.greetparent.bind(this)
    }
    greetparent(childname){
        alert(`hello ${this.state.parentname} from your ${childname}`)
    }
    
  render() {
    return (
      <div>
        <b>method as props</b>
       <Child greethandler={this.greetparent}/>
      </div>
    )
  }
}



export class Conditional extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isloggedin:true,
       num:25
    }
  }
  //conditional rendering
  render() {

    if(this.state.num % 2 ==0){
      return <div>the num is even</div>
    }
    else{
      return <div>the num is odd</div>
    }


    // if(this.state.isloggedin){
    //   return<div>wellcome</div>
    //    }
    //    else{
    //     return<div>welcome guest</div>
    //    }


//     let msg
//     if(this.state.isloggedin){
//       msg=<div>wellcome</div>
//     }
//     else{
//       msg=<div>welcome guest</div>
//      }
// return <div>{msg}</div> 

    // return(
    //   this.state.num %2==0?
    //   (<div>the num is even</div>):
    //   (<div>the num is odd</div>)
    // )

    //return this.state.isloggedin && <div>wellcome</div>


//  switch (this.state.isloggedin) {
//  case true:
//  return <p>Rendered when condition is true</p>;
//  case false:
//  return <p>Rendered when condition is false</p>;
//  default:
//  return <p>Default content</p>;
//  }
    

    // return (
    //   <div>
    //     <div>hii! I'm manimalar</div>
    //   </div>
    // )
  }
}



export class List extends Component {
 constructor(props) {
   super(props)
 }
 
  render() {
   const number=[2,34,56,78,90,54,3,45,67,32]
   let student=[
    {id:11591,name:"mani",no:34,checked:true},
    {id:11590,name:"malar",no:78,checked:true},
    {id:11592,name:"menaga",no:45,checked:true},
    {id:11593,name:"sruthi",no:665,checked:true},
    {id:11594,name:"hari",no:12,checked:true}
]
   let list=number.map((val,ind)=><li>{ind} -> {val*2}</li>)

   let s1=student.sort().map((student,ind)=><li>{ind}-{student.id}</li>)

   let l1=number.filter(n=>n%2===0).map((val,ind)=><li>{ind} -> {val*2} <BsBookmarkStarFill /></li>)
   let l2=number.reduce((previousValue, currentValue)=>
   {
       return previousValue+currentValue
   },100 )
   
let s2=student.sort((a,b)=>{
  if(a.id<b.id) return -1
  if(a.id>b.id) return 1
  if(a.id==b.id) return 0
})

    return (
      <div>
        <b>ReactJS  List Rendering</b><br />
        <b>map number list</b>
        {list}
        <b>use sort() & map()</b>
        <ol>{s1}</ol>
        <b>use filter() & map()</b>
        <ol>{l1} </ol>
        <b>use raduse()</b>
        <ol><li>{l2}</li></ol>
        <b>array as object use map()</b>
        <Array />
        
      </div>
    )
  }
}



function Array() {
  const [student,setItem]=useState(
    [
      {id:11591,name:"mani",no:34,checked:true},
      {id:11590,name:"malar",no:78,checked:true},
      {id:11592,name:"menaga",no:45,checked:true},
      {id:11593,name:"sruthi",no:665,checked:true},
      {id:11594,name:"hari",no:12,checked:true}
  ]
  )

  const parantlist=student.map(student=>(
        <Second student={student}></Second>
    ))
  return (
    <div>
      <ul>
          {student.map((student)=>(
          <li>
            <input type='checkbox' checked={student.checked} />
            <label>{student.name}({student.id})</label>
            <BsBookmarkStarFill 
            role='button'
            />
          </li>
          )
          )}
        </ul>

      {parantlist}
    </div>
  )
}





export default ParentCompo
