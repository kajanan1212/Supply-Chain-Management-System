import React, { Component } from 'react';
import authService from '../service/auth.service';

class Signup extends Component {
    state = {
        email: "",
        first_name: "",
        last_name: "",
        phone_num: "",
        password: "",
        confirmpassword: ""
    }
    onFormSubmit = async (e) => {
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
        if (!this.state.phone_num) {
            alert("Enter Phone Number");
            return;
        }

        if (!this.state.password) {
            alert("Enter Password");
            return;
        }

        if (!this.state.confirmpassword) {
            alert("Enter Confirm Password");
            return;
        }
        e.preventDefault();
        const { email, first_name, last_name, password, confirmpassword, phone_num } = this.state;
        await authService.signup(email, first_name, last_name, password, confirmpassword, phone_num).then(
            window.location = '/login').catch(error => console.log(err))
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
        this.setState({ phone_num: e.target.value });
    }
    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    }
    handleConfirmPasswordChange = (e) => {
        this.setState({ confirmpassword: e.target.value });
    }

    render() {
        return (
            <div>
                <div className='d-flex justify-content-center'>
                    <div className="card" style={{ margin: '47px', width: '50%' }}>

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

                                        <input type="text" className="form-control" value={this.state.first_name} onChange={this.handleFirstNameChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" value={this.state.last_name} onChange={this.handleLastNameChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Phone Number</label>
                                        <input type="text" className="form-control" value={this.state.phone_num} onChange={this.handlePhoneNoChange} />

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Password</label>
                                        <input type="password" className="form-control" value={this.state.password} onChange={this.handlePasswordChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Confirm Password</label>

                                        <input type="password" className="form-control" value={this.state.confirmpassword} onChange={this.handleConfirmPasswordChange} />

                                    </div>

                                    <div>
                                        <label htmlFor="" className="form-label">Profile Image</label>
                                        <input type="file" className="form-control" disabled />

                                    </div>

                                    <button type="submit" onClick={this.onFormSubmit} className="btn mt-3 btn-primary mt-4">Signup</button>

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