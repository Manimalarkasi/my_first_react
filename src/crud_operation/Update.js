import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios, { Axios } from 'axios'
import { useNavigate } from 'react-router-dom'
import {API_URL} from './URL'

export default function Update() {
    const [id,setId] = useState('')
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [checked,setCheked] = useState(false)
    const navigate = useNavigate();


    const putData =async() =>{
        await axios.put(`${API_URL}/${id}`,{
            firstname,
            lastname,
            checked
        })
        navigate('/read')
    }

    useEffect(()=>{
        console.log(localStorage.getItem('id'));
        console.log(localStorage.getItem('firstname'));
        console.log(localStorage.getItem('lastname'));
        console.log(localStorage.getItem('checked'));
        setId(localStorage.getItem('id'));
        setFirstname(localStorage.getItem('firstname'));
        setLastname(localStorage.getItem('lastname'));
        setCheked(localStorage.getItem('checked'));
    },[])
    
    const postData=async ()=>{
        // console.log(firstname);
        // console.log(lastname);
        // console.log(checked);
        //creat
        await axios.post(API_URL,{
            firstname,lastname,checked
        })
        navigate('/read')
    }
  return (
    <div>
      <h3>update operation</h3>
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
        <Button onClick={putData}>update</Button>
      </Form>
      
    </div>
  )
}
