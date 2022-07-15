import React from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import authService from './service/auth.service';

class Navbar extends React.Component {

    logOut = () => {
        authService.logout();
    };


    redirect = (page) => {
        window.location = `/` + page;
    }


    render() {
        return (
            < nav className="navbar navbar-expand-lg navbar-bg" >
                {/* {console.log(this.props.user['type'])} */}
                < div className="container-fluid" >
                    <a className="navbar-brand navbar-font" href="/">BuyMore</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        {((this.props.user.length !== 0) && (this.props.user['type'] == 'active')) &&
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link fw-bold" aria-current="page" to="/history">History</Link>
                                </li>
                            </ul>}
                        {((this.props.user.length !== 0) && (this.props.user['type'] == 'admin')) &&
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

                                <li className="nav-item">
                                    <Link className="nav-link fw-bold" to="/admin/neworder">New Orders</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-bold" to="/admin/scheduledorder">Scheduled Orders</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-bold" to="/admin/pastorders">All Orders</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-bold" to="/admin/scheduletrain">Schedule Train</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/admin/trainschedule' className="nav-link fw-bold">Scheduled Train</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/admin/reports' className="nav-link fw-bold">Reports</Link>
                                </li>

                            </ul>}
                        {((this.props.user.length !== 0) && (this.props.role == 'store')) &&
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link fw-bold" to="/store/neworder">New Orders</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-bold" aria-current="page" to="/store/scheduledorder">Scheduled Orders</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-bold" aria-current="page" to="/store/finishedorder">Finished Orders</Link>
                                </li>
                            </ul>}
                    </div>
                    {(this.props.user.length !== 0) &&
                        <div className="d-flex" style={{ marginTop: '-5px', marginBottom: '-7px' }}>
                            <h5 className='align-middle mt-3 me-3 fw-bolder' style={{ color: '#4A148C', cursor: 'pointer' }} onClick={this.logOut}>Logout</h5>
                            <h1><i className="fa fa-user-circle-o me-2"></i></h1>
                            <h4 className="align-middle mt-3 fw-bolder" style={{ color: '#4A148C' }}>{(this.props.user['type'] == 'admin') ? "admin" : this.props.user.first_name}</h4>
                        </div>}
                    {(this.props.user.length === 0) &&
                        <div className="d-flex" style={{ marginTop: '-5px', marginBottom: '-7px' }}>
                            <h5 className='align-middle mt-3 me-3 fw-bolder' style={{ color: '#4A148C', cursor: 'pointer' }} onClick={() => this.redirect('login')}>login</h5>
                            <h5 className='align-middle mt-3 me-3 fw-bolder' style={{ color: '#4A148C', cursor: 'pointer' }} onClick={() => this.redirect('signup')}>signup</h5>
                        </div>}

                </div>
            </nav >
        );
    }
}

export default Navbar;