import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  App,{  Formal } from './App';
import reportWebVitals from './reportWebVitals';
import Callpro from './crud_operation/Callpro';
import React_call from './React_render/React_call';





 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   {/* <React.StrictMode>  */}
    
    <App />

     {/* <Callpro /> */}

      {/* <React_call /> */}

    {/* <Formal /> */}
    
   {/* </React.StrictMode>  */}
  </>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
