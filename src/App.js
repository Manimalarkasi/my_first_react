
import'./App.css';

import Singup from './components/Singup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Layout from "./pages/Layout";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import My_login, { Login } from "./components/Login"
import Callall from './components/Callall';
import Callpro from './crud_operation/Callpro';





 function App(Props) {
  return (
    <div >
    {/* <Login /> */}
     {/* <Singup /> */}
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
          <Route path='/Home/:userName' element={<Home />} />
          <Route path='Singup' element={<Singup />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}




















 export const Formal = (Props) => {
  return (
    <div>
      {/* <Callall /> */}
      {/* <Callpro /> */}
      
     
     {/* <Msg1 />  */}
    </div>
  )
}

















 export default App;
