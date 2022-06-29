import React, { Component } from 'react';
import managerServices from '../service/store.service';


class RegisterWorker extends Component {
    state = {
        email: "",
        first_name: "",
        last_name: "",
        phoneNo: "",
        shop: "",
        type: "",
        salary: ""
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    }
    handleFirstNameChange = (e) => {
        this.setState({ first_name: e.target.value });
    }
    handleLastNameChange = (e) => {
        this.setState({ last_name: e.target.value });
    }
    handlePhoneNoChange = (e) => {
        this.setState({ phoneNo: e.target.value });
    }
    handleShopChange = (e) => {
        this.setState({ shop: e.target.value });
    }
    handleTypeChange = (e) => {
        this.setState({ type: e.target.value });
    }
    handleSalaryChange = (e) => {
        this.setState({ salary: e.target.value });
    }

    onFormSubmit = (dataa) => {

        if (!this.state.email) {
            alert("Enter Email");
            return;
        }
        if (!this.state.first_name) {
            alert("Enter First Name");
            return;
        }
        if (!this.state.last_name) {
            alert("Enter Last Name");
            return;
        }
        if (!this.state.phoneNo) {
            alert("Enter Phone Number");
            return;
        }
        if (!this.state.shop) {
            alert("Select Shop");
            return;
        }
        if (!this.state.type) {
            alert("Select Job type");
            return;
        }
        if (!this.state.salary) {
            alert("Enter Salary");
            return;
        }

        managerServices.registerWorker(dataa)
            .catch(err => console.log(err))
            .then(window.location.reload())
    }



    render() {
        return (
            <div>
                <div className='d-flex justify-content-center'>
                    <div className="card" style={{ margin: '100px', width: '50%' }}>
                        <div className="card-body">
                            <div className="card-title">
                                <h1 className='text-primary'>Register Worker</h1>
                            </div>
                            <div className="card-body">
                                <form action="">
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Email</label>
                                        <input type="text" className="form-control" value={this.state.email} onChange={this.handleEmailChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">First Name</label>

                                        <input type="text" className="form-control" value={this.state.first_name} onChange={this.handleFirstNameChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" value={this.state.last_name} onChange={this.handleLastNameChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Phone Number</label>
                                        <input type="text" className="form-control" value={this.state.phoneNo} onChange={this.handlePhoneNoChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Shop Name</label>
                                        <select className="form-control" onChange={this.handleShopChange}>
                                            <option value="" hidden disabled=""  >Choose a District...</option>
                                            <option >Colombo</option>
                                            <option >Negombo</option>
                                            <option >Galle</option>
                                            <option >Matara</option>
                                            <option >Jaffna</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Job Type</label>
                                        <select className="form-control" value={this.state.type} onChange={this.handleTypeChange}>
                                            <option value="" hidden disabled="" >Select a Job...</option>
                                            <option value="volvo">Shop Keeper</option>
                                            <option value="saab">Truck Driver</option>
                                            <option value="mercedes">Driver Assistant</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Salary</label>
                                        <input type="text" className="form-control" value={this.state.salary} onChange={this.handleSalaryChange} />
                                    </div>
                                    <div>
                                        <label htmlFor="" className="form-label">Profile Image</label>
                                        <input type="file" className="form-control" disabled />

                                    </div>

                                    <button type="submit" onClick={() => this.onFormSubmit(this.state)} className="btn mt-3 btn-primary">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default RegisterWorker;