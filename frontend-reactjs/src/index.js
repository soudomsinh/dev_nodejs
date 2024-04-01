import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import Attraction from './API/Attraction'
// import Navbar from './Navbar/Navbar';
import Login from './Login'
import Register from './Register'
// import Pricing from './Pricing';
import Dashboard from './dashboard/Dashboard';
import LandingPage from './landing-page/LandingPage';
// import Carousel from './Hero/Carousel'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/app' element={<App />}/> 
      {/* <Route path='/home' element={<Navbar/>}/>  */}
      <Route path='/attraction' element={<Attraction/>}/> 
      <Route path='/login' element={<Login />}/> 
      <Route path='/register' element={<Register/>}/> 
      {/* <Route path='/pricing' element={<Pricing />}/>  */}
      <Route path='/dashboard' element={<Dashboard />}/> 
      <Route path='/landingpage' element={<LandingPage />}/> 
      {/* <Route path='/carousel' element={<Carousel />}/>  */}
    </Routes>
  </BrowserRouter>
);
reportWebVitals(); 
