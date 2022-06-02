import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import adminServices from '../service/admin.service'

class ScheduleTrain extends Component {
    state = {
        district: [],
        busyDis: []
    }

    async componentDidMount() {
        await adminServices.getAllTrain().then((response) => {
            const district = response.data[0];
            const busydis = response.data[1].map(a => { return a.district })
            this.setState({ district, busyDis: busydis })
            console.log(response.data[1])
        })
    }

    render() {
        const alreadySchedule = <h6 className='text-success mb-3 mt-4'>Already Scheduled...</h6>
        return (
            <div className='my-4 container'>
                <h3>Train Trips</h3>
                <div className="row text-center justify-content-center">
                    {this.state.district.map(dis => (
                        <div className="col-5 mx-5 my-4 rounded-3  border border-3 border-dark" key={dis.district}>
                            <h5 className='pt-4 pb-3'>Trip to  <span style={{ textTransform: 'capitalize' }}>{dis.district}</span></h5>
                            {this.state.busyDis.includes(dis.district) ? alreadySchedule :
                                <Link
                                    to={`/admin/scheduletrainto?district=` + dis.district}>
                                    <button className='btn btn-primary mb-4 mt-2 rounded-pill px-5'>
                                        Schedule Now
                                    </button></Link>}
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