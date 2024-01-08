import React from 'react'
import Creat from './Creat'
import '../crud_operation/style.css';
import Read from './Read';
import Update from './Update';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function Callpro() {
  return (
    <div className='main'>
        <h1 style={{textAlign:'center'}}>CURD Operation</h1>
        <BrowserRouter>
        <Routes>
          <Route exact path='/creat' element={<Creat />} />
          <Route exact path='/read' element={<Read />}/>
          <Route exact path='/update' element={<Update />}/>

        </Routes>
        </BrowserRouter>
      {/* <Creat />
      <Read />
      <Update /> */}
    </div>
  )
}

export default Callpro
