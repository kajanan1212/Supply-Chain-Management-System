import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { saveAs } from 'file-saver';
import adminServices from '../service/admin.service';
import QSR from './QSR';


class AdminDashboard extends Component {
    state = {
        totalStores: 0,
        totalTrains: 0,
        totalProducts: 0,
        qsr_validity: { year: '', part: 0 }
    }
    componentDidMount() {
        adminServices.getDetails().then((response) => {
            console.log(response.data[2][0]['count'])
            this.setState({
                totalStores: response.data[0][0]['count'], totalProducts: response.data[1][0]['count'], totalTrains: response.data[2][0]['count']
            })
            // window.location.reload()
        });
        // console.log(this.state)
    }
    handleQSRYear = (e) => {
        let name = e.target.name
        this.setState({ name: e.target.value })
    }
    render() {

        return (
            <div className='mx-4 my-4'>
                <div className='container'>
                    <h3>DashBoard</h3>


                    <div className="row  text-center">
                        <div className="col mx-5 my-4 rounded-3  border border-3 border-dark">
                            <h5 className='pt-4'>Total Stores</h5>
                            <h1>{this.state.totalStores}</h1>
                            <button className='btn btn-primary mb-4 mt-3 rounded-pill px-5'>
                                Add New Store
                            </button>
                        </div>
                        <div className="col mx-5 my-4 rounded-3  border border-3 border-dark">
                            <h5 className='pt-4'>Total Products</h5>
                            <h1>{this.state.totalProducts}</h1>
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
                            <h1>{this.state.totalTrains}</h1>
                            <Link className="nav-link fw-bold" aria-current="page" to="/admin/loadtotrain"> <button className='btn btn-primary mb-4 mt-3 rounded-pill px-5'>
                                Show Scheduled Trains
                            </button></Link>
                        </div>
                        <div className="col mx-5 my-4 rounded-3  border border-3 border-dark">
                            <h1 className='pt-5'>QSR</h1>
                            {/* <button className='btn btn-primary mb-4 mt-4 rounded-pill px-5' onClick={openProp}> */}
                            <button className='btn btn-primary mb-4 mt-4 rounded-pill px-5' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Calculate QSR
                            </button>

                        </div>
                    </div>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Quartely Sales Report Period</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="input-group">
                                    <span class="input-group-text">YEAR and PART</span>
                                    <input type="text" aria-label="First name" class="form-control" name="year" onChange={this.handleQSRYear} />
                                    <input type="text" aria-label="Last name" class="form-control" name='part' onChange={this.handleQSRYear} />
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <Link to="/admin/qsr" state={this.state.qsr_validity}><button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default AdminDashboard;