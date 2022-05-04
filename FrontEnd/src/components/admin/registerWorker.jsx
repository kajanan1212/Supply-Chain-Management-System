import React, { Component } from 'react';

class RegisterWorker extends Component {
    state = {
        name: "",
        phoneNo: "",
        shop: "",
        type: "",
    }
    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    }
    handlePhoneNoChange = (e) => {
        this.setState({ phoneNo: e.target.value });
    }
    handleShopChange = (e) => {
        this.setState({ shop: e.target.value });
    }
    handleTypeChange = (e) => {
        this.setState({ district: e.target.value });
    }

    onFormSubmit = (e) => {

        if (!this.state.name) {
            alert("Enter Name");
            return;
        }
        if (!this.state.phoneNo) {
            alert("Enter Phone Number");
            return;
        }
        if (!this.state.shop) {
            alert("Enter Shop");
            return;
        }

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
                                        <label htmlFor="" className="form-label">Name</label>
                                        <input type="text" className="form-control" value={this.state.name} onChange={this.handleNameChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Phone Number</label>
                                        <input type="text" className="form-control" value={this.state.phoneNo} onChange={this.handlePhoneNoChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Shop Name</label>
                                        <input type="text" className="form-control" value={this.state.shop} onChange={this.handleShopChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Job Type</label>
                                        <select className="form-control" value={this.state.district} onChange={this.handleDistrictChange}>
                                            <option value="volvo">Shop Keeper</option>
                                            <option value="saab">Truck Driver</option>
                                            <option value="mercedes">Driver Assistant</option>
                                        </select>
                                    </div>

                                    <button type="submit" onClick={this.onFormSubmit} className="btn mt-3 btn-primary">Register</button>
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