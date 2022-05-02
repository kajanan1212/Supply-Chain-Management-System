import React, { Component } from 'react';
import Navbar from '../Navbar';
import Axios from "axios";

class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    }
    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    }
    onFormSubmit = (e) => {
        if (!this.state.email) {
            alert("Enter Email");
            return;
        }
        if (!this.state.password) {
            alert("Enter password");
            return;
        }
        e.preventDefault();
        Axios.post('http://localhost:3001/login', { email: this.state.email, password: this.state.password })
            .catch(err => alert('Something went wrong'))
        // .then(window.location.reload())
    }

    render() {
        return (
            <div>
                <div className='d-flex justify-content-center'>
                    <div className="card" style={{ margin: '100px', width: '50%' }}>
                        <div className="card-body">
                            <div className="card-title">
                                <h1 className='text-primary'>Login</h1>
                            </div>
                            <div className="card-body">
                                <form action="">
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Email</label>
                                        <input type="text" className="form-control" value={this.state.email} onChange={this.handleEmailChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Password</label>
                                        <input type="password" className="form-control" value={this.state.password} onChange={this.handlePasswordChange} />
                                    </div>
                                    <button type="submit" onClick={this.onFormSubmit} className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Login;