import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class AdminDashboard extends Component {


    render() {
        return (
            <div className='mx-4 my-4'>
                <div className='container'>
                    <h3>DashBoard</h3>


                    <div className="row  text-center">
                        <div className="col mx-5 my-4 rounded-3  border border-3 border-dark">
                            <h5 className='pt-4'>Total Stores</h5>
                            <h1>21</h1>
                            <button className='btn btn-primary mb-4 mt-3 rounded-pill px-5'>
                                Add New Store
                            </button>
                        </div>
                        <div className="col mx-5 my-4 rounded-3  border border-3 border-dark">
                            <h5 className='pt-4'>Total Products</h5>
                            <h1>45</h1>
                            <Link className="nav-link fw-bold" aria-current="page" to="/admin/addproduct">
                                <button className='btn btn-primary mb-4 mt-3 rounded-pill px-5'>
                                    Add New Product
                                </button>
                            </Link>
                        </div>

                    </div>
                    <div className="row  text-center">
                        <div className="col mx-5 my-4 rounded-3  border border-3 border-dark">
                            <h5 className='pt-4'>Total Trains</h5>
                            <h1>21</h1>
                            <Link className="nav-link fw-bold" aria-current="page" to="/admin/loadtotrain"> <button className='btn btn-primary mb-4 mt-3 rounded-pill px-5'>
                                Show Scheduled Trains
                            </button></Link>
                        </div>
                        <div className="col mx-5 my-4 rounded-3  border border-3 border-dark">
                            <h1 className='pt-5'>QSR</h1>
                            <button className='btn btn-primary mb-4 mt-4 rounded-pill px-5'>
                                Calculate QSR
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default AdminDashboard;