import React, { Component } from 'react';


class ManagerDashboard extends Component {


    render() {
        return (
            <div className='mx-4 my-4'>
                <div className='container'>
                    <h3>DashBoard</h3>


                    <div className="row  text-center">
                        <div className="col mx-5 my-4 rounded-3  border border-3 border-dark">
                            <h5 className='pt-4'>Total Trucks</h5>
                            <h1>18</h1>
                            <button className='btn btn-primary mb-4 mt-3 rounded-pill px-5'>
                                Add New Truck
                            </button>
                        </div>
                        <div className="col mx-5 my-4 rounded-3  border border-3 border-dark">
                            <h5 className='pt-4'>Total Workers</h5>
                            <h1>62</h1>
                            <button className='btn btn-primary mb-4 mt-3 rounded-pill px-5'>
                                Add New Worker
                            </button>
                        </div>
                        
                    </div>
                    <div className="row  text-center">
                        <div className="col mx-5 my-4 rounded-3  border border-3 border-dark">
                            <h5 className='pt-4'>Total Routes</h5>
                            <h1>35</h1>
                            <button className='btn btn-primary mb-4 mt-3 rounded-pill px-5'>
                                Show Routes
                            </button>
                        </div>
                        <div className="col mx-5 my-4 rounded-3  border border-3 border-dark">
                            <h5 className='pt-4'>Total Trains</h5>
                            <h1>21</h1>
                            <button className='btn btn-primary mb-4 mt-3 rounded-pill px-5'>
                                Schedule Trains
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default ManagerDashboard;