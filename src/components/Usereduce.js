import React, { useReducer } from 'react'
import { Component1, Component2, Component3 } from './Usereducer1';


const initialState = 0;
const reducer = (state,action) =>{
    // return newState
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}
export function Usereduce() {
    //useReducer(reducer: React.ReducerWithoutAction<any>, initializerArg: any, initializer: (arg: any) => any): [any, React.DispatchWithoutAction]
  const [count,dispatch] =  useReducer(reducer,initialState)
  return (
    <div>
        <b>useReducer (simple state & action)</b>
        <div>count : {count}</div>
      <button onClick={()=>dispatch('increment')}>increment</button>
      <button onClick={()=>dispatch('decrement')}>decrement</button>
      <button onClick={()=>dispatch('reset')}>reset</button>
      <hr />
    </div>
  )
}



const initialState1 = {
    firstcounter:0
}
const reducer1 = (state,action) =>{
    // return newState
    switch(action.type){
        case 'increment':
            return {firstcounter:state.firstcounter + 1} //newState obj
        case 'increment5':
            return {firstcounter:state.firstcounter + action.value} //newState obj
        case 'decrement5':
             return {firstcounter:state.firstcounter - action.value}
        case 'decrement':
            return {firstcounter:state.firstcounter - 1}
        case 'reset':
            return initialState1
        default:
            return state
    }
}

export function Usereduce1() {
    //useReducer(reducer: React.ReducerWithoutAction<any>, initializerArg: any, initializer: (arg: any) => any): [any, React.DispatchWithoutAction]
  const [count,dispatch] =  useReducer(reducer1,initialState1)
  return (
    <div>
        <b> useReducer (complex state & action). convert state to obj . the string are convert to obj</b>
        <div>count : {count.firstcounter}</div>
      <button onClick={()=>dispatch({type:'increment' , value:1})}>increment</button>
      <button onClick={()=>dispatch({type:'decrement',value:1})}>decrement</button>
      <button onClick={()=>dispatch({type:'increment5' , value:5})}>increment5</button>
      <button onClick={()=>dispatch({type:'decrement5',value:5})}>decrement5</button>
      <button onClick={()=>dispatch({type:'reset'})}>reset</button>
      <hr />
    </div>
  )
}



const initialState2 = {
    firstcounter2:0,
    secondcounter2:10
}
const reducer2 = (state,action) =>{
    // return newState
    switch(action.type){
        case 'increment':
            return {...state,firstcounter2:state.firstcounter2 + 1} //newState obj
        case 'increment5':
            return {...state,firstcounter2:state.firstcounter2 + action.value} //newState obj
        case 'decrement5':
             return {...state,firstcounter2:state.firstcounter2 - action.value}
        case 'increment2':
            return {...state,secondcounter2:state.secondcounter2 + action.value} //newState obj
        case 'decrement2':
            return {...state,secondcounter2:state.secondcounter2 - action.value}
        case 'decrement':
            return {...state,firstcounter2:state.firstcounter2 - 1}
        case 'reset':
            return initialState2
        default:
            return state
    }
}

export function Usereduce2() {
    //useReducer(reducer: React.ReducerWithoutAction<any>, initializerArg: any, initializer: (arg: any) => any): [any, React.DispatchWithoutAction]
  const [count,dispatch] =  useReducer(reducer2,initialState2)
  return (
    <div>
        <b> useReducer (complex state & action). convert state to obj .the string action are convert to obj</b>
        <b>state as an obj</b>
        <div>firstcount : {count.firstcounter2}</div>
        <div>secondcount : {count.secondcounter2}</div>
      <button onClick={()=>dispatch({type:'increment' , value:1})}>increment</button>
      <button onClick={()=>dispatch({type:'decrement',value:1})}>decrement</button>
      <button onClick={()=>dispatch({type:'increment5' , value:5})}>increment5</button>
      <button onClick={()=>dispatch({type:'decrement5',value:5})}>decrement5</button>
      <button onClick={()=>dispatch({type:'increment2' , value:2})}>increment2</button>
      <button onClick={()=>dispatch({type:'decrement2',value:2})}>decrement2</button>
      <button onClick={()=>dispatch({type:'reset'})}>reset</button>
      <hr />
    </div>
  )
}




const initialState3 = 0;
const reducer3 = (state,action) =>{
    // return newState
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState3
        default:
            return state
    }
}
export function Usereduce3() {
    const [count,dispatch] =  useReducer(reducer3,initialState3)
    const [counttwo,dispatchtwo] =  useReducer(reducer3,initialState3)
    
  return (
    <div>
      <b>Multiple useReducers</b>
      <div>count : {count}</div>
      <button onClick={()=>dispatch('increment')}>increment</button>
      <button onClick={()=>dispatch('decrement')}>decrement</button>
      <button onClick={()=>dispatch('reset')}>reset</button>
      <hr />
      <div>count two : {counttwo}</div>
      <button onClick={()=>dispatchtwo('increment')}>increment</button>
      <button onClick={()=>dispatchtwo('decrement')}>decrement</button>
      <button onClick={()=>dispatchtwo('reset')}>reset</button>
      <hr />
    </div>
  )
}


export const CountContext = React.createContext()

const initialState4 = 0;
const reducer4 = (state,action) =>{
    // return newState
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState4
        default:
            return state
    }
}
export function Usereduce4() {
    //useReducer(reducer: React.ReducerWithoutAction<any>, initializerArg: any, initializer: (arg: any) => any): [any, React.DispatchWithoutAction]
  const [count,dispatch] =  useReducer(reducer4,initialState4)
  return (
    <CountContext.Provider 
    value={{countState:count,countDispatch:dispatch}}>
    <div>
        <b> useReducer with useContext</b>
        <div>count : {count}</div>
      

      <Component1 />
      <Component2 />
      <Component3 />
    </div>
    </CountContext.Provider>
  )
}