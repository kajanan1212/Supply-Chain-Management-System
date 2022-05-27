import React from 'react'
import storeService from '../service/store.service';

class OrdersOnTrain extends React.Component {
    state = {
        orders: []
    }

    async componentDidMount() {
        console.log(this.props)
        await storeService.getOrdersOnTrain(this.props.store_id).then((response) => {

            // const arranged = groupByAttr(response.data, 'order_id')
            // console.log(response)
            this.setState({ orders: response.data })

        });
    }
    render() {
        if (this.state.orders.length === 0) return <h1 className='d-flex justify-content-center text-primary mt-2'>No Orders on Train yet</h1>;
        return (
            <div className="container mt-4 mb-4" >
                <table className="table table-success">
                    <thead>
                        <tr>
                            <th scope="col">OrderId</th>
                            <th scope="col">Capacity (m<sup>3</sup>)</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.orders.map(order => (
                            <tr key={order.order_id}>
                                <td className='col-2'>{order.order_id}</td>

                                <td className='col-1'>{order.capacity}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary mt-4 me-4" onClick={this.handleReceive}>Confirm Receive</button>

                </div>
            </div >
        );
    }

    handleReceive = () => {
        storeService.setOrderReceiveFromTrain(this.state.orders)
            .catch(err => alert('Something went wrong'))
            .then(window.location.reload())
    }
}

export default OrdersOnTrain;