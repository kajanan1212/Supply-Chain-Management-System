import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ScheduleTrain extends Component {
    state = {
        district: ["jaffna", "colombo", 'matara', 'galle', 'trincomalle']
    }
    render() {

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