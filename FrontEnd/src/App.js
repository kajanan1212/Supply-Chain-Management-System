import Navbar from './components/Navbar';
import TrainSchedule from './components/Train/schedule';
import FrontPage from './components/Customer/frontPage';
import Login from './components/Customer/login';
import Footer from './components/footer';
import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import authService from './components/service/auth.service';
import RegisterWorker from './components/store/addNewWorker';
import RegisterManager from './components/admin/registerManager';
import Signup from './components/Customer/signup';
import AddProduct from './components/admin/addProduct';
import OrderedProduct from './components/Customer/orderedProduct';
import jwt_decode from 'jwt-decode';
import AdminDashboard from './components/admin/adminDashboard';
import ScheduleTrain from './components/admin/scheduleTrain';
import NewOrders from './components/admin/neworders';
import ScheduledOrders from './components/admin/scheduledOrder';
import ScheduleTrainTo from './components/admin/scheduleTrainTo';
import PastOrders from './components/admin/pastOrders';
import StoreManager from './components/store/storeDashboard';
import ScheduleTruck from './components/store/scheduletruck';
import SetRoutes from './components/store/setRoutes';
import OrdersOnTrain from './components/store/ordersOnTrain';
import DriverOnTrip from './components/store/driverOnTrip';
import LoadToTrain from './components/admin/loadtotrain';
import QSR from './components/admin/QSR';
import FinishedOrders from './components/store/finishedOrder';
import ScheduledOrder from './components/store/scheduledOrders';
import Reports from './components/admin/reports';

class App extends React.Component {
  state = { customer: [], role: '' }

  async componentDidMount() {
    try {
      let token = authService.getCurrentUser();
      const decToken = jwt_decode(token.accessToken);
      // console.log(token.role)
      this.setState({ customer: decToken.user, role: token.role })
    }
    catch {
    }
  }
  render() {
    const admin = (<div>
      < Navbar user={this.state.customer} role={this.state.role} />
      < Routes >
        <Route path='/admin/trainschedule' element={<TrainSchedule />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/admin/registerManager' element={<RegisterManager />} />
        {/* <Route path='/admin/registerWorker' element={<RegisterWorker />} /> */}
        <Route path='/admin/addProduct' element={<AddProduct />} />
        <Route path='/admin/loadtotrain' element={<LoadToTrain />} />
        <Route path='/admin/scheduletrain' element={<ScheduleTrain />} />
        <Route path='/admin/scheduletrainto' element={<ScheduleTrainTo />} />
        <Route path='/admin/pastorders' element={<PastOrders />} />
        <Route path='/admin/neworder' element={<NewOrders />} />
        <Route path='/admin/scheduledorder' element={<ScheduledOrders />} />
        <Route path='/admin/reports' element={<Reports />} />
        <Route path='/admin/qsr' element={<QSR />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes >
      <Footer />
    </div>)

    const store = (<div>
      < Navbar user={this.state.customer} role={this.state.role} />
      < Routes >
        <Route path='/store' element={<StoreManager store_id={this.state.customer.store_id} />} />
        <Route path='/store/setroutes' element={<SetRoutes store_id={this.state.customer.store_id} />} />
        <Route path='/store/driverondelivery' element={<DriverOnTrip store_id={this.state.customer.store_id} />} />
        <Route path='/store/ordersontrain' element={<OrdersOnTrain store_id={this.state.customer.store_id} />} />
        <Route path='/store/neworder' element={<OrderedProduct store_id={this.state.customer.store_id} />} />
        <Route path='/store/finishedorder' element={<FinishedOrders store_id={this.state.customer.store_id} />} />
        <Route path='/store/scheduledorder' element={<ScheduledOrder store_id={this.state.customer.store_id} />} />
        <Route path='/store/scheduletruck' element={<ScheduleTruck store_id={this.state.customer.store_id} />} />
        <Route path='/store/addnewworker' element={<RegisterWorker store_id={this.state.customer.store_id} />} />
        <Route path="*" element={<Navigate to="/store" />} />
      </Routes >
      <Footer />
    </div>)


    const user = (<div>
      < Navbar user={this.state.customer} role={this.state.role} />
      < Routes >
        <Route path='/' element={<FrontPage user={this.state.customer} />} />
        <Route path='/history' element={<OrderedProduct customer_id={this.state.customer.customer_id} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes >
      <Footer />
    </div>)

    const nullPart = (<div>
      < Navbar user={this.state.customer} role={this.state.role} />
      < Routes >
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        {/* <Route path="*" element={<Navigate to="/store" replace />} /> */}
      </Routes >
      <Footer />
    </div>)

    if ((this.state.customer.type === "active") && (this.state.role === 'normal')) {
      return user;
    } else if ((this.state.customer.type === "admin") && (this.state.role === 'normal')) {
      return admin;
    } else if (this.state.role === 'store') {
      return store;
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