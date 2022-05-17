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
import AdminDashboard from './components/admin/adminDashboard';
import ScheduleTrain from './components/admin/scheduleTrain';
import NewOrders from './components/admin/neworders';
import ScheduledOrders from './components/admin/scheduledOrder';

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
    const admin = (<div>
      < Navbar user={this.state.customer} />
      < Routes >
        <Route path='/admin/trainschedule' element={<TrainSchedule />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/admin/registerManager' element={<RegisterManager />} />
        <Route path='/admin/registerWorker' element={<RegisterWorker />} />
        <Route path='/admin/addProduct' element={<AddProduct />} />
        <Route path='/admin/scheduletrain' element={<ScheduleTrain />} />
        <Route path='/admin/neworder' element={<NewOrders />} />
        {/* <Route path='/admin/pastorder' element={<PastOrder />} /> */}
        <Route path='/admin/scheduledorder' element={<ScheduledOrders />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes >
      <Footer />
    </div>)

    const user = (<div>
      < Navbar user={this.state.customer} />
      < Routes >
        <Route path='/' element={<FrontPage user={this.state.customer} />} />
        <Route path='/history' element={<OrderedProduct customer_id={this.state.customer.customer_id} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes >
      <Footer />
    </div>)

    const nullPart = (<div>
      < Navbar user={this.state.customer} />
      < Routes >
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes >
      <Footer />
    </div>)

    if (this.state.customer.type === "active") {
      return user;
    } else if (this.state.customer.type === 'admin') {
      return admin;
    } else {
      return nullPart;
    }
  }

}

export default App;




// return (
//   <div>
//     < Navbar user={this.state.customer} />

//     < Routes >
//       <Route path='/admin/trainschedule' element={<TrainSchedule />} />
//       <Route path='/admin/registerManager' element={<RegisterManager />} />
//       <Route path='/admin/registerWorker' element={<RegisterWorker />} />
//       <Route path='/' element={<FrontPage user={this.state.customer} />} />
//       <Route path='/registerworker' element={<RegisterWorker />} />
//       <Route path='/registerManager' element={<RegisterManager />} />
//       <Route path='/login' element={<Login />} />
//       <Route path='/signup' element={<Signup />} />
//       <Route path='/admin/addProduct' element={<AddProduct />} />
//       <Route path='/history' element={<OrderedProduct customer_id={this.state.customer.customer_id} />} />
//       <Route
//         path="*"
//         element={<Navigate to="/" replace />}
//       />
//     </Routes >
//     <Footer />
//   </div>
// )