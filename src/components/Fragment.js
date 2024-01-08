
import React,{ PureComponent } from 'react'

const Fragment = () => {
    const items =[]
  return (
    <React.Fragment>
        {/* {
            items.map(
                <React.Fragment key={items.id}>
                 <h1>title</h1>
                 <p>{items.title}</p>
                </React.Fragment>
            )
        } 
        <>.....</>*/}
        <b>fragment</b>
        <td>Hello</td>
        <td>World</td>
      </React.Fragment>
   
  )
}

 
 export const Demo = () => {
   return (
    <table>
  <tr>
    <Fragment />
  </tr>
</table>
     
   )
 }
 
 
 
 //rpce
 
 export class Pure extends React.PureComponent {
   render() {
console.log('pure component');
     return (
       <div>
         <b>pure component {this.props.name}</b>
       </div>
     )
   }
 }
 
 
 
 export class Regular extends React.Component {
   render() {
    console.log('regular component');
     return (
       <div>
         <b>regular component {this.props.name}</b>
       </div>
     )
   }
 }
 

 
 
 
 
 
 

export default Fragment
