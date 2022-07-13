import React from 'react';
import Axios from "axios";

class TrainSchedule extends React.Component {
    state = {
        trains: []
    }
    async componentDidMount() {
        await Axios.get('http://localhost:3001/admin/trainschedule').then((response) => {
            this.setState({ trains: response.data })
        })
        // Axios.post('http://localhost:3001/api/insert',);
    }
    render() {
        return (
            < div className="container mt-4 pt-4" >
                <table className="table table-secondary table-striped table-bordered border-dark">
                    < thead className="thead-dark" >
                        <tr>
                            <th className='col-2'>Train</th>
                            <th className='col-2'>Destination</th>
                            <th className='col-4'>Time</th>
                            <th className='col-2'>Capasity</th>
                            <th className='col-2'>Stops</th>
                        </tr>
                    </thead >
                    <tbody>
                        {this.state.trains.map(train => (
                            <tr key={train.train_id}>
                                <td>{train.train_name}</td>
                                <td>{train.destination}</td>
                                {/* <td>6.00 A.M - 9.00 A.M</td> */}
                                {/* <td>{train.start_time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</td> */}
                                <td>{train.start_time} - {train.end_time}</td>
                                <td>{train.compartmentcapacity}m<sup>3</sup></td>
                                <td>{train.stops}</td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table >
            </div >
        );
    }
}

export default TrainSchedule;