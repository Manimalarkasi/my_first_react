import axios,{ Axios } from 'axios'
import React, { useEffect,useState } from 'react'
import { Button, Table } from 'semantic-ui-react'
import { API_URL } from './URL'
import { useNavigate } from 'react-router-dom'

export default function Read() {
  // const API_URL='https://6593d64d1493b01160693df3.mockapi.io/user'
   const [apidata,setAPIData] =useState([])
   const navigate = useNavigate()

   const deleteitem = async(id) => {
    try{
      await axios.delete(`${API_URL} / ${id}`);
    getapi();
    }
    catch(error){
      console.log('error deleting item:',error);
    }
    
   }
   
   const updateuser =({id,firstname,lastname,checked})=>{
    localStorage.setItem('id',id)
    localStorage.setItem('firstname',firstname)
    localStorage.setItem('lastname',lastname)
    localStorage.setItem('checked',checked)
    navigate('/update')
   }
   const getapi =async () =>{
    const resp = await axios.get(API_URL);
    // console.log(resp.data);
    setAPIData(resp.data)

   }
   useEffect(()=>{
    getapi();
   },[])

  return (
    <div>
      <h3>read operation</h3>
      <Table singleLine>
         <Table.Header>
            <Table.Row>
                <Table.HeaderCell> First Name </Table.HeaderCell>
                <Table.HeaderCell> Last Name </Table.HeaderCell>
                <Table.HeaderCell> Checked </Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
                <Table.HeaderCell>Update</Table.HeaderCell>
                <Table.HeaderCell>Update</Table.HeaderCell>
            </Table.Row>
         </Table.Header>
         <Table.Body>
            
                {
                    apidata.map((data) =>(
                        <Table.Row key={data.id}>
                        <Table.Cell> {data.firstname} </Table.Cell>
                        <Table.Cell> {data.lastname} </Table.Cell>
                        <Table.Cell> {data.checked ? 1: 0} </Table.Cell>
                        <Table.Cell> <Button onClick={()=>deleteitem(data.id)}>delete</Button> </Table.Cell>
                        <Button onClick={()=>updateuser(data)} >update</Button>
                    </Table.Row>
                    ))
                }
                {/* <Table.Row>
                <Table.Cell> mani</Table.Cell>
                <Table.Cell> malar</Table.Cell>
                <Table.Cell> true</Table.Cell>
            </Table.Row> */}
         </Table.Body>
      </Table>
    </div>
  )
}
