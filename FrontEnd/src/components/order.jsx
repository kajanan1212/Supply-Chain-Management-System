import React from 'react'

class Order extends React.Component {
    state = {
        orderId: 13,
        productId: 46,
        quantity: 2,
        capacity: 0.12,
        date: '12/03/2022',
        time: '05:30 pm',
        address: 'Chunnakam, Jaffna'

    }
    render() {
        const { orderId, productId, quantity, capacity, date, time, address } = this.state;
        return (

            <div className="col-4 p-4">
                <div style={{ backgroundColor: "#d9d0e4" }} className="rounded border border- secondary border-2 m-3 p-3">
                    <dl className="row">
                        <dt className="col-5">OrderId</dt>
                        <dt className="col-1">:</dt>
                        <dd className="col-6">{orderId}</dd>
                        <dt className="col-5">ProductId</dt>
                        <dt className="col-1">:</dt>
                        <dd className="col-6">{productId}</dd>
                        <dt className="col-5">Quantity</dt>
                        <dt className="col-1">:</dt>
                        <dd className="col-6">{quantity}</dd>
                        <dt className="col-5">Capacity</dt>
                        <dt className="col-1">:</dt>
                        <dd className="col-6">{capacity}</dd>
                        <dt className="col-5">Date</dt>
                        <dt className="col-1">:</dt>
                        <dd className="col-6">{date}</dd>
                        <dt className="col-5">Time</dt>
                        <dt className="col-1">:</dt>
                        <dd className="col-6">{time}</dd>
                        <dt className="col-5">Address</dt>
                        <dt className="col-1">:</dt>
                        <dd className="col-6">{address}</dd>
                    </dl>
                </div>
            </div >);
    }
}

export default Order;