import React, { Component } from 'react';

class Signup extends Component {
    state = { 
        email: "",
        firstName: "",
        lastName: "",
        phoneNo: "",
        address: "",
        password: "",
        confirmPassword: ""
    }
    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    }
    handleFirstNameChange = (e) => {
        this.setState({ firstName: e.target.value });
    }
    handleLastNameChange = (e) => {
        this.setState({ lastName: e.target.value });
    }
    handlePhoneNoChange = (e) => {
        this.setState({ phoneNo: e.target.value });
    }
    handleAddressChange = (e) => {
        this.setState({ address: e.target.value });
    }
    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    }
    handleConfirmPasswordChange = (e) => {
        this.setState({ confirmPassword: e.target.value });
    }

    onFormSubmit = (e) => {
       
        if (!this.state.email) {
            alert("Enter Email");
            return;
        }
        if (!this.state.firstName) {
            alert("Enter First Name");
            return;
        }
        if (!this.state.lastName) {
            alert("Enter Last Name");
            return;
        }
        if (!this.state.phoneNo) {
            alert("Enter Phone Number");
            return;
        }
        if (!this.state.address) {
            alert("Enter Address");
            return;
        }
        if (!this.state.password) {
            alert("Enter Password");
            return;
        }
        if (!this.state.confirmPassword) {
            alert("Enter Confirm Password");
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
                                <h1 className='text-primary'>Signup</h1>
                            </div>
                            <div className="card-body">
                                <form action="">
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Email</label>
                                        <input type="text" className="form-control" value={this.state.email} onChange={this.handleEmailChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">First Name</label>
                                        <input type="text" className="form-control" value={this.state.firstName} onChange={this.handleFirstNameChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" value={this.state.lastName} onChange={this.handleLastNameChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Phone Number</label>
                                        <input type="text" className="form-control" value={this.state.phoneNo} onChange={this.handlePhoneNoChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Address</label>
                                        <input type="text" className="form-control" value={this.state.address} onChange={this.handleAddressChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Password</label>
                                        <input type="password" className="form-control" value={this.state.password} onChange={this.handlePasswordChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control" value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange} />
                                    </div>

                                    <div>
                                        <label htmlFor="" className="form-label">Profile Image</label>
                                        <input type="file" className="form-control" />

                                    </div>

                                    <button type="submit" onClick={this.onFormSubmit} className="btn mt-3 btn-primary">Signup</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
 
export default Signup;