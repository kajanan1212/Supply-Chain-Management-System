import React, { Component } from 'react';
import Navbar from '../Navbar';

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
                                        <input type="text" className="form-control" value={this.state.password} onChange={this.handlePasswordChange} />
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
    onFormSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
}

export default Login;