import Navbar from './components/Navbar';
import TrainSchedule from './components/Train/schedule';
import FrontPage from './components/Customer/frontPage';
import Login from './components/Customer/login';
import Footer from './components/footer';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import authService from './components/service/auth.service';
import RegisterWorker from './components/admin/registerWorker';
import RegisterManager from './components/admin/registerManager';
import Signup from './components/Customer/signup';

function App() {
  return (
    <div>
      < Navbar />
      < Routes >
        <Route path='/train/trainschedule' element={<TrainSchedule />} />
        <Route path='/' element={<FrontPage />} />
        <Route path='/registerworker' element={<RegisterWorker />} />
        <Route path='/registerManager' element={<RegisterManager />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes >
      <Footer />
    </div>
  )
}

export default App;
