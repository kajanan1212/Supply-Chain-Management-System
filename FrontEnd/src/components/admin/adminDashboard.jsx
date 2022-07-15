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
        qsr_year: '',
        qsr_part: 0
    }
    componentDidMount() {
        if (localStorage.getItem('qsr')) localStorage.removeItem('qsr');
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
        this.setState({ qsr_year: e.target.value })
    }
    handleQSRPart = (e) => {
        const val = parseInt(e.target.value)
        this.setState({ qsr_part: val })
    }
    handleNavigate = () => {
        localStorage.setItem('qsr', JSON.stringify(this.state));
        window.location = '/admin/qsr'
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
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Quartely Sales Report Period</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group">
                                    <span className="input-group-text">YEAR and PART</span>
                                    <input type="text" aria-label="First name" className="form-control" name="year" onChange={this.handleQSRYear} />
                                    <input type="text" aria-label="Last name" className="form-control" name='part' onChange={this.handleQSRPart} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={this.handleNavigate}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default AdminDashboard;