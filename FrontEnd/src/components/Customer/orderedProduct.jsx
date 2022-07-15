import React, { Component } from 'react';
import customerServices from '../service/customer.service';
import { groupByAttr } from '../common/groupByAttribute';


class OrderedProduct extends Component {
    state = {
        orders: [],
    }

    async componentDidMount() {
        // this.setState({ or: this.props.user });
        const id = await this.props.customer_id;
        // console.log(id)
        await customerServices.getHistory(id).then((response) => {
            console.log(response)
            const arranged = groupByAttr(response.data, 'order_id')
            this.setState({ orders: arranged })

            // console.log(this.state.orders[0])
        });
    }

    handleStatusDisplay = (state) => {
        if (state === 'created' || state === 'paid' || state === 'trainsheduled') {
            return 'Product in Company'
        } else if (state === 'traintransport') {
            return 'Product is on Train'
        } else if (state === 'recievedstore' || state === 'routescheduled' || state === 'truckscheduled') {
            return 'Product Received to nearby store'
        } else if (state === 'ontheway') {
            return 'Your products is about to deliver'
        } else {
            return 'Deliverd'
        }
    }
    cancelOrder = (order) => {
        customerServices.cancelOrder(order).then(res => window.location.reload())
    }
    render() {
        if (this.state.orders.length === 0) return <h1 className='d-flex justify-content-center text-primary mt-2'>No Orders Yet</h1>;
        return (
            <div>
                <h1 className='d-flex justify-content-center text-primary mt-2'>Order Details</h1>

                <div className='d-flex justify-content-center row'>

                    {this.state.orders.map(order => {
                        console.log(order)
                        const x = new Date(order[0].date_time);
                        var delivarydate = new Date().setDate(x.getDate() + 10);
                        return (< div className="col-5 border border-4 border-dark p-3" style={{ margin: '25px', width: '50%' }}>
                            <div className="row">
                                <div className="col">
                                    <h4 className='text-bold'>Shopping Details</h4>
                                    <h6>Customer Name: {order[0].first_name}</h6>
                                    <h6>Address: {order[0].address} ,{order[0].city}, {order[0].district}</h6>
                                    <h6>Estimated Delivary: {new Date(delivarydate).toDateString()}</h6>
                                </div>
                                <div className="col">
                                    <h4 className='text-bold'>Product Details</h4>
                                    <ol key={order}>
                                        {order.map(o => (
                                            <li style={{ textTransform: 'capitalize' }}>{o.title} ({o.count}) </li>
                                        ))}
                                    </ol>
                                </div>
                                <div className="col">
                                    <h4 className='text-bold'>Order Detail</h4>
                                    <h6>Order Date: {x.toDateString()}</h6>
                                    <h6>Total Price:  Rs. {order[0].total_price}</h6>
                                    <h6>Total Capacity: {order[0].capacity} m<sup>3</sup></h6>
                                </div>
                            </div>
                            {(order[0].state === "delivered") ?
                                <div className='col d-flex justify-content-center'>
                                    <h5 className="text-success">Order Successfully Delivered</h5>
                                </div> :
                                (order[0].state !== "cancelled") ?
                                    <div className='row'>
                                        <div className='col d-flex justify-content-end'>
                                            <button className='btn btn-primary' disabled>
                                                {this.handleStatusDisplay(order[0].state)}
                                            </button>
                                        </div>
                                        <div className='col d-flex justify-content-start'>
                                            <button className='btn btn-danger' onClick={() => this.cancelOrder(order[0].order_id)}>
                                                Cancel Order
                                            </button>
                                        </div>
                                    </div>
                                    :
                                    <div className='col d-flex justify-content-center'>
                                        <h5 className="text-warning">Order Cancelled</h5>
                                    </div>
                            }
                        </div>
                        )
                    })}

                </div>
            </div >
        );
    }
}

export default OrderedProduct;