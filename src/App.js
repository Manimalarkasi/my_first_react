// import logo from './logo.svg';

import'./App.css';
import { Sum, Time, Today , Event1, ExpenseItem, Obj_props } from './components/19-12-23';
import Box1 from './components/Box1';

let na="mani"
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
 
 export const All = () => {
  return (
    <div>
      <Today />
     <Time />
     <Sum />
    <Event1 />
     <ExpenseItem name={name} 
 amount={amount}
 spendDate={spendDate}
 category={category} /> 
 <Obj_props item={item} />
    </div>
    
  )
}


function App(Props) {
  return (
    <div className="App">
     HELLO WORLD 🤞
     <h1>Hii! {Props.name}</h1>
     <Box1 name={na}/>
     
    </div>
    
  );
}




export default App;
