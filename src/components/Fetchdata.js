import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function Fetchdata() {
    const [post,setPost] = useState([])
    
    useEffect(()=>{
        axios.get('https://6593d64d1493b01160693df3.mockapi.io/employee')
        .then(res=>{
            console.log(res);
            setPost(res.data)
        })
        .catch(err =>{
            console.log(err);
        })
    },[])
  return (
    <div>
        <b> Fetching data with useEffect get all data in API</b>
        
      <ul type="square">
        {
            post.map(post=><li key={post.id}>{post.id}--{post.name}--{post.phoneno}--{post.empid}--{post.password} </li>)
        }
      </ul>
    </div>
  )
}
export function Fetchdata1() {
    const [post,setPost] = useState({})
    const [id,SetId] = useState(1)
    useEffect(()=>{
        axios.get(`https://6593d64d1493b01160693df3.mockapi.io/employee/${id}`)
        .then(res=>{
            console.log(res);
            setPost(res.data)
        })
        .catch(err =>{
            console.log(err);
        })
    },[id])
  return (
    <div>
        <b> Fetching data with useEffect get a specific data in API</b>
        <input type='text' value={id} onChange={e=>SetId(e.target.value)} />
        <div>{post.id}--{post.name}--{post.phoneno}--{post.empid}--{post.password}</div>
    </div>
  )
}
 
export function Fetchdata3() {
    const [post,setPost] = useState({})
    const [id,SetId] = useState(1)
    const [idfrombuttonclick,setIdfrombuttonclick] = useState(1)

    const clickfunc = () =>{
        setIdfrombuttonclick(id)
    }
    useEffect(()=>{
        axios.get(`https://6593d64d1493b01160693df3.mockapi.io/employee/${idfrombuttonclick}`)
        .then(res=>{
            console.log(res);
            setPost(res.data)
        })
        .catch(err =>{
            console.log(err);
        })
    },[idfrombuttonclick])
  return (
    <div>
        <b> Fetching data with useEffect get a specific data in API</b>
        <input type='text' value={id} onChange={e=>SetId(e.target.value)} />
        <button type='button' onClick={clickfunc}>fetch post</button>
        <div>{post.id}--{post.name}--{post.phoneno}--{post.empid}--{post.password}</div>
      
    </div>
  )
}