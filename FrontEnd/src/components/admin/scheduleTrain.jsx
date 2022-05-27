import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ScheduleTrain extends Component {
    state = {
        district: ["jaffna", "colombo", 'matara', 'galle', 'trincomalle']
    }
    render() {
        const alreadySchedule = <h6 className='text-success mb-2 mt-4'>Already Scheduled</h6>
        return (
            <div className='my-4 container'>
                <h3>Train Trips</h3>
                <div className="row  text-center">
                    {this.state.district.map(dis => (
                        <div className="col mx-5 my-4 rounded-3  border border-3 border-dark">
                            <h5 className='pt-4 pb-3'>Trip to  {dis}</h5>
                            <Link
                                to={`/admin/scheduletrainto?district=` + dis}></Link>
                            <button className='btn btn-primary mb-4 mt-2 rounded-pill px-5'>
                                Schedule Now
                            </button>
                        </div>
                    ))}
                </div>
            </div >
        );
        return (
            <div className='container'>
                {this.state.district.map(dis => (
                    <div className="row m-5">
                        <div className="col-6" style={{ textTransform: 'capitalize' }}> Trip to {dis}</div>
                        <div className="col">
                            <Link
                                to={`/admin/scheduletrainto?district=` + dis}>
                                <button className="btn btn-info">Schedule Trip</button></Link></div>
                    </div>
                ))}
            </div>
        )
    }
}

export default ScheduleTrain;