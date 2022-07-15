import React, { Component } from 'react'
import queryString from 'query-string';
import adminServices from '../service/admin.service';

class ScheduleTrainTo extends Component {
    state = {
        Orders: [],
        compartmentcapacity: 0,
        totalCapacity: 0,
        scheduleOrders: [],
        district: ''
    }

    async componentDidMount() {
        const district = queryString.parse(location.search);
        await adminServices.getItemsToBeScheduledDW(district).then((response) => {
            // console.log(response.data[0].train_id)
            // const arranged = groupByAttr(response.data, 'order_id')
            console.log(response);
            this.setState({ Orders: response.data, compartmentcapacity: response.data[0].compartmentcapacity, district: district })
            // console.log(this.state.Orders)
        });
    }
    render() {
        if (this.state.Orders.length === 0) return <h1 className='d-flex justify-content-center text-primary mt-2'>No Orders to be Scheduled</h1>;
        // const trainCapacity = this.state.Orders[0].capacity;
        return (<div className="container mt-4 mb-4" >
            <table className="table table-warning">
                <thead>
                    <tr>
                        <th scope="col">OrderID</th>
                        <th scope="col">Capacity</th>
                        <th scope="col">Add to</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.Orders.map(order => (
                        <tr key={order.order_id} >
                            <td className='col-2'>{order.order_id}</td>
                            <td className='col-2'>{order.capacity}</td>
                            <td className='col-2'><input className="form-check-input" type="checkbox" name="" id="" onClick={(e) => this.handleCheck(e, order)} disabled={this.state.compartmentcapacity < (this.state.totalCapacity + order.capacity) ? 'true' : ''} /></td>
                            {/* <td className='col-1'>{order[0].train_name}</td>
                             <td className='col-1'>{order[0].destination}</td>
                             <td className='col-1'>{order[0].state}</td>
                             <td className='col-1'>{order[0].capacity}</td> */}
                        </tr>
                    ))}

                </tbody>
            </table>
            <h4>Allowed Capacity:  {this.state.compartmentcapacity} m<sup>3</sup> </h4>
            <h4>Total Capacity: {this.handleTotalCapacity()}  m<sup>3</sup></h4>
            <div className=" d-flex justify-content-end" >
                <button className="btn btn-primary" onClick={this.handleSchedule}>Schedule Now</button>
            </div>
        </div >)
    }

    handleTotalCapacity() {
        return this.state.totalCapacity;
    }

    handleCheck = (e, order) => {
        // console.log(e.target)
        const check = e.target.checked;
        const capacity = order.capacity;
        const totalCapacity = this.state.totalCapacity;
        const tempOrder = [...this.state.scheduleOrders];
        if (check) {
            tempOrder.push(order);
            this.setState({ totalCapacity: totalCapacity + capacity, scheduleOrders: tempOrder })
        } else {
            const index = tempOrder.indexOf(order);
            console.log(index)
            tempOrder.splice(index, 1);
            this.setState({ totalCapacity: totalCapacity - capacity, scheduleOrders: tempOrder })
        }
    }
    handleSchedule = () => {
        // console.log(this.state.district)
        const orderIDs = []
        this.state.scheduleOrders.map(order => orderIDs.push(order.order_id))
        // console.log(orderIDs, this.state.district)
        adminServices.scheduleOrdersToTrain(orderIDs, this.state.Orders[0].train_id)
            .catch(err => alert('Something went wrong'))
            .then(res => console.log(res))
            .then(window.location.reload())
    }

}



export default ScheduleTrainTo