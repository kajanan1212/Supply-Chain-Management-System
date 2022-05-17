import React, { Component } from 'react'

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
                        <div className="col"><button className="btn btn-info" onClick={() => this.handleSchedule({ dis })}>Schedule Trip</button></div>
                    </div>
                ))}
            </div>
        )
    }

    handleSchedule = ({ dis }) => {
        console.log(dis)
        window.location = "?destrict=" + dis
    }
}

export default ScheduleTrain;