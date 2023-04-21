import React from 'react';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Ftr from './Ftr';

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact="true" path='/' element={<Home/>}/>
      <Route exact="true" path='/about' element={<About/>}/>
      <Route exact="true" path='/service' element={<Service/>}/>
      <Route exact="true" path='/contact' element={<Contact/>}/>
      <Route path="*" element={<Error />} />
      {/* <Route path="*" element={<Navigate to="/" />}/> */}
    </Routes>
    <Ftr/>
    </>
  )
}

export default App;