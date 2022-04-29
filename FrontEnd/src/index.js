import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/js/src/collapse.js";
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Route from './components/route';
import Orders from './components/orders';
import TrainSchedule from './components/Train/schedule';
import FrontPage from './components/Customer/frontPage';


ReactDOM.render(
  <React.Fragment>
    <Navbar />
    {/* <div className="container">
      <Route />
    </div>
    <Orders />
    <TrainSchedule /> */}
    <FrontPage />
    <Footer />
  </React.Fragment>,

  document.getElementById('root')
);

reportWebVitals()