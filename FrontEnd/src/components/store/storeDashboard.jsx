import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import storeService from '../service/store.service';


class StoreManager extends Component {
    state = {
        totalRoutes: 0,
        newOrdersOntrain: 'tobeset',
        totalTruck: 0,
        totalworkers: 0
    }
    async componentDidMount() {
        // console.log(this.props.store_id)
        await storeService.getDetails(this.props.store_id).then((response) => {
            this.setState({
                totalRoutes: response.data[0][0]['data'], totalTruck: response.data[1][0]['data'], totalworkers: response.data[2][0]['data'], newOrdersOntrain: response.data[3][0]['data']
            })
            // window.location.reload()
        });
        // console.log(this.state)
    }
    render() {
        return (
            <div className='mx-4 my-4'>
                <div className='container'>
                    <h3>DashBoard</h3>
                    <div className="row  text-center">
                        <div className="col mx-5 my-4 rounded-3  border border-3 border-dark">
                            <h5 className='pt-4'>Total Routes</h5>
                            <h1>{this.state.totalRoutes}</h1>
                            <Link to="/store/setroutes">
                                <button className='btn btn-primary mb-4 mt-3 rounded-pill px-5'>
                                    Set Routes
                                </button>
                            </Link>
                        </div>
                        <div className="col mx-5 my-4 rounded-3  border border-3 border-dark">
                            <h5 className='pt-4'>Total New Orders</h5>
                            <h1>{this.state.newOrdersOntrain}</h1>
                            <Link to="/store/ordersontrain">
                                <button className='btn btn-primary mb-4 mt-3 rounded-pill px-5'>
                                    Orders on Train
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="row  text-center">
                        <div className="col mx-5 my-4 rounded-3  border border-3 border-dark">
                            <h5 className='pt-4'>Total Trucks</h5>
                            <h1>{this.state.totalTruck}</h1>
                            <button className='btn btn-primary mb-2 mt-3 rounded-pill px-5'>
                                Add New Truck
                            </button>
                            <br />
                            <Link to="/store/scheduletruck">
                                <button className='btn btn-primary mb-4 rounded-pill px-5'>
                                    Schedule Truck
                                </button>
                            </Link>
                        </div>
                        <div className="col mx-5 my-4 rounded-3  border border-3 border-dark">
                            <h5 className='pt-4'>Total Workers</h5>
                            <h1>{this.state.totalworkers}</h1>
                            <Link to="/store/addnewworker">
                                <button className='btn btn-primary mb-2 mt-3 rounded-pill px-5'>
                                    Add New Worker
                                </button>
                            </Link>
                            <br />
                            <Link to="/store/driverondelivery">
                                <button className='btn btn-primary mb-4 rounded-pill px-5'>
                                    Workers in Delivery
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default StoreManager;