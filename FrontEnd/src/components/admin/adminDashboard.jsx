import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { saveAs } from 'file-saver';
import adminServices from '../service/admin.service';


class AdminDashboard extends Component {
    state = {
        name: 'admin',
        totalStores: 0,
        totalTrains: 0,
        totalProducts: 0
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
                            <button className='btn btn-primary mb-4 mt-4 rounded-pill px-5' onClick={this.createAndDownloadPdf}>
                                Calculate QSR
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
    createAndDownloadPdf = () => {
        adminServices.pdfparse(this.state.name)
            .then(() => axios.get('http://localhost:3001/admin', { responseType: 'blob' }))
            .then((res) => {
                // console.log(res.data)
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
                // console.log(pdfBlob)
                // saveAs(res.data, 'new.txt');
                saveAs(pdfBlob, 'newPdf.pdf');
                // new Blob([res.data], { type: 'application/pdf' }),`sample.pdf`);
            })
    }
}

export default AdminDashboard;