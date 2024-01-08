
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import CleanupA, { CleanupB, Usecallback } from './Hooks1'
import { colors } from '@mui/material'
import { Functioneffect } from './Effecthook'

export const Setstate = () => {
    //const [state(state variable),setstate(update state variable)] <-(array destructure) = useState(initialstate)
    const [count,setCount] = useState(0)

  return (
    <div>
        <b>useState hook</b>
        <div>Returns a one array[] it stateful value (element), and a function (element) to update it.</div>
      <button onClick={()=>setCount(count+1)}>click me!</button>
      <p>curren value of count is {count}</p>
      <hr></hr>
    </div>
  )
}

export const Setstate1 = () => {
    //const [state(state variable),setstate(update state variable)] <-(array destructure) = useState(initialstate)
    const [count,setCount] = useState(0)
const increament5=() =>{
    // for (let i = 0; i < 5; i++) {
    //     setCount(count+1);
    // }
    for (let i = 0; i < 5; i++) {
        setCount((prevState) => prevState+1);

    }
}
  return (
    <div>
        <b>useState hook with prevState</b>
        <div>Returns a ona array[] it stateful value (element), and a function (element) to update it.</div>
      <button onClick={()=>setCount(count+1)}>click me!</button>
      <p>curren value of count is {count}</p>
      <button onClick={()=>increament5()}>increament5</button>
      <hr></hr>
    </div>
  )
}

export const Setstate2 = () => {
    const [count,setCount] = useState(0)
    const [person,setPerson] =useState({firstname:'' , lastname:''})
const increament5=() =>{
    // for (let i = 0; i < 5; i++) {
    //     setCount(count+1);
    // }
    for (let i = 0; i < 5; i++) {
        setCount((prevState) => prevState+1);

    }
}
  return (
    <div>
        <b>useState hook with Objects{ }</b>
        <div>Returns a ona array[] it stateful value (element), and a function (element) to update it.</div>
      <button onClick={()=>setCount(count+1)}>click me!</button>
      <p>curren value of count is {count}</p>
      <button onClick={()=>increament5()}>increament5</button>
      <hr/>
      <input type='text' onChange={(e)=>setPerson({...person, firstname:e.target.value})} placeholder='enter your 1st name:'/><br />
      <input type='text' onChange={(e)=>setPerson({...person, lastname:e.target.value})} placeholder='enter your 2st name:'/>
      {JSON.stringify(person)}
      <p>first name : {person.firstname}</p>
      <p>last name : {person.lastname}</p>
      <p>full name: {person.firstname}{person.lastname}</p>
      <div>func compo la useState use panna athu la obj use panna athu automatic ah merge pannathu.
        ana class compo la state update pannum poth athu automatic ah merge pannum.
        ...person, firstname:e.target.value --- existing state ,update state
      </div>
<hr />
    </div>
  )
}



export function Setstate7() {
  const [items,setItems] =useState([])
  const additem = () =>{
    setItems([...items,{
      id:items.length,
      value:Math.floor(Math.random()*10)+1
    }])
  }
  return (
    <div>
      <button onClick={additem}>additem</button>
      <ul>
        {
          items.map(item =>(
            <li key={item.id}>{item.value}</li>
          ))
        }
      </ul>
      <hr />
    </div>
  )
}






export function Setstate3() {
  const initial=0
  const [count,setCount] = useState(initial);
  const increment1=()=>{
    setCount(prevcount => prevcount + 1)
  }
const increament5 = ()=>{
  for(let i=0;i<5;i++){
    setCount(prevcount => prevcount +1)
  }
}
  return (
    <div>
      <b>useState hook with prevState</b> <br />
      count={count} <br />
      <button onClick={()=>setCount(initial)}>reset</button>
      <button onClick={increment1}>increment</button>
      <button onClick={()=>setCount(prevcount => prevcount - 1)}>decrement</button>
      <button onClick={increament5}>increment5</button>
      <hr />
    </div>
  )
}




export class Setstate6 extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:10
    }
  }
  increse=()=>{
    this.setState(prevState =>{
      return{
        count :prevState.count + 1
      }
    })
  }
  render() {
    return (
      <div>
        <b>class state</b>
        <button onClick={this.increse}>increse {this.state.count}</button>
      </div>
    )
  }
}




export class ExampleEffect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name:''
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate(prevProps,prevState) {

if(prevState.count !== this.state.count){
  console.log('updating document title');
  document.title = `You clicked ${this.state.count} times`;
}
    }
  render() {
    return (
      <div>
        <b>useEffect() replace componentDidMount(),componentDidUpdate() (used) </b>
        <b>useEffect - Conditionally run effects</b>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click {this.state.count} times
        </button>
        <input type='text' value={this.state.name} onChange={e=>{
          this.setState({name:e.target.value})
        }} />
        <hr />
      </div>
    );
  }
}

export function Effect2() {
  const [count,setCount] = useState(0)
  const [name,setName] = useState('')


  useEffect(()=>{
    document.title=`you clicked ${count} times`
    console.log("useEffect - updating document title");
  },[count])
  return (
    <div>
      <b>useEffect - Conditionally run effects</b>
      <button onClick={()=>setCount(count+1)}>click {count}</button>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
      <hr />
    </div>
  )
}



