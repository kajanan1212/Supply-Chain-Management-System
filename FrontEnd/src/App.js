import Navbar from './components/Navbar';
import TrainSchedule from './components/Train/schedule';
import FrontPage from './components/Customer/frontPage';
import Login from './components/Customer/login';
import Footer from './components/footer';
import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import authService from './components/service/auth.service';
import RegisterWorker from './components/admin/registerWorker';
import RegisterManager from './components/admin/registerManager';
import Signup from './components/Customer/signup';
import AddProduct from './components/admin/addProduct';
import OrderedProduct from './components/Customer/orderedProduct';
import jwt_decode from 'jwt-decode';

class App extends React.Component {
  state = { customer: [] }


  async componentDidMount() {
    try {
      let token = authService.getCurrentUser();
      const decToken = jwt_decode(token.accessToken);
      this.setState({ customer: decToken.user })
    }
    catch {
    }
  }
  render() {
    return (
      <div>
        < Navbar user={this.state.customer} />
        < Routes >
          <Route path='/admin/trainschedule' element={<TrainSchedule />} />
          <Route path='/admin/registerManager' element={<RegisterManager />} />
          <Route path='/admin/registerWorker' element={<RegisterWorker />} />
          <Route path='/' element={<FrontPage user={this.state.customer} />} />
          <Route path='/registerworker' element={<RegisterWorker />} />
          <Route path='/registerManager' element={<RegisterManager />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/admin/addProduct' element={<AddProduct />} />
          <Route path='/history' element={<OrderedProduct />} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes >
        <Footer />
      </div>
    )
  }

}

export default App;
