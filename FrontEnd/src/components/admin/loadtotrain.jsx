import React, { Component } from 'react'
import { groupByAttr } from '../common/groupByAttribute';
import adminServices from '../service/admin.service';

class LoadToTrain extends Component {
    state = {
        Orders: [],
        loadedtrain: [],
    }

    async componentDidMount() {
        // const district = queryString.parse(location.search);
        await adminServices.getItemsLoadToTrain().then((response) => {
            const orders = groupByAttr(response.data, 'destination');
            console.log(orders)
            //  // const arranged = groupByAttr(response.data, 'order_id')
            //     this.setState({ Orders: response.data, compartmentcapacity: response.data[0].compartmentcapacity, district: district })
            this.setState({ Orders: orders })
        });
    }
    render() {
        // if (this.state.Orders.length === 0) return <h1 className='d-flex justify-content-center text-primary mt-2'>No Orders to be Loaded</h1>;
        // const trainCapacity = this.state.Orders[0].capacity;
        return (
            <div>
                {this.state.Orders.map(order => (
                    <div className='m-5 ' key={order[0].destination}>
                        <h1>{order[0].destination}<input className="h4 ms-4  form-check-input" type="checkbox" name="" id="" onClick={(e) => this.handleCheck(e, order[0].train_id)} /></h1>
                        <table className="table table-success m-3" style={{ width: '50%' }}>
                            <thead>
                                <tr>
                                    <th scope="col">OrderIDs</th>
                                </tr>
                            </thead>
                            <tbody>
                                {order.map(ord => (
                                    <tr key={ord.order_id}>
                                        <td className='col-2'>{ord.order_id}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>))}

                <div className='d-flex justify-content-center container mb-5'>
                    <button className='btn btn-primary me-5' onClick={() => this.handleLoad()}>Load it</button>
                </div>
            </div>
        )
    }

    handleCheck = (e, order) => {
        // console.log(e.target)
        const check = e.target.checked;
        console.log(check)
        const capacity = order.capacity;
        // const totalCapacity = this.state.totalCapacity;
        const tempOrder = [...this.state.loadedtrain];
        if (check) {
            tempOrder.push(order);
            this.setState({ loadedtrain: tempOrder })
        } else {
            const index = tempOrder.indexOf(order);
            console.log(index)
            tempOrder.splice(index, 1);
            this.setState({ loadedtrain: tempOrder })
        }
    }
    handleLoad = () => {
        // console.log(orderIDs, this.state.district)
        adminServices.LoadOrdersToTrain(this.state.loadedtrain)
            .then(res => window.location.reload())
            .catch(err => alert('Something went wrong'))
    }
}

export default LoadToTrain;