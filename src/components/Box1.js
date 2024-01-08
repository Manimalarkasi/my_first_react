import React from 'react'
import '../App.css'



const Box1 = (Props) => {
  return (
    <div id="Box">
      <h1>Hiii! {Props.name}</h1>
    
    </div>
  )
}



export class ExpenseEntryItem extends React.Component {
 render() {
  return (
    <div className="itemStyle">
    <div><b>Item:</b> <em>Mango Juice</em></div>
    <div><b>Amount:</b> <em>30.00</em></div>
    <div><b>Spend Date:</b> <em>2020-10-10</em></div>
    <div><b>Category:</b> <em>Food</em></div>
    </div>
    );
    }
   }
export const Hi = ()=> <b>I'm our friend</b>


   export function Greeting() {
    return <h1>Hello React!</h1>
   }

   
   
export default Box1;
// export default Greeting; 
