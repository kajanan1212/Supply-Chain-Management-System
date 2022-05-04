import React from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import authService from './service/auth.service';

class Navbar extends React.Component {
    state = {
        customer: []
    }

    async componentDidMount() {
        const token = authService.getCurrentUser();
        // console.log(token.accessToken)
        const user = jwt_decode(token.accessToken);
        this.setState({ customer: user.user })
    }
    logOut = () => {
        authService.logout();
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-bg">
                <div className="container-fluid">
                    <a className="navbar-brand navbar-font" href="/">BuyMore</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" aria-current="page" to="#">New Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to="#">Schedule Train</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/train/trainschedule' className="nav-link fw-bold">Scheduled Train</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#">
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex" style={{ marginTop: '-5px', marginBottom: '-7px' }}>
                        <h1><i className="fa fa-user-circle-o me-2"></i></h1>

                        <h4 className="align-middle mt-2 fw-bolder" style={{ color: '#4A148C' }}>{this.state.customer.first_name}</h4>
                    </div>
                </div>
            </nav >
        );
    }
}

export default Navbar;