export const Effect = () =>{
    const [count,setCount] = useState(0)
    const [msg,setMsg]=useState("Initial message ")
useEffect(()=>{
    console.log('component mounted / updatede');
    console.log(msg);
    console.log("count is increased to ",count);
},[count,msg]);
  return (
    <div>
        <b>useEffect hook(side effect method)</b><br />
        <b>it return 1.callback(), 2.array of dependency. useEffect(()=={},[])</b>
        <div>when te Effect hook is used to, tje after render the compo la oru logic ah recsiqute pannanum na useEffect use pannanum
            <u>class compo la did mount & did update ah replace panna useEffect use pannanum </u>
        </div>
        <div>func compo initial ah render aana aprm useEffect execute aagum.</div>
        <div>I can pass the 2nd argument of useEffect. this argument is <u>array of dependency</u>. this is same as class did mount life cycle method . then inside the array we have insert tje multiple values.
        the array is used to the effect executed on render at the seme time
        </div>
      <button onClick={()=>{setCount(count+1)}}>click me!</button>
      <p>curren value of count is: {count}</p>
      <button onClick={()=>{setMsg('msg updatede on click event')}}>update msg</button>
      <hr />
    </div>
  )
}



// export class ExampleEffectClean extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isOnline: null };
//     this.handleStatusChange = this.handleStatusChange.bind(this);
//   }

//   componentDidMount() {
//     ChatAPI.subscribeToFriendStatus(
//       this.props.friend.id,
//       this.handleStatusChange
//     );
//   }
//   componentWillUnmount() {
//     ChatAPI.unsubscribeFromFriendStatus(
//       this.props.friend.id,
//       this.handleStatusChange
//     );
//   }
//   handleStatusChange(status) {
//     this.setState({
//       isOnline: status.isOnline
//     });
//   }

//   render() {
//     if (this.state.isOnline === null) {
//       return 'Loading...';
//     }
//     return this.state.isOnline ? 'Online' : 'Offline';
//   }
// }

export const Effect1 = () => {
    const [toggle,setToggle] = useState(true)
    const [display,setDidplay] = useState(true)

  return (
    <div>
      <b>useEffect with  Cleanup. this 1 type</b>
      < div>when the useEffect to use,effect hook la data get pennarathukkana subcription add pannalo,
      timer func use pannalo,to use useEffect .
      </div>
      <div>useEffect method accsept 2 callback methods 1.useEffect statement
        2.cleanup methods . it default return ()
      </div>
      <button onClick={()=>{setToggle(!toggle)}}>show / hide compoa</button>
      {toggle ?<CleanupA /> : null}

      <button onClick={()=>{setDidplay(!display)}}>toggle display</button>
      {display && <Functioneffect />}

<CleanupB />
    </div>
  )
}



export const Useref = () => {
  const paracolor=useRef(null) //paracolor={current:null}
  const colors=['Blue','Green','Red','Purple','Orange','Black','Yellow','Azure','Teal','Hex','Cyan','Pink','Coral']
  const colorselect=useRef(null)  //colorselect = {current:null}
  const selectcustomcolor ={current:null}
useEffect(()=>{
  console.log(paracolor);
console.log(paracolor.current);
})
useEffect(() =>{
  console.log('statement executed for colorselect ref hook changs')
},[colorselect.current])

useEffect(()=>{
  console.log('statement executed from hook for custom variable changes');
},[selectcustomcolor.current])
const parastyle = () => {
  const randomcolor = Math.floor(Math.random() * colors.length)
  paracolor.current.style.color =colors[randomcolor]

  colorselect.current=colors[randomcolor]
  console.log('select color:',colorselect.current);

  selectcustomcolor.current=colors[randomcolor]
  console.log('custom variable color selection ',selectcustomcolor.current);
}
  return (
    <div>
      <div>ref is used to access to the DOM.
        the DOM is access in JS to use the class (or) id name.
        but , in react is used the ref={} attiribute 
      </div>
<div>you want to value call that <u>variable.current</u> </div>
      <button onClick={parastyle}>click me</button>
      <p ref={paracolor}>welcome to my web page</p>  {/*//paracolor={current:null}*/}
    </div>
  )
}


export const Usememo = () => {
  const [count,setCount] = useState(0)
  const [person,setPerson] =useState({firstname:'' , lastname:''})
  const [number,setNumber] =useState(1)
const increament5=() =>{
  for (let i = 0; i < 5; i++) {
      setCount((prevState) => prevState+1);

  }
}

const factorialof = (n) => {
  console.log("inside factorial method");
  let result = 1
  if(n<=1){
    return result
  }
  else{
    for(let i=n; i>=1; i--){
      result = result * i;
    }
    return result
  }
}
// const factorial = factorialof(number)
const factorial = useMemo(() =>factorialof(number) , [number]) 
// const updatNumber =(e) =>{
//   setNumber(e.target.value);
// }
const updatNumber =useCallback((e) =>{
  setNumber(e.target.value);
},[number])

return (
  <div>
      <b>useMemo()</b>
      <button onClick={()=>setCount(count+1)}>click me!</button>
    <p>curren value of count is {count}</p>
    <button onClick={()=>increament5()}>increament5</button>
    <hr/>
    <input type='text' onChange={(e)=>setPerson({...person, firstname:e.target.value})} placeholder='enter your 1st name:'/><br />
    <input type='text' onChange={(e)=>setPerson({...person, lastname:e.target.value})} placeholder='enter your 2st name:'/>
    {JSON.stringify(person)}
    <p>first name : {person.firstname}</p>
    <p>last name : {person.lastname}</p>
    <p>full name: {person.firstname}{person.lastname}</p>
    <hr />
    <p>find the factorial of the given number</p>
    <input type='text' placeholder='enter the number' onChange={(e) =>{setNumber(e.target.value)}} />
    <span>Factorial of the given number is {factorial}</span>
<hr />
<Usecallback factorial={factorial} updatNumber={updatNumber} />
  </div>
)
}



export function Count({text,count}) {
  console.log(`rendering ${text}`);
return (
  <div>
    <h5>{text} -{count}</h5>
  </div>
)
}//it is callback child componenet


export default React.memo(Count)


