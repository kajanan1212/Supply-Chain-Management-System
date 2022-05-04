import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/js/src/collapse.js";
import Navbar from './components/Navbar';
import Footer from './components/footer';
// import TruckRoute from './components/route';
import Orders from './components/orders';
import TrainSchedule from './components/Train/schedule';
import FrontPage from './components/Customer/frontPage';
import Login from './components/Customer/login';
import Signup from './components/Customer/signup';
import RegisterManager from './components/Admin/registerManager';
import RegisterWorker from './components/Manager/registerWorker';



ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    {/* <div className="container">
      {/* <TruckRoute />
    </div>
    <Orders />
    <TrainSchedule /> */}
    <Routes>
      <Route path='/trainschedule' element={<TrainSchedule />} />
      <Route path='/' element={<FrontPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/registerManager' element={<RegisterManager />} />
      <Route path='/registerWorker' element={<RegisterWorker />} />

    </Routes>
    {/* <FrontPage /> */}
    <Footer />
  </BrowserRouter>,

  document.getElementById('root')
);

reportWebVitals()