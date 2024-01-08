import React, { useState } from 'react'
import './style.css'
import {API_URL} from './URL'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Creat() {
  const API_URL='https://6593d64d1493b01160693df3.mockapi.io/user'
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [checked,setCheked] = useState(false)
    const navigate = useNavigate();

    const postData=async ()=>{
        // console.log(firstname);
        // console.log(lastname);
        // console.log(checked);
        //creat
        await axios.post(API_URL,{
            firstname,
            lastname,
            checked
        })
        navigate('/read')
    }




  return (
    <div >
      <h3>creat Operation</h3>
      <Form>
        <Form.Field>
            <label>First Name</label>
            <input value={firstname} placeholder='enter your 1st name' onChange={(e)=>setFirstname(e.target.value)} required autoFocus/><br />
            <label>Last Name</label>
            <input value={lastname} placeholder='enter your last name' onChange={(e)=>setLastname(e.target.value)}/><br />
        </Form.Field>
        <Form.Field>
            <Checkbox checked={checked} label='Agree the terms & conditions' onChange={()=>setCheked(!checked)}/><br />
        </Form.Field>
        <Button onClick={postData}>Submit</Button>
      </Form>
    </div>
  )
}

export default Creat
