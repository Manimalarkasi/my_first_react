import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { All } from './App';
import reportWebVitals from './reportWebVitals';
import  {  ExpenseEntryItem, Greeting } from './components/Box1.js';



 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  
  <ExpenseEntryItem />
  <Greeting />
  <All />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
