import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'

function Reducer_fetch() {
    const [loading,setLoading] = useState(true)
    const [error, setError] =useState('')
    const [post,setPost] =useState({})

    useEffect(()=>{
         axios
         .get('https://6593d64d1493b01160693df3.mockapi.io/user/7')
         .then(res =>{
            setLoading(false)
            setPost(res.data)
            setError('')
         })
         .catch(error =>{
            setLoading(false)
            setPost({})
            setError('something went wrong!')
         })
    } ,[post])
  return (
    <div>
        <b>Fetching data with out useReducer</b>
      {loading ? 'loading' : post.firstname}
      {error ? error : null}
    </div>
  )
}


const initialState ={
    loading :true,
    error:"",
    post:{}
}
const reducer = (state,action) =>{
    switch(action.type){
        case 'FETCH_SUCCES' :
            return{
                loading:false,
            post:action.payload,
            error:""
            }
        case 'FETCH_ERROR' :
            return {
                loading : false,
                post:{},
                error:'something went wrong!'
            }
        default :
        return state
    }
}
export function Reducer_fetch2() {
    const [state,dispatch ]=useReducer(reducer,initialState)
    useEffect(()=>{
        axios.get('https://6593d64d1493b01160693df3.mockapi.io/user/7')
        .then(res =>{
           dispatch({type:'FETCH_SUCCES' , payload:res.data})
        })
        .catch(error =>{
           dispatch({type:'FETCH_ERROR'})
        })
   } ,[])
  return (
    <div>
      <b>Fetching data with useReducer</b>
      {state.loading ? 'loading' : state.post.firstname}
      {state.error ? state.error : null}
    </div>
  )
}



export default Reducer_fetch
