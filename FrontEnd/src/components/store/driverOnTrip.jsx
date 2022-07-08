import React, { Component } from 'react';
import storeService from '../service/store.service';

class DriverOnTrip extends Component {
    state = {
        drivers: []
    }

    async componentDidMount() {
        await storeService.getDriversOnTrip(this.props.store_id).then((response) => {
            // const arranged = groupByAttr(response.data, 'order_id')
            // console.log(response.data)
            this.setState({ drivers: response.data })
            // console.log(response.data[2])
        });
    }
    handleStateButton = (driver) => {
        console.log(driver.state)
        return (driver.state === "ondelivery") ? 'btn btn-warning' : 'btn btn-primary'
    }

    handleChangeState = ({ truck_s_id, state, driver_id, assistant_id }) => {
        const newState = (state === "scheduled") ? "ondelivery" : 'end';
        storeService.changeState(truck_s_id, newState, driver_id, assistant_id)
            .catch(err => alert('Something went wrong'))
            .then((result) => location.reload())
        window.location.reload();
    }

    render() {
        return (
            <div className='d-flex justify-content-center'>
                <div className="card" style={{ margin: '100px', width: '50%' }}>
                    <div className="card-body">
                        <div className="card-title mb-3">
                            <h1 className='text-primary'>Driver On Trip</h1>
                        </div>
                        <table className="table table-warning">
                            <thead>
                                <tr>
                                    <th scope="col">ScheduleID</th>
                                    <th scope="col">DriverID</th>
                                    <th scope="col">AssistantID</th>
                                    <th scope="col">State</th>
                                    <th scope="col">Change State</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.drivers.map(driver => (
                                    <tr key={driver.driver_id} >
                                        <td className='col-2'>{driver.truck_s_id}</td>
                                        <td className='col-2'>{driver.driver_id}</td>
                                        <td className='col-2'>{driver.assistant_id}</td>
                                        <td className='col-2'>{driver.state}</td>
                                        <td className='col-2'><button onClick={() => this.handleChangeState(driver)} className={this.handleStateButton(driver)}>Change to {(driver.state === 'scheduled' ? 'onDelivery' : 'end')}</button></td>
                                        {/* <td className='col-2'><input className="form-check-input" type="checkbox" name="" id="" onClick={(e) => this.handleCheck(e, driver)} disabled={this.state.compartmentcapacity < (this.state.totalCapacity + order.capacity) ? 'true' : ''} /></td> */}
                                        {/* <td className='col-1'>{order[0].train_name}</td>
                             <td className='col-1'>{order[0].destination}</td>
                             <td className='col-1'>{order[0].state}</td>
                             <td className='col-1'>{order[0].capacity}</td> */}
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default DriverOnTrip;