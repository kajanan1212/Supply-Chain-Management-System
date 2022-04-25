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


ReactDOM.render(
  <React.Fragment>
    <Navbar />
    <div class="container">
      <Route />
    </div>
    <Orders />
    <Footer />
  </React.Fragment>,

  document.getElementById('root')
);

reportWebVitals()