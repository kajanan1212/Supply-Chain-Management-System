import React, { Component } from 'react'
import storeService from '../service/store.service';

class SetRoutes extends Component {
    state = {
        orders: [],
        routes: []
    }

    async componentDidMount() {
        // console.log(this.props)
        await storeService.getOrderToSetRoute(this.props.store_id).then((response) => {
            this.setState({ orders: response.data[0], routes: response.data[1] })
            // window.location.reload()
        });
    }

    render() {
        // if (this.state.orders.length === 0) return <h1 className='d-flex justify-content-center text-primary mt-2'>No Scheduled Orders</h1>;
        return (
            <div className="container mt-4 mb-4" >
                <table className="table table-success">
                    <thead>
                        <tr>
                            <th scope="col">OrderID</th>
                            {/* <th scope="col">ProductID</th> */}
                            <th scope="col">Address</th>
                            <th scope="col">City</th>
                            <th scope="col">District</th>
                            <th scope="col">Set Route</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.orders.map(order => (
                            <tr key={order.order_id}>
                                <td className='col-2'>{order.order_id}</td>
                                {/* <td className='col-2'>{order.map(pro => (<div>{pro.product_id} <br></br> </div>))}</td> */}
                                {/* {/* <td className='col-2'>{order.date_time}</td> */}
                                <td className='col-1'>{order.address}</td>
                                <td className='col-1'>{order.city}</td>
                                <td className='col-1'>{order.district}</td>
                                <td className="col-1">
                                    <select className="form-select" aria-label="Default select example" name="routeSelect" id="routeSelect" onChange={(e) => this.handleChange(e, order)}>
                                        <option selected>Select here...</option>
                                        {this.state.routes.map(route => (
                                            <option name={`${route.route_id}`} id={`${route.route_id}`} value={route.route_id} > {route.destination}</option>
                                        ))}
                                        {/* <option value={this.state.routes}></option> */}
                                    </select>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary mt-4 me-4" onClick={this.handleSetRoute}>Set Routes</button>

                </div>
            </div >
        );
    }

    handleChange(e, order) {

        const orders = this.state.orders;
        const index = orders.indexOf(order);
        orders[index] = { ...order, route: e.target.value }
        this.setState({ orders: orders })
        // console.log(e.target.value)
        // console.log(order)
    }
    handleSetRoute = () => {
        storeService.setRoutes(this.state.orders)
            .catch(err => alert('Something went wrong'))
            .then(window.location.reload())
    }
}


export default SetRoutes;