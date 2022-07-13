import React, { Component } from 'react'
import { groupByAttr } from '../common/groupByAttribute';
import storeService from '../service/store.service';

class ScheduleTruck extends Component {
    state = {
        routes: [],
        orders: [],
        route_id: "",
        order_only_route: [],
        scheduleOrders: [],
        totalCapacity: 0,
        TruckCapacity: 0,
        trucks: [],
        drivers: [],
        assistants: [],
        toSend: { route_id: '', products: {}, truck_id: '', driver_id: '', assistant: '' }
    }

    async componentDidMount() {
        await storeService.getAllRoutes(this.props.store_id).then((response) => {
            // const arranged = groupByAttr(response.data, 'order_id')
            // console.log(response.data)
            const arranged = groupByAttr(response.data[1], 'route_id');
            this.setState({ routes: response.data[0], orders: arranged, trucks: response.data[2], drivers: response.data[4], assistants: response.data[3] })
            // console.log(response.data)
        });
    }
    handleRouteChange = (e) => {
        this.setState({ route_id: e.target.value, scheduleOrders: [], totalCapacity: 0 })
        const neworder = this.state.orders.filter(order => order[0].route_id === e.target.value)
        if (neworder.length > 0) { this.setState({ order_only_route: neworder[0] }) } else (this.setState({ order_only_route: [] }))
        const toSendCopy = this.state.toSend;
        toSendCopy.route_id = e.target.value;
        this.setState({ toSend: toSendCopy })
    }

    handleTruckChange = (e) => {
        const truck = this.state.trucks.find(truck => truck.truck_id === e.target.value);
        const toSendCopy = this.state.toSend;
        toSendCopy.truck_id = truck.truck_id;
        const capacity = truck.capacity;
        this.setState({ toSend: toSendCopy, TruckCapacity: capacity })
        console.log(this.state.TruckCapacity)
    }
    handleDriverChange = (e) => {
        const toSendCopy = this.state.toSend;
        toSendCopy.driver_id = e.target.value;
        this.setState({ toSend: toSendCopy })
    }
    handleAssistantChange = (e) => {
        const toSendCopy = this.state.toSend;
        toSendCopy.assistant = e.target.value;
        this.setState({ toSend: toSendCopy })
    }

    render() {
        // console.log(this.state.assistants)
        return (
            <div>
                <div className='d-flex justify-content-center'>
                    <div className="card" style={{ margin: '100px', width: '50%' }}>
                        <div className="card-body">
                            <div className="card-title">
                                <h1 className='text-primary'>Schedule Truck</h1>
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Route</label>
                                    {/* <input type="select" className="form-control" value={this.state.title} onChange={this.handleTitleChange} /> */}
                                    <select className="form-control" name="routeSelect" id="routeSelect" onChange={(e) => this.handleRouteChange(e)}>
                                        <option hidden> Select Here....</option>
                                        {this.state.routes.map(route => (
                                            <option value={route.route_id} key={route.route_id}>{route.destination}</option>
                                        ))}
                                    </select>

                                </div >
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Truck </label>
                                    <select className="form-select" name="truckSelect" id="truckSelect" onChange={(e) => this.handleTruckChange(e)}>
                                        <option hidden>Select Truck Here....</option>
                                        {this.state.trucks.map(truck => (
                                            <option value={truck.truck_id} key={truck.truck_id}>{truck.truck_number}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Available</label>
                                    <div className="accordion-item accordion-secondary">
                                        <h2 className="accordion-header" id="flush-headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                Products
                                            </button>
                                        </h2>
                                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                            <table className="table mt-3 mb-4">
                                                <thead>
                                                    <tr >
                                                        <th className='col-5'>OrderID</th>
                                                        <th className='col-5' >Capacity</th>
                                                        <th className='col-5'></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.order_only_route.length !== 0 ? this.state.order_only_route.map(order => (
                                                        <tr key={order.order_id}>
                                                            <td>{order.order_id}</td>
                                                            <td>{order.capacity}</td>
                                                            <td><input className="form-check-input" type="checkbox" name="" id="" onClick={(e) => this.handleCheck(e, order)} disabled={this.state.TruckCapacity < (this.state.totalCapacity + order.capacity) ? 'true' : ''} /></td>
                                                        </tr>
                                                    )) : "No orders to Select"}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Driver </label>
                                    <select className="form-select" name="truckSelect" id="truckSelect" onChange={(e) => this.handleDriverChange(e)}>
                                        <option hidden>Select Truck Here....</option>

                                        {this.state.drivers.map(driver => (
                                            // console.log(driver.driver_id)
                                            < option value={driver.driver_id} key={driver.driver_id} > {driver.first_name}(driver_id:{driver.driver_id})</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Assistant </label>
                                    <select className="form-select" name="truckSelect" id="truckSelect" onChange={(e) => this.handleAssistantChange(e)}>
                                        <option hidden>Select Assistant Here....</option>
                                        {this.state.assistants.map(assistant => (
                                            // console.log(assistant)
                                            <option value={assistant.assistant_id} key={assistant.assistant_id}>assistant_id:{assistant.assistant_id}</option>
                                        ))}
                                    </select>
                                </div>

                                <button onClick={() => this.handleSchedule(this.state.toSend)} className="btn mt-3 btn-primary">Add Product</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
    handleCheck = (e, order) => {
        const check = e.target.checked;
        const capacity = order.capacity;
        // console.log(capacity)
        const totalCapacity = this.state.totalCapacity;
        const tempOrder = [...this.state.scheduleOrders];
        if (check) {
            tempOrder.push(order);
            this.setState({ totalCapacity: totalCapacity + capacity, scheduleOrders: tempOrder })
        } else {
            const index = tempOrder.indexOf(order);
            // console.log(index)
            tempOrder.splice(index, 1);
            this.setState({ totalCapacity: totalCapacity - capacity, scheduleOrders: tempOrder })
        }
        const toSendCopy = this.state.toSend;
        toSendCopy.products = tempOrder;
        this.setState({ toSend: toSendCopy })
    }

    handleSchedule = (schedule) => {
        if (!this.state.toSend.assistant) {
            alert("Select Assistant");
            return;
        }
        if (!this.state.toSend.driver_id) {
            alert("Select Driver");
            return;
        }
        if (!this.state.toSend.products) {
            alert("Select Product");
            return;
        }
        if (!this.state.toSend.route_id) {
            alert("Select Route");
            return;
        }
        if (!this.state.toSend.truck_id) {
            alert("Select Route");
            return;
        }
        // console.log(dataa)
        storeService.setScheduleTruck(schedule)
            // .catch(err => alert('Something went wrong'))
            .catch(err => console.log(err))
            .then(window.location = '/')
    }

}

export default ScheduleTruck;