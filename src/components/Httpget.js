import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { Component } from 'react'
import { Form } from 'react-router-dom'

export class Httpget extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         post:[],
         errormsg:''
         
      }
    }
    componentDidMount(){
        axios.get('https://6593d64d1493b01160693df3.mockapi.io/employee')
        .then(response=>{
            console.log(response);
            this.setState({post:response.data})
        })
        .catch(error =>{
            console.log(error);
            this.setState({errormsg:'Error retreiving data'})
        })
    }
  render() {
    const {post,errormsg} = this.state
    return (
      <div>
        list of post:
        {
           post.length ?
           post.map(post => 
           <div key={post.id}>{post.name} -- {post.phoneno} -- {post.empid} </div>) :
           null
        }
        {
            errormsg ? <div>{errormsg}</div> : null
        }
      </div>
    )
  }
}




// export class Httppost extends Component {
//     constructor(props) {
//       super(props)
//       const api_url='https://6593d64d1493b01160693df3.mockapi.io/employee';
    
//       this.state = {
//          name:'',
//          phoneno:"",
//          empid:'',
//          password:''
//       }
//     }
//     change=(e)=>{
//         this.setState({[e.target.name]:e.target.value})
//     }
//     submit = e=>{
//         e.preventdefault()
//         console.log(this.state);
//         axios.post('https://6593d64d1493b01160693df3.mockapi.io/employee',this.state)
//         .then(response =>{
//             console.log(response);
//         })
//         .catch(error =>{
//             console.log(error);
//         })
//     }  
//   render() {
    
//     const {name,phoneno,empid,password} = this.state
//     return (
//       <div>
//        <form onSubmit={this.submit}>
//             name:
//             <TextField
//                 label="name"
//                 name='name'
//                 variant="outlined"
//                 style={{ margin: "20px", width: 300 }}
//                 onChange={this.change}
//                 autoFocus
//                 required
//               /><br/>
//               phone no:
//               <TextField
//               label="phone no"
//               name='phoneno'
//               variant="outlined"
//               style={{ margin: "20px", width: 300 }}
//               onChange={this.change}
//               required /><br/>
//               employee ID :
//               <TextField
//               label="emp id"
//               name='empid'
//               variant="outlined"
//               style={{ margin: "20px", width: 300 }}
//               onChange={this.change}
//               required /><br/>
//               password :
//               <TextField
//               label="password"
//               name='password'
//               variant="outlined"
//               style={{ margin: "20px", width: 300 }}
//               onChange={this.change}
//               type='password'
//               required /><br/>
//               <Button type='submit' variant="contained" color="success">submit</Button>

// </form>



       
//       </div>
//     )
//   }
// }


export default Httpget
