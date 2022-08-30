import React from "react";
// import './App.css';
import User from './User';
import Form from './Form';
import Result from './Data-table'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

   // function parentAlert(data)
   // {
   //    console.log(data)
   //    alert(data.name);
   // }
   return (
      <div className="App">
         {/* <h1>Lifting State Up</h1>

         <User alert={parentAlert}/> */}

         <BrowserRouter>
            <Routes>
               <Route path="/form" element={<Form />} />
               <Route path="/data-table" element={<Result />} />

               <Route path="*" element={<h1>Error 404 page not found!!</h1>} />
            </Routes>

         </BrowserRouter>
      </div>
   )
}

export default App;