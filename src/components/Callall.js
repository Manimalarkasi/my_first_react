import React from 'react'
import ParentCompo , {Conditional,List} from './Parent'
import Setstate1, { Effect, Effect1, Effect2, ExampleEffect, Setstate, Setstate2, Setstate3, Setstate6, Setstate7, Usememo, Useref } from './Hooks'
import { Button1 ,Button2,EventBind,EventBind1,Today,Time,Sum,Event1,ExpenseItem,Obj_props,Car,Car1,Pro,Pro1,Pro2,Counter } from './19-12-23'
import Box1,{ExpenseEntryItem,Hi,Greeting} from './Box1'
import Header,{LifecycleA,LifecycleC} from './lifecycle'
import Fragment, { Demo, Pure, Regular } from './Fragment'
import Parentcomp from './User'
import Portal from './Portal'
import Counter2, { Hover,Renderuser } from './Renderprops'
import RenderCount from './RenderCount'
import ConponentC, { Userprovider } from './Context'
import Httpget from './Httpget'
import { Httppost } from './Httppost'
import Classeffect, { Classeffect1, Functioneffect, Functioneffect1 } from './Effecthook'
import { Fetchdata, Fetchdata1, Fetchdata3 } from './Fetchdata'
import { Usereduce, Usereduce1, Usereduce2, Usereduce3, Usereduce4 } from './Usereduce'
import Reducer_fetch, { Reducer_fetch2 } from './Usereducer2'
import { Usecallbackmain } from './Usecallbackmain'
import Usememohook, { Usememo1, Usememo2 } from './Usememo'
import Useref1, { Useref2, Useref3 } from './Useref'
import Errorboundery, { Errorboundery1 } from './Errorboundery'
import { Customhook, Customhook1, Customhook2, Customhook3, Customhook4, Customhook5, Customhook6 } from './Customhook'



const name = "Grape Juice"
const amount = 30.00
const spendDate = new Date("2020-10-10")
const category = "Food"

const item = {
  id: 1,
  name : "Grape Juice",
  amount : 30.5,
  spendDate: new Date("2020-10-10"),
  category: "Food"
 }
 let man={
  na:"mani",
   age:"20",
    id:"11591",
     bg:"0+"
 }
 



const Callall = () => {
  return (
    <div>
      {/* <Fetch /> */}
      <p>**************************</p>
      {/* <Http /> */}
      <p>**************************</p>
       {/* <Contextall /> */}
       <p>**************************</p>
      {/* <Too /> */}
      <p>**************************</p>
        {/* <Base /> */}
        <p>**************************</p>
      {/* <To /> */}
      <p>**************************</p>
      <Hook />
      <p>**************************</p>
      {/* <All /> */}
      <p>**************************</p>
      {/* <Lifecycle /> */}

    </div>
  )
}

export default Callall

export function Fetch() {
  return (
    <div>
      <Fetchdata />
      <Fetchdata1 />
      <Fetchdata3 />
    </div>
  )
}

function Contextall() {
  return (
    <div>
      {/* <Userprovider value='manimalar'>
      <ConponentC />
      </Userprovider> */}
      {/* <ConponentC /> */}
      
    </div>
  )
}

export function Http() {
  return (
    <div>
      <Httppost />
      <Httpget />
      
    </div>
  )
}

export const Too = () => {
  return (
    <div>
      <b>render props</b>
      {/* <Counter2 />
      <Hover />
       <Renderuser name="malar"/>  
      <Renderuser render= {(isloggedin)=>isloggedin?"mani":"guest"}/> */}

      {/* <RenderCount render={(count,increment2)=>(
        <Counter2 count={count} increment2={increment2} />
      )}
      />
      <RenderCount render={(count,increment2)=>(
        <Hover count={count} increment2={increment2} />
      )}
      /> */}

      <RenderCount> 
       {(count,increment2)=>(
        <Counter2 count={count} increment2={increment2} />
      )}
    </RenderCount>
    <RenderCount> 
      {(count,increment2)=>(
        <Hover count={count} increment2={increment2} />
      )}
      </RenderCount>


      {/* <Portal /> */}

      {/* <Demo />
      <Parentcomp /> */}
    </div>
  )
}

export const Base = () => {
  return (
    <div>
        <Greeting />
        <Hi />
      <Box1 name="mani"/>
      <ExpenseEntryItem />
      
      
    </div>
  )
}

export function To() {
      return (
        <div>
          <ParentCompo />
          <br />
          <b>ReactJS Conditional Rendering</b>
        <Conditional />
          <List />
          
        </div>
      )
    }
    
    export const Hook = () => {
      return (
        <div>
          {/* <Setstate />
          <Setstate1 />
          <Setstate2 />
          <Setstate3 />
          <Setstate6 />
          <Setstate7 /> */}
          {/* <ExampleEffect />
          <Effect2 /> */}
          {/* <Classeffect />
          <Functioneffect /> */}
          {/* <Effect /> */}
          {/* <b>cleanup in useEffect</b>
          <Effect1 /> */}
          {/* <Functioneffect1 />
          <Classeffect1 /> */}
          {/* <Useref />
          <Usememo /> */}
          {/* <Usereduce /> */}
          {/* <Usereduce1 /> */}
          {/* <Usereduce2 /> */}
          {/* <Usereduce3 /> */}
          {/* <Usereduce4 /> */}
          {/* <Reducer_fetch /> */}
          {/* <Reducer_fetch2 /> */}
          {/* <Usecallbackmain /> */}
           {/* <Usememohook /> */}
           {/* <Usememo1 />
           <Usememo2 /> */}
           {/* <Useref1 /> */}
           {/* <Useref2 /> */}
           {/* <Useref3 /> */}
           {/* <Customhook /> */}
           {/* <Customhook1 /> */}
           {/* <Customhook2 /> */}
           {/* <Customhook3 /> */}
           {/* <Customhook4 /> */}
           {/* <Customhook5 /> */}
           {/* <Customhook6 /> */}
        </div>
      )
    }
    
     export const All = () => {
  return (
    <div>
      <Button1 />
      <Button2 />
      <EventBind />
      <EventBind1 />
      <Today />
     <Time />
     <Sum />
    <Event1 />
     <ExpenseItem name={name} 
 amount={amount}
 spendDate={spendDate}
 category={category} /> 
 <Obj_props item={item} />
 <Car/>
 <Car1 />
 <Pro na="mani" age="20" id="11591" bg="0+" />
 <Pro1 na="mani" age="20" id="11591" bg="0+" />
 <Pro2 na="mani" age="20" id="11591" bg="0+" />
 <Counter />
    </div>
    
  )
}
    export const Lifecycle = () => {
  return (
    <div>
      
      {/* <LifecycleA />
      <LifecycleC /> */}
      <Errorboundery1>
      <Errorboundery heroname={'super man'}/>
      </Errorboundery1>
      <Errorboundery1>
      <Errorboundery heroname={'bat man'}/>
      </Errorboundery1>
      <Errorboundery1>
      <Errorboundery heroname={'joker'}/>
      </Errorboundery1>
            
       
    </div>
  )
}



